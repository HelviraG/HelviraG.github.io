import { AppChip } from "@/App/Components/Chip/Chip";
import { Tags } from "@/App/Resources/Enums/Tags";
import { FooterLang, LangSwitch } from "@/App/Styles/Layout/Footer";
import { ChipWrapper } from "@/App/Styles/Pages/ConferencesStyle";
import useChangeLangage from "@/Hooks/useChangeLangage";
import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const QuizLayout = ({ children, buttons, withFooter = true }: { children: React.ReactNode; buttons: React.ReactNode; withFooter?: boolean }) => {
    const { t } = useTranslation();
    const { appLang: lang, changeLang: changeLanguage } = useChangeLangage();
    const isTablet = useMediaQuery("(max-width: 800px");

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#FFF', padding: '14px', top: 0 }}>
                <Toolbar sx={(theme) => ({ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '0!important',

                    [theme.breakpoints.down(601)]: {
                        flexDirection: 'column-reverse'
                    }
                })}>
                    <Box sx={(theme) => ({ 
                        display: 'flex', 
                        alignItems: 'baseline', 
                        gap: 2,

                        [theme.breakpoints.down(800)]: { 
                        gap: 4,
                        },

                        [theme.breakpoints.down(601)]: {
                        flexDirection: 'column',
                        gap: 1,
                        width: '-webkit-fill-available',
                        }
                    })}>
                        <ChipWrapper>
                            <AppChip label="fallout" type={Tags.FALLOUT} />
                            <AppChip label="passion" type={Tags.QUIZ_PASSION} />
                        </ChipWrapper>
                        <Box sx={(theme) => ({ 
                            [theme.breakpoints.down(601)]: {
                            textAlign: 'center', 
                            width: '100%' 
                            }
                        })}>
                            <Typography
                                component="div"
                                variant="body1"
                                sx={{ fontWeight: 800, color: '#30336b' }}
                            >
                                🔥​ {t("app.explore.fallout_on_passion.title")}
                            </Typography>
                        </Box>
                    </Box>
            
                    <Box sx={(theme) => ({ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 4,

                        [theme.breakpoints.down(800)]: {
                        gap: 1,
                        },

                        [theme.breakpoints.down(601)]: {
                        '& .MuiBox-root': {
                            justifyContent: 'start'
                        },

                        width: '100%',
                        }
                    })}>
                        <FooterLang>
                            <Typography variant="caption">🇫🇷{isTablet ? '' : ' FR'}</Typography>
                            <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
                            <Typography variant="caption">🇺🇸{isTablet ? '' : ' EN'}</Typography>
                        </FooterLang>
                        <IconButton>
                            <CloseOutlined />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
            {withFooter && (
                <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#FFF', bottom: 0, top: 'auto' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '18px 24px' }}>
                        {buttons}
                    </Toolbar>
                </AppBar>
            )}
        </>
    )
}