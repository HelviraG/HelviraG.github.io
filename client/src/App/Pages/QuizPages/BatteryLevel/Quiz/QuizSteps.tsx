import { Box, Button, LinearProgress, linearProgressClasses, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { listBurnoutAnswers, storeAnswers } from "@/Redux/Slices/BurnoutQuizSlice";
import { QuizContent } from "../Layout/QuizContent";
import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#14b8a6',
  },
}));

export const getBatteryColor = (level: number) => {
    if (level >= 80) return "#14b8a6";
    if (level >= 60) return "#3b82f6";
    if (level >= 40) return "#eab308";
    if (level >= 20) return "#f97316";
    return "#ef4444";
};

export const QuizSteps = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const currentStep = params.id;
    const [activeStep, setActiveStep] = useState(
        currentStep ? parseInt(currentStep, 10) : 1,
    );

    const answers = useSelector(listBurnoutAnswers);
    const currentAnswers = Array.isArray(answers)
        ? answers.filter(
            (a: { questionId: string }) => a.questionId === activeStep.toString()
        )
        : [];
    const hasAnswer = currentAnswers.length > 0;

    // 22 questions based on MBI structure: 9 Emotional Exhaustion, 5 Depersonalization, 8 Personal Accomplishment
    const questions = [
        // Emotional Exhaustion (9 items)
        { text: t('app.explore.battery.quiz.questions.1'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.2'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.3'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.4'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.5'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.6'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.7'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.8'), domain: "exhaustion" },
        { text: t('app.explore.battery.quiz.questions.9'), domain: "exhaustion" },
        
        // Depersonalization (5 items)
        { text: t('app.explore.battery.quiz.questions.10'), domain: "cynicism" },
        { text: t('app.explore.battery.quiz.questions.11'), domain: "cynicism" },
        { text: t('app.explore.battery.quiz.questions.12'), domain: "cynicism" },
        { text: t('app.explore.battery.quiz.questions.13'), domain: "cynicism" },
        { text: t('app.explore.battery.quiz.questions.14'), domain: "cynicism" },
        
        // Personal Accomplishment (8 items) - reverse scored
        { text: t('app.explore.battery.quiz.questions.15'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.16'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.17'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.18'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.19'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.20'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.21'), domain: "efficacy", reverse: true },
        { text: t('app.explore.battery.quiz.questions.22'), domain: "efficacy", reverse: true }
    ];

    const options = [
        { label: t('app.explore.battery.quiz.options.0'), value: 0 },
        { label: t('app.explore.battery.quiz.options.1'), value: 1 },
        { label: t('app.explore.battery.quiz.options.2'), value: 2 },
        { label: t('app.explore.battery.quiz.options.3'), value: 3 },
        { label: t('app.explore.battery.quiz.options.4'), value: 4 },
        { label: t('app.explore.battery.quiz.options.5'), value: 5 },
        { label: t('app.explore.battery.quiz.options.6'), value: 6 }
    ];

    const getCurrentBatteryLevel = () => {
        if (answers.length === 0) return 100;
        
        let exhaustionScore = 0;
        let cynicismScore = 0;
        let efficacyScore = 0;
        let exhaustionCount = 0;
        let cynicismCount = 0;
        let efficacyCount = 0;
        
        answers.forEach((burnoutAnswer, idx) => {
            const question = questions[idx];
            if (question.domain === "exhaustion") {
                exhaustionScore += burnoutAnswer.answer;
                exhaustionCount++;
            } else if (question.domain === "cynicism") {
                cynicismScore += burnoutAnswer.answer;
                cynicismCount++;
            } else if (question.domain === "efficacy") {
                efficacyScore += (6 - burnoutAnswer.answer);
                efficacyCount++;
            }
        });

        // Example calculation: average scores normalized to 100
        const totalQuestions = exhaustionCount + cynicismCount + efficacyCount;
        if (totalQuestions === 0) return 100;
        const totalScore = exhaustionScore + cynicismScore + efficacyScore;
        const maxScore = (exhaustionCount + cynicismCount) * 6 + efficacyCount * 6;
        return Math.round(100 * (maxScore - totalScore) / maxScore);
    }

    const handleOptionSelected = (option: number) => {
        dispatch(
            storeAnswers({
                questionId: activeStep.toString(),
                answer: option,
            })
        );
        setActiveStep(activeStep + 1);

        const nextStep = activeStep + 1;
        
        if (nextStep >= questions.length + 1) {
            navigate('/explore/burnout/result');
        } else {
            navigate(`/explore/burnout/${nextStep}`);
        }
    }

    const handlePrev = () => {
        if (activeStep > 0) {
            navigate(`/explore/burnout/${activeStep - 1}`);
        }
    }

    const currentBatteryLevel = getCurrentBatteryLevel();
    const batteryColor = getBatteryColor(currentBatteryLevel);
    const currentAnswer = answers && answers.filter((answer) => parseInt(answer.questionId) === activeStep);

    useEffect(() => {
        if (!hasAnswer && !answers.length) {
            navigate(`/explore/burnout/1`);
        }
    }, []);

    useEffect(() => {
        if (currentStep !== undefined) {
            const stepFromUrl = parseInt(currentStep, 10);
            if (stepFromUrl !== activeStep) {
                setActiveStep(stepFromUrl);
            }
        }
    }, [currentStep]);

    return (
        <QuizContent 
            isBurnoutQuiz
            title={`🔋​ ${t('app.explore.battery.title')}`}
            footer={
                <Box sx={{ alignItems: 'center', display: 'flex', flex: 1, justifyContent: 'space-between' }}>
                    <Button 
                        color="info" 
                        variant="outlined" 
                        disabled={activeStep === 1} 
                        sx={{ borderRadius: '99999px' }}
                        onClick={() => handlePrev()}
                    >
                        {t('app.explore.battery.quiz.buttons.prev')}
                    </Button>
                    <Box>
                        <Typography variant="caption">
                            <Trans i18nKey="app.explore.battery.quiz.footer.caption" values={{ activeStep: activeStep, totalQuestions: questions.length }} />
                        </Typography>
                    </Box>
                </Box>
            } 
            leftSide={
                <>
                    <Box>
                        <Box>
                            <Typography variant="h6">
                                <Trans i18nKey="app.explore.battery.quiz.question" values={{ questionNumber: activeStep }} />
                            </Typography>
                        </Box>
                            <Box><Typography variant="h5">{questions[activeStep - 1].text}</Typography></Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {options && options.map((option) => (
                                <Button 
                                    key={option.value} 
                                    sx={{ 
                                        border: '2px solid #99f6e4', 
                                        borderRadius: '9999px', 
                                        marginBottom: '12px', 
                                        padding: '10px 16px', 
                                        justifyContent: 'start', 
                                        textTransform: 'none',

                                        '& .MuiTypography-root': {
                                            color: '#14b8a6'
                                        },

                                        '&:hover': { 
                                            backgroundColor: '#14b8a6', 

                                            '& .MuiTypography-root': {
                                                color: '#FFF' 
                                            } 
                                        }, 

                                        ...(currentAnswer && currentAnswer[0]?.answer === option.value && {
                                            backgroundColor: '#14b8a6', 

                                            '& .MuiTypography-root': {
                                                color: '#FFF' 
                                            } 
                                        })
                                    }}
                                    onClick={() => handleOptionSelected(option.value)}
                                >
                                    <Typography variant="body1">{option.label}</Typography>
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center', marginTop: '.5rem', color: '#6b7280', fontStyle: 'italic' }}>
                        <Typography variant="body2">{t('app.explore.battery.caption')}</Typography>
                    </Box>
                </>
            } 
            rightSide={
                <>
                    <Box sx={{ padding: '0 2px', position: 'absolute', top: 0, width: '100%' }}>
                        <BorderLinearProgress variant="determinate" value={(answers.length / questions.length) * 100} />
                        <Box sx={{ padding: '0 10px', textAlign: 'right' }}>
                            <Typography variant="caption">
                                <Trans i18nKey="app.explore.battery.quiz.currentLevel.complete" values={{ progress: Math.round((answers.length / questions.length) * 100) }} />
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <svg width="250" height="250" viewBox="0 0 250 250">
                            <rect x="40" y="70" width="150" height="110" rx="12" fill="white" stroke="#94a3b8" strokeWidth="3"></rect>
                            <rect x="190" y="95" width="15" height="60" rx="4" fill="#94a3b8"></rect>
                            <rect x="50" y="80" width="130" height="90" rx="8" fill={batteryColor} opacity="0.9"></rect>
                            <text x="115" y="135" fontFamily="Arial" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">{currentBatteryLevel}%</text>
                        </svg>
                    </Box>
                    <Box 
                        sx={(theme) => ({ 
                            textAlign: 'center',
                            
                            [theme.breakpoints.down(680)]: {
                                marginTop: '-3rem',
                                paddingBottom: '2rem'
                            }
                        })}
                    >
                        <Typography>{t('app.explore.battery.quiz.currentLevel.title')}</Typography>
                        <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                            <Trans i18nKey="app.explore.battery.quiz.currentLevel.caption" values={{ activeStep: activeStep, totalQuestions: questions.length }} />
                        </Typography>
                        <BuyCoffeeLink noAbsolute />
                    </Box>
                </>
            }
        />
    )
}