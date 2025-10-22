import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";
import { Routes } from "@/App/Resources/Enums/Routes";
import { FooterLang, LangSwitch } from "@/App/Styles/Layout/Footer";
import { BurnoutQuizContainedButton, BurnoutQuizOutlinedButton } from "@/App/Styles/Pages/FalloutOnPassionStyle/QuizLayoutStyle";
import useChangeLangage from "@/Hooks/useChangeLangage";
import { alpha, AppBar, Box, CardMedia, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const QuizStartLayout = ({ 
    backgroundImg,
    iconImg,
    title, 
    subText, 
    caption, 
    startRoute 
}: { 
    backgroundImg: string;
    iconImg?: string;
    title: string;
    subText: string;
    caption: string;
    startRoute: string
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { appLang: lang, changeLang: changeLanguage } = useChangeLangage();
    const isTablet = useMediaQuery("(max-width: 800px");
    

    return (
        <Box 
            sx={(theme) => ({ 
                display: 'flex',
                flexDirection: 'column', 
                height: '100vh',
                backgroundColor: '#e5e7eb',
                overflow: 'hidden',

                [theme.breakpoints.down(780)]: {
                    padding: 0
                }
            })}
        >
            <Box 
                sx={(theme) => ({ 
                    display: 'flex', 
                    flex: 1,
                    position: 'relative',
                    overflowY: 'auto',
                    marginBottom: '72px',

                    '&:before': {
                        background: `url(${backgroundImg}) no-repeat center center`,
                        backgroundSize: 'cover',
                        filter: 'brightness(.3)',
                        content: '""',
                        display: 'block',
                        height: '100vh',
                        position: 'absolute',
                        width: '100%'
                    },

                    '&:after': {
                        backgroundColor: alpha(theme.game.purple.dark, .35),
                        backgroundSize: 'cover',
                        content: '""',
                        display: 'block',
                        height: '100vh',
                        position: 'absolute',
                        width: '100%'
                    },

                    [theme.breakpoints.down(780)]: {
                        '&:after, &:before': {
                            borderRadius: 0
                        }
                    }
                })}
            >
                <Box 
                    sx={(theme) => ({ 
                        color: '#c8d6e5', 
                        flex: 1,
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        justifyContent: 'center',

                        [theme.breakpoints.up(781)]: {
                            maxWidth: '80%',
                            margin: '0 auto'
                        },

                        [theme.breakpoints.down(780)]: {
                            maxWidth: '90%',
                            margin: '0 auto',
                            justifyContent: 'center'
                        }
                    })}
                >
                    <Box 
                        sx={(theme) => ({ 
                            display: 'flex', 
                            flexDirection: 'column',
                            gap: '24px', 
                            padding: '1rem', 
                            zIndex: 3000,

                            [theme.breakpoints.down(780)]: {
                                padding: '.5rem',
                                gap: 0
                            },

                            [theme.breakpoints.down(425)]: {
                                marginTop: '6rem'
                            }
                        })}
                    >
                        <Box sx={{ padding: '1rem' }}>
                            <Box sx={{
                                marginBottom: '1em',
                                width: '60px',
                            }}>
                                <CardMedia component="img" src={iconImg} />
                            </Box>
                            <Box>
                                <Typography 
                                    variant="h1" 
                                    sx={(theme) => ({ 
                                        [theme.breakpoints.down(780)]: {
                                            fontSize: '4rem'
                                        },

                                        [theme.breakpoints.down(480)]: {
                                            fontSize: '3rem'
                                        }
                                    })}
                                >{title}</Typography>
                            </Box>
                            
                            <Box>
                                <Typography 
                                    variant="h3"
                                    sx={(theme) => ({ 
                                        [theme.breakpoints.down(780)]: {
                                            fontSize: '2rem',
                                            marginTop: '1rem'
                                        }
                                    })}
                                >{subText}</Typography>
                            </Box>

                            <Box sx={{ marginTop: '2em' }}>
                                <Typography variant="h6" fontStyle="italic">{caption}</Typography>
                            </Box>
                        </Box>
                        <Box 
                            sx={(theme) => ({ 
                                display: 'flex', 
                                gap: '24px', 
                                padding: '1rem',

                                [theme.breakpoints.down(780)]: {
                                    flexDirection: 'column',
                                    gap: '12px'
                                }
                            })}
                        >
                            <BurnoutQuizOutlinedButton variant="outlined" onClick={() => navigate(startRoute)}>{t('app.general.actions.start')}</BurnoutQuizOutlinedButton>
                            <BurnoutQuizContainedButton variant="contained" onClick={() => navigate(Routes.EXPLORE)}>{t('app.general.actions.back')}</BurnoutQuizContainedButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <AppBar
                position="fixed" 
                color="transparent" 
                elevation={0} 
                sx={(theme) => ({ 
                    backgroundColor: theme.game.purple.dark, 
                    bottom: 0, 
                    top: 'auto', 
                    flexShrink: 0,
                    zIndex: 30000
                })}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '18px 24px' }}>
                    <Box sx={{ alignItems: 'center', display: 'flex', flex: 1 }}>
                        <BuyCoffeeLink noAbsolute small />
                        <FooterLang justifyEnd>
                            <Typography variant="caption">🇫🇷{isTablet ? '' : ' FR'}</Typography>
                                <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
                            <Typography variant="caption">🇺🇸{isTablet ? '' : ' EN'}</Typography>
                        </FooterLang>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}