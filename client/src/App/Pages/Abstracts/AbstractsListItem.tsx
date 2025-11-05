import { Tags } from "@/App/Resources/Enums/Tags";
import { IAbstract, IConference } from "@/App/Resources/Pages/General/ConferencesResource";
import { CardContentTitle, CardWrapper } from "@/App/Styles/Components/List/ListItem";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Chip, styled } from '@mui/material';
import { AbstractDrawer } from "./AbstractDrawer";

const match = (text: string, query: string, options?: { insideWords?: boolean }) => {
  if (!query) return [];
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const indices: number[][] = [];
  let startIndex = 0;
  while (true) {
    const idx = lowerText.indexOf(lowerQuery, startIndex);
    if (idx === -1) break;
    indices.push([idx, idx + query.length]);
    startIndex = idx + query.length;
  }
  return indices;
};

const parse = (text: string, matches: number[][]) => {
  if (!matches || matches.length === 0) {
    return [{ text, highlight: false }];
  }
  const parts: { text: string; highlight: boolean }[] = [];
  let lastIndex = 0;
  for (const [start, end] of matches) {
    if (lastIndex < start) {
      parts.push({ text: text.slice(lastIndex, start), highlight: false });
    }
    parts.push({ text: text.slice(start, end), highlight: true });
    lastIndex = end;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false });
  }
  return parts;
};

const drawerWidth = 500;

export const Main = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
  position: 'relative',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
  ],
}));

export const AbstractsListItem = ({
  id,
  title,
  lang,
  isNew,
  value,
  type,
}: { value?: string; type?: string } & IAbstract) => {
    const hasType = type === value;
    const [isVisible, setIsVisible] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const itemRef = useRef<HTMLDivElement>(null);

    const searchQuery = searchParams.get('search') || '';
    const selectedAbstract = searchParams.get('abstract');
    const isDrawerOpen = selectedAbstract === encodeURIComponent(id);

    const highlightedTitle = useMemo(() => {
      if (!searchQuery) {
        return [{ text: title, highlight: false }];
      }

      const matches = match(title, searchQuery, { insideWords: true });
      const parts = parse(title, matches);
      
      return parts;
    }, [title, searchQuery]);

    const handleTitleClick = () => {
      // Get current params
      const params: Record<string, string> = {};
      const search = searchParams.get('search');
      const lang = searchParams.get('lang');
      const menu = searchParams.get('menu');
      
      if (search) params.search = search;
      if (lang) params.lang = lang;
      if (menu) params.menu = menu;
      params.abstract = encodeURIComponent(id);
      
      setSearchParams(params);
    };

    const handleCloseDrawer = () => {
      // Remove conference param but keep other params
      const params: Record<string, string> = {};
      const search = searchParams.get('search');
      const lang = searchParams.get('lang');
      const menu = searchParams.get('menu');
      
      if (search) params.search = search;
      if (lang) params.lang = lang;
      if (menu) params.menu = menu;
      
      setSearchParams(params);
    };

    console.log('title', title);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                setIsVisible(true);
                if (itemRef.current) {
                    observer.unobserve(itemRef.current);
                }
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <>
            <CardWrapper
                ref={itemRef}
                isConference
                hidden={!hasType && value !== Tags.ALL}
                sx={(theme) => ({
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                    transition: 'all 0.6s ease-out',

                    '&:hover': {
                        border: '1px solid #444aff',
                        boxShadow: (theme) => `0 4px 20px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.5)'}`,
                        cursor: 'pointer'
                    },

                    ...(selectedAbstract === encodeURIComponent(id) && {
                        border: '1px solid #444aff',
                        boxShadow: `0 4px 20px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.5)'}`
                    })
                })}
                onClick={handleTitleClick}
            >
                <Box 
                    sx={(theme) => ({ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2, 
                        flexWrap: 'wrap', 
                        width: '100%',

                        [theme.breakpoints.down(644)]: { 
                            flexDirection: 'column', 
                            alignItems: 'flex-start',
                        }
                    })}
                >
                    <Chip label={lang} sx={(theme) => ({ backgroundColor: theme.game.special.dark, color: '#A3FFEA', textTransform: 'uppercase' })} />
                    {isNew.toString() === 'true' && <Chip label={Tags.NEW} sx={(theme) => ({ backgroundColor: theme.game.special.dark, color: '#FC427B', textTransform: 'uppercase' })} />}
                    <CardContentTitle 
                        variant="h4" 
                        isConference
                        sx={{ 
                            cursor: 'pointer',
                            '&:hover': {
                                opacity: 0.8,
                            }
                        }}
                    >
                        {highlightedTitle.map((part, index) => (
                        <span
                            key={index}
                            style={{
                            color: part.highlight ? '#f53b57' : '#1E1E40',
                            padding: part.highlight ? '0 1px' : '0',
                            }}
                        >
                            {part.text}
                        </span>
                        ))}
                    </CardContentTitle>
                </Box>
                
            </CardWrapper>

            {/* Drawer */}
            <AbstractDrawer
                id={id}
                isDrawerOpen={isDrawerOpen}
                handleCloseDrawer={handleCloseDrawer}
            />
        </>
    );
};
