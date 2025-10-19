import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";
import { Routes } from "@/App/Resources/Enums/Routes";
import { FooterLang, LangSwitch } from "@/App/Styles/Layout/Footer";
import { BurnoutQuizContainedButton, BurnoutQuizOutlinedButton } from "@/App/Styles/Pages/FalloutOnPassionStyle/QuizLayoutStyle";
import useChangeLangage from "@/Hooks/useChangeLangage";
import { alpha, AppBar, Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const QuizStartLayout = ({ 
    backgroundImg,
    title, 
    subText, 
    caption, 
    startRoute 
}: { 
    backgroundImg: string;
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
            sx={{ 
                display: 'flex',
                flexDirection: 'column', 
                flex: 1,
                padding: '.4rem',
                backgroundColor: '#e5e7eb'
            }}
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    flex: 1,
                    position: 'relative',

                    '&:before': {
                        background: `url(${backgroundImg}) no-repeat center center`,
                        backgroundSize: 'cover',
                        borderTopLeftRadius: '.5rem',
                        borderTopRightRadius: '.5rem',
                        filter: 'brightness(.4)',
                        content: '""',
                        display: 'block',
                        height: '100%',
                        position: 'absolute',
                        width: '100%'
                    },

                    '&:after': {
                        backgroundColor: alpha('#1B1464', .4),
                        backgroundSize: 'cover',
                        borderTopLeftRadius: '.5rem',
                        borderTopRightRadius: '.5rem',
                        content: '""',
                        display: 'block',
                        height: '100%',
                        position: 'absolute',
                        width: '100%'
                    } 
                }}
            >
                <Box 
                    sx={{ 
                        color: '#c8d6e5', 
                        flex: 1,
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        maxWidth: '90%',
                        margin: '0 auto',
                    }}
                >
                    <Box 
                        sx={(theme) => ({ 
                            display: 'flex', 
                            flexDirection: 'column',
                            gap: '24px', 
                            padding: '1rem', 
                            zIndex: 3000,

                            [theme.breakpoints.down(680)]: {
                                padding: '.5rem'
                            }
                        })}
                    >
                        <Box sx={{ padding: '1rem' }}>
                            <Box>
                                <Typography 
                                    variant="h1" 
                                    sx={(theme) => ({ 
                                        [theme.breakpoints.down(680)]: {
                                            fontSize: '4rem'
                                        }
                                    })}
                                >{title}</Typography>
                            </Box>
                            
                            <Box>
                                <Typography 
                                    variant="h3"
                                    sx={(theme) => ({ 
                                        [theme.breakpoints.down(680)]: {
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

                                [theme.breakpoints.down(680)]: {
                                    flexDirection: 'column'
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
                position="static" 
                color="transparent" 
                elevation={0} 
                sx={{ 
                    backgroundColor: '#0CD5AC', 
                    bottom: 0, 
                    top: 'auto', 
                    flexShrink: 0,
                    borderRadius: '0 0 0.5rem 0.5rem'
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '18px 24px' }}>
                    <Box sx={{ alignItems: 'center', display: 'flex', flex: 1 }}>
                        <BuyCoffeeLink noAbsolute />
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