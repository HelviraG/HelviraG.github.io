import { Sound } from "@component/Sound/Sound";
import MouseContextProvider from "@context/MouseContextProvider";
import { Cursor } from "@cursor";
import useClickOutside from "@hooks/useClickOutside";
import useSessionStorage from "@hooks/useSessionStorage";
import i18n from "@i18n";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, Card, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { QuizPopper } from "@pages/FalloutOnPassion/QuizPage/QuizPopper";
import { Sounds } from "@resources/Enums/Sounds";
import { FalloutPassionEN } from "@resources/Pages/General/FalloutPassionEN";
import { FalloutPassionFR } from "@resources/Pages/General/FalloutPassionFR";
import {
  getPassionField,
  getUserNameField,
  listAllAnswers,
  showField,
  showLastAnswer,
} from "@slices/QuizSlice";
import {
  FabButton,
  FabButtonBox,
  FabButtonComponent,
} from "@styles/Pages/FalloutOnPassionStyle";
import {
  SettingsButtonBox,
  WavyButton,
  WavySettingsButtonBox,
  WavySettingsSpan,
  WavySettingsSpanBox,
} from "@styles/Pages/FalloutOnPassionStyle/ComponentsStyle";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate, useParams } from "react-router-dom";
import useSound from "use-sound";
import { QuizPersonal } from "../QuizResult/QuizPersonal";
import {
  CardContentBody,
  CardContentStyle,
  DialogBox,
  DialogPaper,
  DialogStyle,
  QuizContentBox,
  QuizContentTitle,
  QuizContentTitleBox,
} from "../Styles/QuizStepper";
import { Navigation } from "./Navigation";
import { FirstStep } from "./Steps/FirstStep";
import { Step } from "./Steps/Step";
import { Stepper } from "./Steps/Stepper";

