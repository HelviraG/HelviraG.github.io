import { useTranslation } from "react-i18next";
import { Box, Button, CardMedia, Divider, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from 'react';
import useClickOutside from "../../../../Hooks/useClickOutside";
import { QuizPopper } from './QuizPopper';
import {QuizSettings} from '../Components/QuizSettings';
import { Routes } from "@resources/Enums/Routes";
import { useNavigate } from "react-router-dom";
import { showField, showLastAnswer } from "@slices/QuizSlice";
import { useSelector } from "react-redux";
import { QuizLayout } from "../Layouts/QuizLayout";
import { QuizContainedButton, QuizOutlinedButton } from "@/App/Styles/Pages/FalloutOnPassionStyle/QuizLayoutStyle";

export const QuizStart = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [openSettings, setOpenSettings] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const isMobile = useMediaQuery('(max-width: 425px)');
    const isWavyMobile = useMediaQuery('(max-width: 767px)');

    const field = useSelector(showField);
    const lastAnswer = useSelector(showLastAnswer);

    const popperRef = useRef(null);

    const startImage = isMobile
        ? t('app.explore.fallout_on_passion.cover_sm')
        : t('app.explore.fallout_on_passion.cover');

    const resumeImage = isMobile
        ? t('app.explore.fallout_on_passion.resume_sm')
        : t('app.explore.fallout_on_passion.resume');

    useClickOutside(popperRef, () => { setOpenSettings(false) });

    const handlePopper =
        (event: any) => {
                setAnchorEl(event.currentTarget);
                setOpenSettings(true);
            };

    const handleClickStart = () => {
        setTimeout(() => navigate(Routes.QUIZ_INIT), 1500);
    };

    const handleClickResume = () => {
        setTimeout(() => {
            if (field) {
                if (lastAnswer) {
                    navigate(`/explore/passion/whoami/${field}/${lastAnswer}`);
                }
                navigate(`/explore/passion/whoami/${field}/0`);
            }
        }, 1500);
    };

    return (
        <QuizLayout 
            buttons={
                <>
                    {field && (
                        <>
                            <Box>
                                <QuizOutlinedButton 
                                    variant="outlined" 
                                    onClick={handleClickStart}
                                >
                                    {t('app.general.actions.start_again')}
                                </QuizOutlinedButton>
                            </Box>
                            <Box>
                                <QuizContainedButton 
                                    variant="contained" 
                                    onClick={handleClickResume}
                                >
                                    {t('app.general.actions.resume')}
                                </QuizContainedButton>
                            </Box>
                        </>
                    )}
                    {!field && 
                        <Box sx={(theme) => ({ 
                            flex: 1, 
                            display: 'flex', 
                            justifyContent: 'end',

                            [theme.breakpoints.down(500)]: {
                                flexDirection: 'column',
                                gap: 2,
                                alignItems: 'center',
                                width: '-webkit-fill-available',
                            }
                        })}>
                            <QuizContainedButton 
                                variant="contained" 
                                hasFullWidth
                                onClick={handleClickStart}
                            >
                                {t('app.general.actions.start')}
                            </QuizContainedButton>
                        </Box>
                    }
                </>
            }
        >
            <Box 
                sx={(theme) => ({ 
                    position: 'relative', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flex: 1,
                    overflowY: 'auto',

                    [theme.breakpoints.down(800)]: {
                        backgroundColor: '#EEFAE1',
                        flexDirection: 'column-reverse'
                    },
                })}
            >
                <Box 
                    sx={(theme) => ({ 
                        backgroundColor: '#EEFAE1', 
                        display: 'flex', 
                        height: '-webkit-fill-available', 
                        alignItems: 'center', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        width: '50%',

                        [theme.breakpoints.down(800)]: {
                            marginBottom: '3em',
                            width: '-webkit-fill-available'
                        }
                    })}
                >
                    <Box 
                        sx={(theme) => ({ 
                            backgroundColor: '#B8E986', 
                            padding: '4em', 
                            borderRadius: '32px', 
                            maxWidth: '80%',

                            [theme.breakpoints.down(800)]: {
                                padding: '2em 3em'
                            },

                            [theme.breakpoints.down(500)]: {
                                marginBottom: '8.5em',
                                padding: '2em',
                                width: '90%'
                            }
                        })}
                    >
                        <Typography variant="h3" sx={{ textAlign: 'left' }}>
                        {field ? t('app.explore.fallout_on_passion.quiz.welcome_back_title') : t('app.explore.fallout_on_passion.quiz.welcome_title')}
                        </Typography>
                        <Divider sx={{ margin: '1em 0 2em 0' }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify'  }}>
                            {field ? t('app.explore.fallout_on_passion.quiz.welcome_back_subtitle_1') : t('app.explore.fallout_on_passion.quiz.welcome_subtitle_1')}
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>
                            {field ? t('app.explore.fallout_on_passion.quiz.welcome_back_subtitle_2') : t('app.explore.fallout_on_passion.quiz.welcome_subtitle_2')}
                        </Typography>
                    </Box>                    
                    <QuizSettings isMobile={isWavyMobile} handlePopper={handlePopper} isSettingsOpen={openSettings} />
                </Box>
                <Box 
                    sx={(theme) => ({ 
                        padding: '2em', 
                        width: '50%',

                        [theme.breakpoints.down(800)]: {
                            width: '-webkit-fill-available'
                        },

                        [theme.breakpoints.down(500)]: {
                            padding: '1em'
                        }
                    })}
                >
                    <CardMedia
                        component="img"
                        image={field ? resumeImage : startImage}
                        sx={{ borderRadius: '40px' }}
                    />
                </Box>
                <QuizPopper openSettings={openSettings} anchorEl={anchorEl} popperRef={popperRef} />
            </Box>
        </QuizLayout>
    )
}