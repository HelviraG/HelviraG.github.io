import { Trans, useTranslation } from "react-i18next"
import { QuizContent } from "../../BatteryLevel/Layout/QuizContent"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, LinearProgress, linearProgressClasses, styled, Typography } from "@mui/material";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RemoveIcon from '@mui/icons-material/Remove';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { listTechSkillsAnswers, storeAnswers } from "@/Redux/Slices/TechSkillsQuizSlice";
import { useDispatch, useSelector } from "react-redux";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#4834d4',
  },
}));

export const getFreshnessLevel = (percentage: number) => {
    const { t } = useTranslation();
    if (percentage >= 87.5) return { label: t('app.explore.skills.quiz.freshnessLevel.ultraFresh'), icon: WhatshotIcon, color: "#10b981" };
    if (percentage >= 70) return { label: t('app.explore.skills.quiz.freshnessLevel.fresh'), icon: TrendingUpIcon, color: "#14b8a6" };
    if (percentage >= 50) return { label: t('app.explore.skills.quiz.freshnessLevel.stable'), icon: RemoveIcon, color: "#f59e0b" };
    if (percentage >= 30) return { label: t('app.explore.skills.quiz.freshnessLevel.aging'), icon: TrendingDownIcon, color: "#f97316" };
    return { label: t('app.explore.skills.quiz.freshnessLevel.expired'), icon: TrendingDownIcon, color: "#ef4444" };
}

