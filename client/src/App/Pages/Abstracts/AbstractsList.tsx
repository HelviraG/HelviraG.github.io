import { ListAbstracts } from "@/App/Resources/Pages/General/ConferencesResource";
import { ListItemsWrapper, ListTitleWrapper, ListWrapper } from "@/App/Styles/Components/List/List";
import { Box, Tab, TextField, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { AbstractsListItem } from "./AbstractsListItem";
import SearchIcon from '@mui/icons-material/Search';
import { SubTitleTypography, TitleTypography, TitleWrapper } from "@/App/Styles/Layout/TitleStyle";
import { Tags } from "@/App/Resources/Enums/Tags";
import { VideoTabs } from "@/App/Styles/Pages/VideosStyle";

function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}


export const AbstractsList = () => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');

    const throttledSearch = useThrottle(searchInput, 500);
    const [currentTab, setCurrentTab] = useState<Tags>(
        (searchParams.get('type') as Tags) || Tags.ALL
    );

    const selectedAbstract = searchParams.get('abstract');

    const handleFilterTag = (
        event: SyntheticEvent<Element, Event>,
        newTab: Tags,
    ) => {
        setCurrentTab(newTab);

        const params: Record<string, string> = {};
        if (searchInput) params.search = searchInput;
        if (newTab !== Tags.ALL) params.type = String(newTab);
        if (selectedAbstract) params.abstract = selectedAbstract;
        
        setSearchParams(params);
    };
    
    const abstractsCategories = [
        { label: t("app.abstracts.tags.all"), value: Tags.ALL },
        { label: t("app.abstracts.tags.given"), value: Tags.GIVEN },
        { label: t("app.abstracts.tags.unseen"), value: Tags.NEW },
    ];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchInput(value);
        
        const params: Record<string, string> = {};
        if (value) params.search = value;
        if (selectedAbstract) params.abstract = selectedAbstract;
        
        setSearchParams(params);
    };

    const abstracts = ListAbstracts();

    const filteredAbstracts = useMemo(() => {
        if (!throttledSearch) {
            return abstracts;
        }
        
        const filtered = abstracts.filter((abstract) =>
            abstract.title.toLowerCase().includes(throttledSearch.toLowerCase())
        );
        
        return filtered;
    }, [throttledSearch, abstracts]);

    return (
        <ListWrapper>
            <ListTitleWrapper>
                <TitleWrapper textAlign="right">
                    <TitleTypography variant="h3">
                    {t("app.abstracts.subtitle")}
                    </TitleTypography>
                </TitleWrapper>
                <SubTitleTypography>{t("app.abstracts.description")}</SubTitleTypography>
            </ListTitleWrapper>
            <ListItemsWrapper sx={{ display: "flex", flexDirection: "column" }}>
                <Box 
                    sx={(theme) => ({ 
                    display: 'flex', 
                    width: '100%', 
                    margin: '0 auto', 
                    marginBottom: '3em',
        
                    [theme.breakpoints.down(800)]: {
                        marginBottom: theme.spacing(1)
                    },
        
                    [theme.breakpoints.down(644)]: { 
                        flexDirection: 'column'
                    }
                    })}
                >
                    <Box 
                        sx={(theme) => ({ 
                            alignItems: 'baseline',
                            display: 'flex', 
                            width: '100%', 
                            margin: '0 auto', 
                
                            [theme.breakpoints.down(800)]: {
                                marginBottom: theme.spacing(1)
                            },
                
                            [theme.breakpoints.down(644)]: { 
                                flexDirection: 'column'
                            }
                        })}
                    >
                        <VideoTabs
                            variant="scrollable"
                            value={currentTab}
                            onChange={handleFilterTag}
                            sx={(theme) => ({ 
                                flex: 1, 
                
                                [theme.breakpoints.down(644)]: { 
                                    marginBottom: 0
                                }
                            })}
                            >
                            {abstractsCategories.map((category) => (
                                <Tab
                                    value={category.value}
                                    key={category.label}
                                    label={category.label}
                                />
                            ))}
                        </VideoTabs>
                        <Box 
                            sx={(theme) => ({ 
                                display: 'flex', 
                                alignItems: 'flex-end',

                                [theme.breakpoints.down(644)]: { 
                                width: '-webkit-fill-available',
                                justifyContent: 'flex-end',
                                marginBottom: '1em'
                                }
                            })}
                        >
                            <SearchIcon sx={{ color: 'action.active', mr: 1, mt: 0.5 }} />
                            <TextField 
                                id="search-conferences-input" 
                                label="Search" 
                                variant="standard" 
                                value={searchInput}
                                onChange={handleSearchChange}
                                sx={{ '.MuiInputLabel-root': { color: '#808e9b', fontWeight: 300 } }} 
                            />
                        </Box>
                    </Box>
                </Box>
                {filteredAbstracts.length > 0 ? (
                    filteredAbstracts.map((abstract) => {                
                        return (
                            <AbstractsListItem
                                {...abstract}
                                key={`${abstract.id}`}
                                value={currentTab}
                                type={abstract.isNew.toString() === 'true' ? Tags.NEW : Tags.GIVEN }
                            />
                        );
                    })
                ) : (
                    <Box sx={{ textAlign: 'center', padding: '40px', width: '100%' }}>
                        <Typography variant="h6" color="text.secondary">
                            {t("app.confs.no_results")}
                        </Typography>
                    </Box>
                )}
            </ListItemsWrapper>
        </ListWrapper>
    )
}