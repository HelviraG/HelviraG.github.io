import { NeuBrutButtonBox } from "@styles/Pages/FalloutOnPassionStyle";
import useSound from "use-sound";
import { useTranslation } from "react-i18next";
import { Card, CardMedia, useMediaQuery } from "@mui/material";
import { CardContentStyle, DialogBox, DialogPaper, DialogStyle } from "./Styles/QuizStepper";
import { useRef, useState } from 'react';
import useClickOutside from "../../../../Hooks/useClickOutside";
import { QuizPopper } from './QuizPopper';
import {QuizSettings} from '../Components/QuizSettings';
import {
    BackgroundStartInnerBox,
    BackgroundStartSecondInnerBox,
    BackgroundStartThirdInnerBox,
    BackgroundStartTypo,
    ForegroundStartBox,
    ForegroundStartInnerBox,
    ForegroundStartTypo,
    StartButton
} from "@styles/Pages/FalloutOnPassionStyle/ButtonsStyle";
import { Routes } from "@resources/Enums/Routes";
import { useNavigate } from "react-router-dom";
import { Sounds } from "@resources/Enums/Sounds";
import { showField, showLastAnswer } from "@slices/QuizSlice";
import { useSelector } from "react-redux";

export const QuizStart = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [play] = useSound(Sounds.START_QUIZ);
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
        play();
        setTimeout(() => navigate(Routes.QUIZ_INIT), 1500);
    };

    const handleClickResume = () => {
        play();
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
        <DialogStyle
            sx={(theme) => ({
                '& .MuiDialogContent-root': {
                    alignContent: 'center',
                    backgroundColor: theme.game.purple.dark,
                    height: '-webkit-fill-available',

                    [theme.breakpoints.down('md')]: {
                        width: '100%'
                    }
                },

                '& .MuiPaper-root': {
                    backgroundColor: theme.game.purple.dark,

                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                        margin: 0
                    },

                    [theme.breakpoints.up(2300)]: {
                        maxWidth: '1702px',
                        margin: 0
                    }
                }
            })}
        >
            <DialogBox>     
                <Card>
                    <CardContentStyle>
                        <QuizSettings isMobile={isWavyMobile} handlePopper={handlePopper} isSettingsOpen={openSettings} />
                        <CardMedia
                            component="img"
                            image={field ? resumeImage : startImage}
                        />
                    </CardContentStyle>
                </Card>
                {!field && (
                    <NeuBrutButtonBox>
                        <StartButton onClick={handleClickStart}>
                            <BackgroundStartInnerBox component={"span"}>
                                <BackgroundStartSecondInnerBox component={"span"}>
                                    <BackgroundStartThirdInnerBox component={"span"}>
                                        <BackgroundStartTypo>{t('app.general.actions.start')}</BackgroundStartTypo>
                                    </BackgroundStartThirdInnerBox>
                                </BackgroundStartSecondInnerBox>
                            </BackgroundStartInnerBox>
                            <ForegroundStartBox>
                                <ForegroundStartInnerBox>
                                    <ForegroundStartTypo>{t('app.general.actions.start')}</ForegroundStartTypo>
                                </ForegroundStartInnerBox>
                            </ForegroundStartBox>
                        </StartButton>
                    </NeuBrutButtonBox>
                )}
                {field && (
                    <>
                        <NeuBrutButtonBox>
                            <StartButton onClick={handleClickResume}>
                                <BackgroundStartInnerBox component={"span"}>
                                    <BackgroundStartSecondInnerBox component={"span"}>
                                        <BackgroundStartThirdInnerBox component={"span"}>
                                            <BackgroundStartTypo>{t('app.general.actions.start_again')}</BackgroundStartTypo>
                                        </BackgroundStartThirdInnerBox>
                                    </BackgroundStartSecondInnerBox>
                                </BackgroundStartInnerBox>
                                <ForegroundStartBox>
                                    <ForegroundStartInnerBox>
                                        <ForegroundStartTypo>{t('app.general.actions.start_again')}</ForegroundStartTypo>
                                    </ForegroundStartInnerBox>
                                </ForegroundStartBox>
                            </StartButton>
                        </NeuBrutButtonBox>
                        <NeuBrutButtonBox isTopRight>
                            <StartButton onClick={handleClickResume}>
                                <BackgroundStartInnerBox component={"span"}>
                                    <BackgroundStartSecondInnerBox component={"span"}>
                                        <BackgroundStartThirdInnerBox component={"span"}>
                                            <BackgroundStartTypo>{t('app.general.actions.resume')}</BackgroundStartTypo>
                                        </BackgroundStartThirdInnerBox>
                                    </BackgroundStartSecondInnerBox>
                                </BackgroundStartInnerBox>
                                <ForegroundStartBox>
                                    <ForegroundStartInnerBox>
                                        <ForegroundStartTypo>{t('app.general.actions.resume')}</ForegroundStartTypo>
                                    </ForegroundStartInnerBox>
                                </ForegroundStartBox>
                            </StartButton>
                        </NeuBrutButtonBox>
                    </>
                )}
                <QuizPopper openSettings={openSettings} anchorEl={anchorEl} popperRef={popperRef} />
            </DialogBox>
        </DialogStyle>
    )
}