export const QuizSteps = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const currentStep = params.id;
    const [activeStep, setActiveStep] = useState(
        currentStep ? parseInt(currentStep, 10) : 1,
    );

    const answers = useSelector(listTechSkillsAnswers);
     const currentAnswers = Array.isArray(answers)
        ? answers.filter(
            (a: { questionId: string }) => a.questionId === activeStep.toString()
        )
        : [];
    const hasAnswer = currentAnswers.length > 0;

    const getCurrentFreshnessLevel = (percentage: number) => {
        const { t } = useTranslation();
        if (percentage >= 87.5) return { label: t('app.explore.skills.quiz.freshnessLevel.ultraFresh'), icon: WhatshotIcon, color: "#10b981" };
        if (percentage >= 70) return { label: t('app.explore.skills.quiz.freshnessLevel.fresh'), icon: TrendingUpIcon, color: "#14b8a6" };
        if (percentage >= 50) return { label: t('app.explore.skills.quiz.freshnessLevel.stable'), icon: RemoveIcon, color: "#f59e0b" };
        if (percentage >= 30) return { label: t('app.explore.skills.quiz.freshnessLevel.aging'), icon: TrendingDownIcon, color: "#f97316" };
        return { label: t('app.explore.skills.quiz.freshnessLevel.expired'), icon: TrendingDownIcon, color: "#ef4444" };
    }

    const currentScore = Object.values(answers).reduce((sum, answer) => sum + answer.answer, 0);
    const maxPossibleScore = 75;
    const percentage = (currentScore / maxPossibleScore) * 100;
    const freshnessLevel = getCurrentFreshnessLevel(percentage);

    const quizQuestions = [
        {
            question:t('app.explore.skills.quiz.questions.1.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.1.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.1.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.1.options.3'), points: 2 },
                { id: 4, text: t('app.explore.skills.quiz.questions.1.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.2.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.2.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.2.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.2.options.3'), points: 2 },
                { id: 4, text: t('app.explore.skills.quiz.questions.2.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.3.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.3.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.3.options.2'), points: 4 },
                { id: 3, text: t('app.explore.skills.quiz.questions.3.options.3'), points: 3 },
                { id: 4, text: t('app.explore.skills.quiz.questions.3.options.4'), points: 1 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.4.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.4.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.4.options.2'), points: 4 },
                { id: 3, text: t('app.explore.skills.quiz.questions.4.options.3'), points: 2 },
                { id: 4, text: t('app.explore.skills.quiz.questions.4.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.5.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.5.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.5.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.5.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.5.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.6.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.6.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.6.options.2'), points: 4 },
                { id: 3, text: t('app.explore.skills.quiz.questions.6.options.3'), points: 2 },
                { id: 4, text: t('app.explore.skills.quiz.questions.6.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.7.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.7.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.7.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.7.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.7.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.8.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.8.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.8.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.8.options.3'), points: 2 },
                { id: 4, text: t('app.explore.skills.quiz.questions.8.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.9.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.9.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.9.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.9.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.9.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.10.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.10.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.10.options.2'), points: 4 },
                { id: 3, text: t('app.explore.skills.quiz.questions.10.options.3'), points: 2 },
                { id: 4, text: t('app.explore.skills.quiz.questions.10.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.11.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.11.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.11.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.11.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.11.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.12.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.12.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.12.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.12.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.12.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.13.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.13.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.13.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.13.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.13.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.14.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.14.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.14.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.14.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.14.options.4'), points: 0 }
            ]
        },
        {
            question: t('app.explore.skills.quiz.questions.15.q'),
            options: [
                { id: 1, text: t('app.explore.skills.quiz.questions.15.options.1'), points: 5 },
                { id: 2, text: t('app.explore.skills.quiz.questions.15.options.2'), points: 3 },
                { id: 3, text: t('app.explore.skills.quiz.questions.15.options.3'), points: 1 },
                { id: 4, text: t('app.explore.skills.quiz.questions.15.options.4'), points: 0 }
            ]
        }
    ];

    const handleOptionSelected = (option: number, id: number) => {
        dispatch(
            storeAnswers({
                questionId: activeStep.toString(),
                optionId: id,
                answer: option,
            })
        );
        const nextStep = activeStep + 1;
        
        if (nextStep >= quizQuestions.length + 1) {
            navigate('/explore/skills/result');
        } else {
            navigate(`/explore/skills/${nextStep}`);
        }
    }

    const handlePrev = () => {
        if (activeStep > 0) {
            navigate(`/explore/skills/${activeStep - 1}`);
        }
    }

    const FreshnessIcon = freshnessLevel.icon;

    useEffect(() => {
        if (!hasAnswer && !answers.length) {
            navigate(`/explore/skills/1`);
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

    const currentAnswer = answers && answers.filter((answer) => parseInt(answer.questionId, 10) === activeStep);

    return (
        <QuizContent 
            title={`​🥛 ${t('app.explore.skills.title')}`} 
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
                            <Trans i18nKey="app.explore.battery.quiz.footer.caption" values={{ activeStep: activeStep, totalQuestions: quizQuestions.length }} />
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
                         <Box><Typography variant="h5">{quizQuestions[activeStep - 1].question}</Typography></Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {quizQuestions[activeStep - 1].options && quizQuestions[activeStep - 1].options.map((option) => (
                                <Button 
                                    key={option.id} 
                                    sx={{ 
                                        border: '2px solid #1e90ff', 
                                        borderRadius: '9999px', 
                                        marginBottom: '12px', 
                                        padding: '10px 16px', 
                                        justifyContent: 'start', 
                                        textTransform: 'none',

                                        '& .MuiTypography-root': {
                                            color: '#4834d4'
                                        },

                                        '&:hover': { 
                                            backgroundColor: '#4834d4', 

                                            '& .MuiTypography-root': {
                                                color: '#FFF' 
                                            } 
                                        },

                                        ...(currentAnswer && currentAnswer[0]?.answer && option.id === currentAnswer[0].optionId && {
                                            backgroundColor: '#4834d4', 

                                            '& .MuiTypography-root': {
                                                color: '#FFF' 
                                            } 
                                        })
                                    }}
                                    onClick={() => handleOptionSelected(option.points, option.id)}
                                >
                                    <Typography variant="body1">{option.text}</Typography>
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </>
            } 
            rightSide={
                <>
                    <Box sx={{ padding: '0 2px', position: 'absolute', top: 0, width: '100%' }}>
                        <BorderLinearProgress variant="determinate" value={(answers.length / quizQuestions.length) * 100} />
                        <Box sx={{ padding: '0 10px', textAlign: 'right' }}>
                            <Typography variant="caption">
                                <Trans i18nKey="app.explore.battery.quiz.currentLevel.complete" values={{ progress: Math.round((answers.length / quizQuestions.length) * 100) }} />
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        sx={(theme) => ({ 
                            alignItems: 'center', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '20px',

                            [theme.breakpoints.down(680)]: {
                                padding: '2rem'
                            }
                        })}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6">{t('app.explore.skills.quiz.currentFreshness')}</Typography>
                        </Box>
                        <Box
                            sx={{
                                position: 'relative',
                                height: '12rem',
                                width: '12rem',

                                '& svg': {
                                    transform: 'rotate(-90deg)',
                                    height: '12rem',
                                    width: '12rem',
                                }
                            }}
                        >
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="#e5e7eb"
                                    strokeWidth="12"
                                    fill="none"
                                />
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke={freshnessLevel.color}
                                    strokeWidth="12"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 88}`}
                                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                                    strokeLinecap="round"
                                    style={{
                                        transition: 'stroke-dashoffset 0.5s ease-in-out, stroke 0.3s ease-in-out'
                                    }}
                                />
                            </svg>
                            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', textAlign: 'center', top: '28%', width: '-webkit-fill-available' }}>
                                <Typography variant="h3" sx={{ color: freshnessLevel.color }}>{Math.round(percentage)}%</Typography>
                                <Typography>{currentScore}/75</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box 
                                sx={{ 
                                    backgroundColor: freshnessLevel.color,
                                    borderRadius: '9999px',
                                    color: '#FFF',
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '8px',
                                    padding: '.75rem 1.5rem'
                                }}
                            >
                                <FreshnessIcon sx={{ fontSize: 24 }} />
                                {freshnessLevel.label}
                            </Box>
                        </Box>
                        <Box>
                            {activeStep === 1 && <Typography variant="body2" sx={{ textAlign: 'center' }}>{t('app.explore.skills.quiz.startCaption')}</Typography>}
                            {activeStep > 1 && (
                                <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                                    <Trans i18nKey="app.explore.battery.quiz.currentLevel.caption" values={{ activeStep: activeStep - 1, totalQuestions: quizQuestions.length }} />
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </>
            } 
            isTechSkillsQuiz 
        />
    )
}