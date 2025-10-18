import { Routes } from "@/App/Resources/Enums/Routes";
import { BurnoutQuizContainedButton, BurnoutQuizOutlinedButton } from "@/App/Styles/Pages/FalloutOnPassionStyle/QuizLayoutStyle";
import { alpha, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const BurnoutQuizStart = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box 
            sx={{ 
                display: 'flex', 
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
                    border: '0 solid #e5e7eb', 

                    '&:before': {
                        background: `url('https://i.ibb.co/ptZtcQh/Copie-de-GIT-INIT-4.png') no-repeat center center`,
                        backgroundSize: 'cover',
                        borderRadius: '.5rem',
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
                        borderRadius: '.5rem',
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
                                >{t('app.explore.battery.title')}</Typography>
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
                                >{t('app.explore.battery.quiz.subText')}</Typography>
                            </Box>

                            <Box sx={{ marginTop: '2em' }}>
                                <Typography variant="h6" fontStyle="italic">{t('app.explore.battery.quiz.start.caption')}</Typography>
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
                            <BurnoutQuizOutlinedButton variant="outlined" onClick={() => navigate('/explore/burnout/1')}>{t('app.general.actions.start')}</BurnoutQuizOutlinedButton>
                            <BurnoutQuizContainedButton variant="contained" onClick={() => navigate(Routes.EXPLORE)}>{t('app.general.actions.back')}</BurnoutQuizContainedButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}