import { AppChip } from "@/App/Components/Chip/Chip";
import { Routes } from "@/App/Resources/Enums/Routes";
import { Tags } from "@/App/Resources/Enums/Tags";
import { FooterLang, LangSwitch } from "@/App/Styles/Layout/Footer";
import { ChipWrapper } from "@/App/Styles/Pages/ConferencesStyle";
import useChangeLangage from "@/Hooks/useChangeLangage";
import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const QuizLayout = ({ 
    children, 
    buttons, 
    withFooter = true, 
    title,
    isPassionQuiz = true,
    isBurnoutQuiz,
}: { 
    children: React.ReactNode; 
    buttons: React.ReactNode; 
    withFooter?: boolean; 
    title: string;
    isPassionQuiz?: boolean; 
    isBurnoutQuiz?: boolean;
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { appLang: lang, changeLang: changeLanguage } = useChangeLangage();
    const isTablet = useMediaQuery("(max-width: 800px");

    return (
        <Box 
            sx={{ 
                height: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',

                ...(isBurnoutQuiz && {
                    backgroundColor: '#e5e7eb',
                    border: '0 solid #e5e7eb',
                    padding: '.4rem'
                })
            }}
        >
            <AppBar 
                position="static" 
                color="transparent" 
                elevation={0} 
                sx={{ 
                    backgroundColor: '#FFF', 
                    padding: '14px', 
                    top: 0,

                    ...(isBurnoutQuiz && {
                        borderBottom: '1px solid #e5e7eb',
                        borderRadius: '0.5rem 0.5rem 0 0',
                        padding: '1.5rem'
                    }),
                }}
            >
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
                            alignItems: 'center',
                            gap: 4,
                            textAlign: 'center'
                        },

                        [theme.breakpoints.down(601)]: {
                            flexDirection: 'column',
                            gap: 1,
                            width: '-webkit-fill-available'
                        }
                    })}>
                        {isPassionQuiz && (
                            <ChipWrapper 
                                sx={(theme) => ({
                                    [theme.breakpoints.down(601)]: {
                                        width: '100%',
                                        display: 'flex'
                                    }
                                })}
                            >
                                <AppChip label="fallout" type={Tags.FALLOUT} />
                                <AppChip label="passion" type={Tags.QUIZ_PASSION} />
                            </ChipWrapper>
                        )}
                        <Box sx={(theme) => ({ 
                            [theme.breakpoints.down(601)]: {
                                textAlign: 'center', 
                                width: '100%' 
                            },

                            [theme.breakpoints.down(680)]: {
                                textAlign: 'left'
                            }
                        })}>
                            {isBurnoutQuiz && (
                                <Box 
                                    sx={(theme) => ({
                                        textAlign: 'left',

                                        [theme.breakpoints.down(601)]: {
                                            width: '100%',
                                            display: 'flex'
                                        }
                                    })}
                                >
                                    <Typography variant="body2" sx={{ color: '#6b7280' }}>{t('app.explore.battery.quiz.subText')}</Typography>
                                </Box>
                            )}

                            <Typography
                                component="div"
                                variant={isPassionQuiz ? "body1" : "h6"}
                                sx={{ fontWeight: 800, color: '#30336b' }}
                            >
                                {title}
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
                        },

                        ...(isBurnoutQuiz && { justifyContent: 'end' })
                    })}>
                        {isPassionQuiz && (
                            <FooterLang>
                                <Typography variant="caption">🇫🇷{isTablet ? '' : ' FR'}</Typography>
                                    <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
                                <Typography variant="caption">🇺🇸{isTablet ? '' : ' EN'}</Typography>
                            </FooterLang>
                        )}
                        <IconButton onClick={() => navigate(Routes.EXPLORE)}>
                            <CloseOutlined />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
            {withFooter && (
                <AppBar
                    position="static" 
                    color="transparent" 
                    elevation={0} 
                    sx={{ 
                        backgroundColor: '#FFF', 
                        bottom: 0, 
                        top: 'auto', 
                        flexShrink: 0,

                        ...(isBurnoutQuiz && {
                            borderRadius: '0 0 0.5rem 0.5rem'
                        })
                    }}
                >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '18px 24px' }}>
                        {isPassionQuiz && buttons}

                        {isBurnoutQuiz && (
                            <>
                                <Box sx={{ flex: 1 }}>{buttons}</Box>
                                <FooterLang justifyEnd>
                                    <Typography variant="caption">🇫🇷{isTablet ? '' : ' FR'}</Typography>
                                        <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
                                    <Typography variant="caption">🇺🇸{isTablet ? '' : ' EN'}</Typography>
                                </FooterLang>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            )}
        </Box>
    )
}