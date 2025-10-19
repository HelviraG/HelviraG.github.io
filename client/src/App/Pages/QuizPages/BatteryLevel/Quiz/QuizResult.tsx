import { useDispatch, useSelector } from "react-redux";
import { QuizContent } from "../Layout/QuizContent"
import { listBurnoutAnswers, resetAnswers } from "@/Redux/Slices/BurnoutQuizSlice";
import { Trans, useTranslation } from "react-i18next";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { getBatteryColor } from "./QuizSteps";
import { useNavigate } from "react-router-dom";
import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";

export const QuizResult = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const answers = useSelector(listBurnoutAnswers);

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

    const calculateBatteryLevel = () => {
        let exhaustionScore = 0;
        let cynicismScore = 0;
        let efficacyScore = 0;
        
        answers.forEach((answer) => {
            const question = questions[parseInt(answer.questionId, 10)];
            if (question?.domain === "exhaustion") {
                exhaustionScore += answer.answer;
            } else if (question?.domain === "cynicism") {
                cynicismScore += answer.answer;
            } else if (question?.domain === "efficacy") {
                efficacyScore += (6 - answer.answer);
            }
        });
        
        const exhaustionPercent = (exhaustionScore / 54) * 100;
        const cynicismPercent = (cynicismScore / 30) * 100;
        const efficacyPercent = (efficacyScore / 48) * 100;
        
        const burnoutScore = (exhaustionPercent + cynicismPercent + (100 - efficacyPercent)) / 3;
        const batteryLevel = Math.round(100 - burnoutScore);
        
        return batteryLevel;
    };
    
    const getBatteryResult = (level: number) => {
        if (level >= 80) {
            return {
                title: t('app.explore.battery.quiz.results.full.title'),
                description: t('app.explore.battery.quiz.results.full.description'),
                advice: t('app.explore.battery.quiz.results.full.advice'),
                personality: t('app.explore.battery.quiz.results.full.personality'),
                color: "#f0fdf4"
            };
        } else if (level >= 60) {
            return {
                title: t('app.explore.battery.quiz.results.optimal.title'),
                description: t('app.explore.battery.quiz.results.optimal.description'),
                advice: t('app.explore.battery.quiz.results.optimal.advice'),
                personality: t('app.explore.battery.quiz.results.optimal.personality'),
                color: "#eff6ff"
            };
        } else if (level >= 40) {
            return {
                title: t('app.explore.battery.quiz.results.low.title'),
                description: t('app.explore.battery.quiz.results.low.description'),
                advice: t('app.explore.battery.quiz.results.low.advice'),
                personality: t('app.explore.battery.quiz.results.low.personality'),
                color: "#fefce8"
            };
        } else if (level >= 20) {
            return {
                title: t('app.explore.battery.quiz.results.critical.title'),
                description: t('app.explore.battery.quiz.results.critical.description'),
                advice: t('app.explore.battery.quiz.results.critical.advice'),
                personality: t('app.explore.battery.quiz.results.critical.personality'),
                color: "#fff7ed"
            };
        } else {
            return {
                title: t('app.explore.battery.quiz.results.emergency.title'),
                description: t('app.explore.battery.quiz.results.emergency.description'),
                advice: t('app.explore.battery.quiz.results.emergency.advice'),
                personality: t('app.explore.battery.quiz.results.emergency.personality'),
                color: "#fef2f2"
            };
        }
    };

    const batteryLevel = calculateBatteryLevel();
    const result = getBatteryResult(batteryLevel);
    const resultColor = getBatteryColor(batteryLevel);

    const handleRedo = () => {
        dispatch(resetAnswers());
        navigate('/explore/burnout');
    }

    return (
        <QuizContent 
            isBurnoutQuiz
            title={`🔋​ ${t('app.explore.battery.title')}`}
            leftSide={
                <Box 
                    sx={(theme) => ({ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '20px',

                        [theme.breakpoints.down(680)]: {
                            marginBottom: '1rem'
                        }
                    })}
                >
                    <Box sx={{ backgroundColor: result.color, border: '1px solid #e5e7eb', borderRadius: '.5rem', padding: '24px' }}>
                        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <Typography variant="h2" sx={{ color: resultColor, fontWeight: 700 }}>{batteryLevel}%</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5" sx={{ marginBottom: '.5rem', fontWeight: 700 }}>{result.title}</Typography>
                            <Typography variant="h6" sx={{ color: '#0d9488', fontStyle: 'italic', fontWeight: 600, marginBottom: '.5rem' }}>{result.personality}</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 300 }}>{result.description}</Typography>
                        </Box>
                        <Divider sx={{ margin: '1rem 0' }} />
                        <Box>
                            <Typography sx={{ marginBottom: '.5rem' }}>{t('app.explore.battery.quiz.results.todo')}</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 300 }}>{result.advice}</Typography>
                        </Box>
                    </Box>
                    <Box>
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
                    <Box sx={{ backgroundColor: '#f9fafb', borderRadius: '.5rem', color: '#6b7280', padding: '1rem', textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ marginBottom: '.5em' }}>{t('app.explore.battery.quiz.results.caption')}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 300 }}>
                            <Trans 
                                i18nKey='app.explore.battery.quiz.results.subCaption'
                                components={[
                                    <Link href="https://www.researchgate.net/publication/227634716_The_Measurement_of_Experienced_Burnout" sx={{ color: '#4834d4', textDecoration: 'none' }} />
                                ]}
                            />
                        </Typography>
                    </Box>
                </Box>
            } 
            rightSide={
                <>
                    <Box>
                        <svg width="250" height="250" viewBox="0 0 250 250">
                            <rect x="40" y="70" width="150" height="110" rx="12" fill="white" stroke="#94a3b8" strokeWidth="3"></rect>
                            <rect x="190" y="95" width="15" height="60" rx="4" fill="#94a3b8"></rect>
                            <rect x="50" y="80" width="130" height="90" rx="8" fill={resultColor} opacity="0.9"></rect>
                            <text x="115" y="135" fontFamily="Arial" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">{batteryLevel}%</text>
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
                        <Typography sx={{ marginBottom: '2rem' }}>{t('app.explore.battery.quiz.final.title')}</Typography>
                        <BuyCoffeeLink noAbsolute />
                    </Box>
                </>
            } 
            footer={<></>} 
        />
    )
}