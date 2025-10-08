import useClickOutside from "@hooks/useClickOutside";
import { Box, CardMedia, LinearProgress, linearProgressClasses, styled, useMediaQuery } from "@mui/material";
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
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate, useParams } from "react-router-dom";
import useSound from "use-sound";
import { QuizPersonal } from "../QuizResult/QuizPersonal";
import {
  CardContentBody,
  QuizContentBox,
  QuizContentTitle,
  QuizContentTitleBox,
} from "../Styles/QuizStepper";
import { Navigation } from "./Navigation";
import { FirstStep } from "./Steps/FirstStep";
import { Step } from "./Steps/Step";
import useChangeLangage from "@/Hooks/useChangeLangage";
import { QuizSettings } from "../../Components/QuizSettings";
import { Routes } from "@/App/Resources/Enums/Routes";
import { QuizLayout } from "../../Layouts/QuizLayout";
import { QuizContainedButton, QuizOutlinedButton } from "@/App/Styles/Pages/FalloutOnPassionStyle/QuizLayoutStyle";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 2,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.background.paper,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.background.paper,
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#B8E986',
    ...theme.applyStyles('dark', {
      backgroundColor: '#B8E986',
    }),
  },
}));

function formatQuestion(text: string, replacements: Record<string, string>) {
  return text.replace(/{{\s*(\w+)\s*}}/g, (_, key) => replacements[key] || "");
}

function stripQuotes(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

export const Steps = () => {
  const navigate = useNavigate();
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

  const answers = useSelector(listAllAnswers);
  const currentAnswers = Array.isArray(answers)
    ? answers.filter(
        (a: { questionId: string }) => a.questionId === activeStep.toString()
      )
    : [];

  const hasAnswer = currentAnswers.length > 0;

  const storedAnswer = currentAnswers.length > 0
    ? parseInt(currentAnswers[0].answer, 10)
    : 0;

  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const lastSavedStep = useSelector(showLastAnswer);

  const [dataFile, setDataFile] = useState<{
    subject: string;
    survey: { q: string[]; p: string[]; i: string; i_sm: string }[];
  }>();

  const isMobile = useMediaQuery("(max-width: 600px");

  const isWavyMobile = useMediaQuery("(max-width: 767px");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const disabledButton = !selectedAnswer && activeStep !== 0 && !hasAnswer;

  const maxSteps = dataFile?.survey.length;
  const { appLang: lang } = useChangeLangage();

  useClickOutside(popperRef, () => {
    setOpenSettings(false);
  });

  const handleNext = () => {
    play();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    navigate(`/explore/passion/whoami/${stripQuotes(cat)}/${activeStep + 1}`);
  };

  const handleBack = () => {
    play();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    navigate(`/explore/passion/whoami/${stripQuotes(cat)}/${activeStep - 1}`);
  };

  const handlePopper = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenSettings(true);
  };

  useEffect(() => {
    if (cat && !hasAnswer && !answers) {
      navigate(`/explore/passion/whoami/${stripQuotes(cat)}/0`);
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
    <QuizLayout 
      buttons={
        <>
          {activeStep !== 18 && maxSteps && (
            <Navigation
              activeStep={activeStep}
              maxSteps={maxSteps}
              handleBack={handleBack}
              handleNext={handleNext}
              isDisabled={disabledButton}
              stepLabel={`${activeStep + 1} / ${maxSteps }`}
            />
          )}
          {activeStep === 18 && (
            <Box sx={(theme) => ({ 
              display: 'flex', 
              flex: 1, 
              justifyContent: 'space-between',
              textTransform: 'lowercase',

              [theme.breakpoints.down(500)]: {
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                width: '-webkit-fill-available',
              }
            })}>
              <QuizOutlinedButton 
                hasFullWidth
                variant="outlined" 
                onClick={() => navigate(Routes.QUIZ_INIT)}
              >
                {t('app.general.actions.redo')}
              </QuizOutlinedButton>
              <QuizContainedButton 
                hasFullWidth
                variant="contained" 
                onClick={() => navigate(Routes.QUIZ_RESULT)}
              >
                {t('app.general.actions.results')}
              </QuizContainedButton>
            </Box>
          )}
        </>
      }
    >
      {activeStep !== 18 && maxSteps && (
        <BorderLinearProgress variant="determinate" value={activeStep + 1 / maxSteps} />
      )}

      {activeStep === 18 && <QuizPersonal cat={cat} />}

      {activeStep !== 18 && 
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
              flexDirection: 'column-reverse',
              justifyContent: 'space-between',
            }
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
              width: '60%',
              flex: 1,

              [theme.breakpoints.down(800)]: {
                width: '-webkit-fill-available'
              }
            })}
          >
            <CardContentBody isQuizResult={activeStep === 18}>
              <QuizContentBox isQuizResult={activeStep === 18}>
                <QuizContentTitleBox>
                  {dataFile.survey[activeStep].q.map((q: string, index) => {
                    const formattedQ = formatQuestion(q, { 
                      cat_job: t(`app.explore.fallout_on_passion.quiz.activity.cat.${stripQuotes(cat)}.cat_job`),
                      cat_verb: t(`app.explore.fallout_on_passion.quiz.activity.cat.${stripQuotes(cat)}.cat_verb`),
                      cat_hobby: t(`app.explore.fallout_on_passion.quiz.activity.cat.${stripQuotes(cat)}.cat_hobby`),
                      cat_action: t(`app.explore.fallout_on_passion.quiz.activity.cat.${stripQuotes(cat)}.cat_action`),
                    });

                    return (
                      <QuizContentTitle variant="h6" key={index}>
                        {formattedQ}
                      </QuizContentTitle>
                    )
                  })}
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
              </QuizContentBox>
            </CardContentBody>
          </Box>
          <Box 
            sx={(theme) => ({ 
              padding: '2em', 
              width: '50%',

              [theme.breakpoints.down(800)]: {
                padding: '1em 1em 0 1em',
                width: '-webkit-fill-available'
              },

              [theme.breakpoints.down(601)]: {
                width: '70%'
              },

              [theme.breakpoints.down(480)]: {
                width: '-webkit-fill-available'
              },
            })}
          >
            <CardMedia
              component="img"
              image={
                isMobile
                  ? dataFile.survey[activeStep].i_sm
                  : dataFile.survey[activeStep].i
              }
              sx={{ borderRadius: '40px' }}
            />
          </Box>
          <QuizSettings isMobile={isWavyMobile} handlePopper={handlePopper} isSettingsOpen={openSettings} />
          <QuizPopper
            openSettings={openSettings}
            anchorEl={anchorEl}
            popperRef={popperRef}
          />
        </Box>
      }
    </QuizLayout>
  );
};


