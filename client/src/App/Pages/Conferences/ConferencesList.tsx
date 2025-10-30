import { Box, Tab, TextField, Typography } from "@mui/material";
import { ConferencesListItem } from "@/App/Pages/Conferences/ConferencesListItem";
import { SubTitle } from "@resources/Enums/Images";
import { Tags } from "@resources/Enums/Tags";
import { ListConferences } from "@resources/Pages/General/ConferencesResource";
import {
  ListItemsWrapper,
  ListTitleWrapper,
  ListWrapper,
} from "@styles/Components/List/List";
import {
  SubTitleTypography,
  TitleTypography,
  TitleWrapper,
} from "@styles/Layout/TitleStyle";
import { VideoTabs } from "@styles/Pages/VideosStyle";
import React, { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from "react-router-dom";

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

export const ConferencesList = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');

  const throttledSearch = useThrottle(searchInput, 500);
  const [currentTab, setCurrentTab] = useState<Tags>(
    (searchParams.get('lang') as Tags) || Tags.ALL
  );
  
  const selectedConference = searchParams.get('conference');
  const isDrawerOpen = !!selectedConference;
  
  const handleFilterTag = (
    event: SyntheticEvent<Element, Event>,
    newTab: Tags,
  ) => {
    setCurrentTab(newTab);

    const params: Record<string, string> = {};
    if (searchInput) params.search = searchInput;
    if (newTab !== Tags.ALL) params.lang = String(newTab);
    if (selectedConference) params.conference = selectedConference;
    
    setSearchParams(params);
  };

  const talksCategories = [
    { label: t("app.lives.tags.all"), value: Tags.ALL },
    { label: t("app.lives.tags.english"), value: Tags.ENGLISH },
    { label: t("app.lives.tags.french"), value: Tags.FRENCH },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    
    const params: Record<string, string> = {};
    if (value) params.search = value;
    if (currentTab !== Tags.ALL) params.lang = currentTab;
    if (selectedConference) params.conference = selectedConference;
    
    setSearchParams(params);
  };

  const handleCloseDrawer = () => {
    const params: Record<string, string> = {};
    if (searchInput) params.search = searchInput;
    if (currentTab !== Tags.ALL) params.lang = currentTab;
    
    setSearchParams(params);
  };

  const conferences = ListConferences();

  const filteredConferences = useMemo(() => {
    if (!throttledSearch) {
      return conferences;
    }
    
    const filtered = conferences.filter((conference) =>
      conference.title.toLowerCase().includes(throttledSearch.toLowerCase())
    );
    
    return filtered;
  }, [throttledSearch, conferences]);

  return (
    <ListWrapper>
      <ListTitleWrapper>
        <TitleWrapper textAlign="right">
          <img src={SubTitle.CONFS} alt="Conferences page subtitle icon" />
          <TitleTypography variant="h3">
            {t("app.confs.subtitle")}
          </TitleTypography>
        </TitleWrapper>
        <SubTitleTypography>{t("app.confs.description")}</SubTitleTypography>
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
            {talksCategories.map((category) => (
              <Tab
                value={category.value}
                key={category.label}
                label={category.label}
              />
            ))}
          </VideoTabs>
          <Box>
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
        {filteredConferences.length > 0 ? (
          filteredConferences.map((conference) => {
            const eventsWithStringTags = conference.events.map(event => ({
              ...event,
              tags: (event.tags ?? []).map(tag => tag ? String(tag) : ""),
            }));
            
            return (
              <ConferencesListItem
                {...conference}
                events={eventsWithStringTags}
                key={`${conference.title}-${conference.events[0].month}-${conference.events[0].day}`}
                value={currentTab}
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
  );
};
