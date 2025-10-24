import { Trans, useTranslation } from "react-i18next"
import { QuizContent } from "../../BatteryLevel/Layout/QuizContent"
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { listTechSkillsAnswers, resetAnswers } from "@/Redux/Slices/TechSkillsQuizSlice";
import { getFreshnessLevel } from "./QuizSteps";
import DoneIcon from '@mui/icons-material/Done';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate, useSearchParams } from "react-router-dom";
import { SocialMediaWrapper } from "@/App/Styles/Components/AvatarDrawerStyle";
import { useState } from "react";
import { CopyAll } from "@mui/icons-material";

export const QuizResult = () => {
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [linkCopied, setLinkCopied] = useState(false);
    const [copied, setCopied] = useState(false);
    const answers = useSelector(listTechSkillsAnswers);
    const scoreParam = searchParams.get('score');
    const resultParam = searchParams.get('result');
    const hasSearchParams = scoreParam !== null && resultParam !== null;

    const currentScore = hasSearchParams 
    ? parseInt(scoreParam, 10) 
    : Object.values(answers).reduce((sum, answer) => sum + answer.answer, 0);
    const maxPossibleScore = 50;
    const percentage = (currentScore / maxPossibleScore) * 100;

    const dairyResults = [
        {
            short: "cream",
            name: t('app.explore.skills.quiz.result.cream.name'),
            range: [44, 50],
            emoji: "🥛",
            color: "#10b981",
            description: t('app.explore.skills.quiz.result.cream.description'),
            advice: t('app.explore.skills.quiz.result.cream.advice')
        },
        {
            short: "yogurt",
            name: t('app.explore.skills.quiz.result.yogurt.name'),
            range: [35, 43],
            emoji: "🥄",
            color: "#14b8a6",
            description: t('app.explore.skills.quiz.result.yogurt.description'),
            advice: t('app.explore.skills.quiz.result.yogurt.advice')
        },
        {
            short: "cheese",
            name: t('app.explore.skills.quiz.result.cheese.name'),
            range: [25, 34],
            emoji: "🧀",
            color: "#f59e0b",
            description: t('app.explore.skills.quiz.result.cheese.description'),
            advice: t('app.explore.skills.quiz.result.cheese.advice')
        },
        {
            short: "butter",
            name: t('app.explore.skills.quiz.result.butter.name'),
            range: [15, 24],
            emoji: "🧈",
            color: "#f97316",
            description: t('app.explore.skills.quiz.result.butter.description'),
            advice:  t('app.explore.skills.quiz.result.butter.advice')
        },
        {
            short: "iceCream",
            name: t('app.explore.skills.quiz.result.iceCream.name'),
            range: [0, 14],
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

    const generateShareableLink = (result: any) => {
        const params = new URLSearchParams({
            result: String(result.name),
            score: String(currentScore),
            percentage: String(Math.round((currentScore/50)*100))
        });
        return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    };

    const copyToClipboard = async (result: any) => {
        try {
            const pronoun = t(`app.explore.skills.quiz.result.${result.short}.pronoun`);
            const text = t("app.explore.skills.quiz.result.linkText", { resultName: pronoun + " " + result.name, score: currentScore, percentage: Math.round((currentScore/50)*100) });

            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy to clipboard');
        }
    };

    const shareResults = async (result: any) => {
        const pronoun = t(`app.explore.skills.quiz.result.${result.short}.pronoun`);
        const text = t("app.explore.skills.quiz.result.linkText", { resultName: pronoun + " " + result.name, score: currentScore, percentage: Math.round((currentScore/50)*100) });
        const url = generateShareableLink(result);
        
        if (navigator.share) {
            try {
                await navigator.share({ title: t('app.explore.skills.title'), text, url });
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    try { await navigator.clipboard.writeText(`${text}\n${url}`); } catch {}
                }
            }
        } else {
            try { await navigator.clipboard.writeText(`${text}\n${url}`); } catch {}
        }
    };

    const shareToTwitter = (result: any) => {
        const pronoun = t(`app.explore.skills.quiz.result.${result.short}.pronoun`);
        const text = t("app.explore.skills.quiz.result.linkText", { resultName: pronoun + " " + result.name, score: currentScore, percentage: Math.round((currentScore/50)*100) });

        const url = generateShareableLink(result);
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };

    const shareToLinkedIn = (result: any) => {
        const url = generateShareableLink(result);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    };

    const copyLinkToClipboard = async (result: any) => {
        try {
            const link = generateShareableLink(result);
            await navigator.clipboard.writeText(link);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy link');
        }
    };

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
                                <Typography variant="h5" sx={{ color: '#14b8a6' }}>Score: {currentScore}/50 ({Math.round((currentScore/50)*100)}%)</Typography>
                            </Box>
                            <Box sx={{ marginBottom: '1.5rem' }}>
                                <Typography variant="h6" sx={{ fontWeight: 200 }}>{result?.description}</Typography>
                            </Box>
                            <Box sx={{ padding: '1rem', backgroundColor: '#f0fdfa', borderLeft: '4px solid', borderColor: '#14b8a6' }}>
                                <Typography sx={{ fontWeight: 200 }}>{t('app.explore.skills.quiz.advice')} {result?.advice}</Typography>
                            </Box>
                        </Box>
                        <Box 
                            sx={(theme) => ({ 
                                alignItems: 'baseline', 
                                justifyContent: 'space-between', 
                                display: 'flex',  
                                marginTop: theme.spacing(4),

                                [theme.breakpoints.down(1170)]: {
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    gap: theme.spacing(2)
                                }
                            })}
                        >
                            <Box>
                                <Typography>{t('app.explore.skills.quiz.result.share')}</Typography>
                            </Box>
                            <SocialMediaWrapper isShareButton>
                                <IconButton onClick={() => shareToLinkedIn(result)}>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton onClick={() => shareToTwitter(result)}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton onClick={() => copyLinkToClipboard(result)}>
                                    {linkCopied ? <DoneIcon /> : <LinkIcon />}
                                </IconButton>
                                <IconButton onClick={() => copyToClipboard(result)}>
                                    {copied ? <DoneIcon /> : <CopyAll />}
                                </IconButton>
                                <IconButton onClick={() => shareResults(result)}>
                                    <ShareIcon />
                                </IconButton>
                            </SocialMediaWrapper>
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
                                <Typography>{currentScore}/50</Typography>
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