export const Steps = () => {
  const navigate = useNavigate();
  const [value] = useSessionStorage("PAUSE_SOUND", false);
  const location = useLocation();
  const dispatch = useDispatch();

  const catByPathname = location.pathname.split("/")[4];
  const cat = useSelector(showField) || catByPathname;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popperRef = useRef(null);
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const params = useParams();
  const { t } = useTranslation();
  const currentStep = params.id;
  const [activeStep, setActiveStep] = useState(
    currentStep ? parseInt(currentStep, 10) : 0,
  );
  const [play] = useSound(Sounds.CLICK_SETTINGS);
  const [pauseMusic, setPauseMusic] = useState<boolean>(value);

  const answers = useSelector(listAllAnswers);
  const hasAnswer = answers
    ? answers.filter(
        (a: { questionId: string }) => a.questionId === activeStep.toString(),
      ).length > 0
    : false;
  const storedAnswer = answers
    ? parseInt(
        answers.filter(
          (a: { questionId: string }) => a.questionId === activeStep.toString(),
        )[0]?.answer,
        10,
      )
    : 0;
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const lastSavedStep = useSelector(showLastAnswer);

  const lang = i18n.language;
  const [dataFile, setDataFile] = useState<{
    subject: string;
    survey: { q: string[]; p: string[]; i: string; i_sm: string }[];
  }>();

  const isMobile = useMediaQuery("(max-width: 600px");
  const isWavyMobile = useMediaQuery("(max-width: 767px");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const disabledButton = !selectedAnswer && activeStep !== 0 && !hasAnswer;

  const maxSteps = dataFile?.survey.length;

  useClickOutside(popperRef, () => {
    setOpenSettings(false);
  });

  const handleNext = () => {
    play();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    navigate(`/explore/passion/whoami/${cat}/${activeStep + 1}`);
  };

  const handleBack = () => {
    play();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    navigate(`/explore/passion/whoami/${cat}/${activeStep - 1}`);
  };

  const handlePopper = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenSettings(true);
  };

  useEffect(() => {
    setPauseMusic(value);
  }, [value]);

  useEffect(() => {
    if (cat && !hasAnswer && !answers) {
      navigate(`/explore/passion/whoami/${cat}/0`);
    }
  }, [currentStep]);

  useEffect(() => {
    dispatch(getPassionField());
    dispatch(getUserNameField());
  }, []);

  useEffect(() => {
    if (lang === "en") {
      return setDataFile(FalloutPassionEN);
    }
    return setDataFile(FalloutPassionFR);
  });

  if (!dataFile && !maxSteps) return null;

  return (
    <MouseContextProvider>
      <Cursor />
      <DialogStyle
        sx={(theme) => ({
          "& .MuiDialogContent-root": {
            alignContent: "center",
            backgroundColor: theme.game.purple.dark,
            height: "-webkit-fill-available",

            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          },

          "& .MuiPaper-root": {
            backgroundColor: theme.game.purple.dark,
            maxWidth: "728px",

            [theme.breakpoints.down("md")]: {
              maxWidth: "100%",
              margin: 0,
              flex: 1,
            },

            [theme.breakpoints.between("md", 1999)]: {
              maxWidth: "76vw",
              margin: "0 auto",
            },

            [theme.breakpoints.up(2000)]: {
              maxWidth: "1100px",
              margin: 0,
            },
          },
        })}
      >
        <DialogBox>
          <SettingsButtonBox>
            <WavySettingsButtonBox isPillButton={true}>
              <WavySettingsSpanBox
                isPillButton={true}
                isSettingsOpen={openSettings}
              >
                <WavySettingsSpan>
                  <SettingsSuggestIcon
                    fontSize="small"
                    sx={(theme) => ({
                      marginRight: "8px",

                      [theme.breakpoints.down("md")]: {
                        margin: "0 auto",
                      },
                    })}
                  />
                  <Typography
                    sx={(theme) => ({
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 900,

                      [theme.breakpoints.down(768)]: {
                        display: "none",
                      },
                    })}
                  >
                    {t("app.general.actions.params")}
                  </Typography>
                </WavySettingsSpan>
              </WavySettingsSpanBox>
              <WavyButton
                variant="contained"
                onClick={handlePopper}
                startIcon={<SettingsSuggestIcon />}
                isDrawy
                isSettingsOpen={openSettings}
              >
                {isWavyMobile ? "" : t("app.general.actions.params")}
              </WavyButton>
            </WavySettingsButtonBox>
          </SettingsButtonBox>
          <Card sx={{ width: "100%" }}>
            <CardContentStyle sx={{ margin: "0 auto" }}>
              <Box
                sx={{ borderRadius: "23px", width: "-webkit-fill-available" }}
              >
                <CardMedia
                  component="img"
                  image={
                    isMobile
                      ? dataFile.survey[activeStep].i_sm
                      : dataFile.survey[activeStep].i
                  }
                  sx={{ width: "100%" }}
                />
              </Box>
              <CardContentBody isQuizResult={activeStep === 18}>
                {activeStep !== 18 && maxSteps && (
                  <Stepper activeStep={activeStep} maxSteps={maxSteps} />
                )}
                <QuizContentBox isQuizResult={activeStep === 18}>
                  <QuizContentTitleBox>
                    {dataFile.survey[activeStep].q.map((q: string, index) => (
                      <QuizContentTitle variant="subtitle1" key={index}>
                        {q}
                      </QuizContentTitle>
                    ))}
                  </QuizContentTitleBox>
                  {activeStep === 0 && (
                    <FirstStep p={dataFile.survey[activeStep].p} />
                  )}
                  {activeStep !== 0 && activeStep !== 18 && (
                    <Step
                      p={dataFile.survey[activeStep].p}
                      setSelectedAnswer={setSelectedAnswer}
                      activeStep={activeStep}
                      hasAnswer={hasAnswer}
                      storedAnswer={storedAnswer}
                    />
                  )}
                  {activeStep === 18 && <QuizPersonal cat={cat} />}
                  {maxSteps && (
                    <Navigation
                      activeStep={activeStep}
                      maxSteps={maxSteps}
                      handleBack={handleBack}
                      handleNext={handleNext}
                      isDisabled={disabledButton}
                    />
                  )}
                </QuizContentBox>
              </CardContentBody>
              <QuizPopper
                openSettings={openSettings}
                anchorEl={anchorEl}
                popperRef={popperRef}
              />
            </CardContentStyle>
          </Card>
        </DialogBox>
      </DialogStyle>
      <FabButtonBox>
        <Sound sound={Sounds.QUIZ_BACKGROUND} pause={pauseMusic} />
        <FabButtonComponent
          aria-label={"play or stop sound"}
          onClick={() => setPauseMusic(!pauseMusic)}
        >
          <FabButton>
            {pauseMusic && <MusicOffIcon />}
            {!pauseMusic && <MusicNoteIcon />}
          </FabButton>
        </FabButtonComponent>
      </FabButtonBox>
    </MouseContextProvider>
  );
};
