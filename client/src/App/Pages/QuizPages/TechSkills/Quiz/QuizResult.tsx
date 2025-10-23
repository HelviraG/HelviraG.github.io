import { Trans, useTranslation } from "react-i18next"
import { QuizContent } from "../../BatteryLevel/Layout/QuizContent"
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { listTechSkillsAnswers, resetAnswers } from "@/Redux/Slices/TechSkillsQuizSlice";
import { getFreshnessLevel } from "./QuizSteps";
import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";
import { useNavigate } from "react-router-dom";

export const QuizResult = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const answers = useSelector(listTechSkillsAnswers);

    const currentScore = Object.values(answers).reduce((sum, answer) => sum + answer.answer, 0);
    const maxPossibleScore = 75;
    const percentage = (currentScore / maxPossibleScore) * 100;

    const dairyResults = [
        {
            name: t('app.explore.skills.quiz.result.cream.name'),
            range: [66, 75],
            emoji: "🥛",
            color: "#10b981",
            description: t('app.explore.skills.quiz.result.cream.description'),
            advice: t('app.explore.skills.quiz.result.cream.advice')
        },
        {
            name: t('app.explore.skills.quiz.result.yogurt.name'),
            range: [53, 65],
            emoji: "🥄",
            color: "#14b8a6",
            description: t('app.explore.skills.quiz.result.yogurt.description'),
            advice: t('app.explore.skills.quiz.result.yogurt.advice')
        },
        {
            name: t('app.explore.skills.quiz.result.cheese.name'),
            range: [38, 52],
            emoji: "🧀",
            color: "#f59e0b",
            description: t('app.explore.skills.quiz.result.cheese.description'),
            advice: t('app.explore.skills.quiz.result.cheese.advice')
        },
        {
            name: t('app.explore.skills.quiz.result.butter.name'),
            range: [23, 37],
            emoji: "🧈",
            color: "#f97316",
            description: t('app.explore.skills.quiz.result.butter.description'),
            advice:  t('app.explore.skills.quiz.result.butter.advice')
        },
        {
            name: t('app.explore.skills.quiz.result.iceCream.name'),
            range: [0, 22],
            emoji: "🍨",
            color: "#ef4444",
            description: t('app.explore.skills.quiz.result.iceCream.description'),
            advice: t('app.explore.skills.quiz.result.iceCream.advice')
        }
    ];

    const getDairyResult = (score: number) => {
        return dairyResults.find(dairy => score >= dairy.range[0] && score <= dairy.range[1]);
    }

    const handleRedo = () => {
        dispatch(resetAnswers());
        navigate('/explore/skills/1');
    }

    const result = getDairyResult(currentScore);
    const freshnessLevel = getFreshnessLevel(percentage);
    const FreshnessIcon = freshnessLevel.icon;

    if (!result) return <></>;

    return (
        <QuizContent 
            title={`​🥛 ${t('app.explore.skills.title')}`} 
            footer={<></>} 
            leftSide={
                <>
                    <Box sx={{ textAlign: 'center', padding: '2rem' }}>
                        <Box>
                            <Typography sx={{ fontSize: '6rem' }}>{result?.emoji}</Typography>
                        </Box>
                        <Box>
                            <Box>
                                <Typography variant="h2" sx={{ fontWeight: 200 }}>
                                    <Trans i18nKey="app.explore.skills.quiz.result.title" values={{ resultCategory: result?.name }} />
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: '1rem' }}>
                                <Typography variant="h5" sx={{ color: '#14b8a6' }}>Score: {currentScore}/75 ({Math.round((currentScore/75)*100)}%)</Typography>
                            </Box>
                            <Box sx={{ marginBottom: '1.5rem' }}>
                                <Typography variant="h6" sx={{ fontWeight: 200 }}>{result?.description}</Typography>
                            </Box>
                            <Box sx={{ padding: '1rem', backgroundColor: '#f0fdfa', borderLeft: '4px solid', borderColor: '#14b8a6' }}>
                                <Typography sx={{ fontWeight: 200 }}>{t('app.explore.skills.quiz.advice')} {result?.advice}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '1.5rem' }}>
                            <Button 
                                variant="contained" 
                                sx={{ 
                                    backgroundColor: '#14b8a6',
                                    color: '#FFF',
                                    borderRadius: '9999px', 
                                    padding: '12px 0', 
                                    width: '100%' 
                                }}
                                onClick={() => handleRedo()}
                            >{t('app.explore.battery.quiz.buttons.redo')}</Button>
                        </Box>
                    </Box>
                </>
            } 
            rightSide={
                <>
                    <Box 
                        sx={(theme) => ({ 
                            alignItems: 'center', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '20px',

                            [theme.breakpoints.down(680)]: {
                                padding: '1rem'
                            }
                        })}
                    >
                         <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6">{t('app.explore.skills.quiz.result.final')}</Typography>
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
                                    stroke={result?.color}
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
                                <Typography variant="h3" sx={{ color: result?.color }}>{Math.round(percentage)}%</Typography>
                                <Typography>{currentScore}/75</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box 
                                sx={{ 
                                    backgroundColor: result?.color,
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
                    </Box>
                </>
            } 
            isTechSkillsQuiz 
        />
    )
}