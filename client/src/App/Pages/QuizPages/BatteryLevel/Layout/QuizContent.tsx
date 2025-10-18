import { Box } from "@mui/material"
import { QuizLayout } from "../../Layout/QuizLayout"
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const QuizContent = ({ leftSide, rightSide, footer }: { leftSide: ReactNode; rightSide: ReactNode; footer: ReactNode }) => {
    const { t } = useTranslation();

    return (
        <QuizLayout 
            title={`🔋​ ${t('app.explore.battery.title')}`}
            buttons={
                <Box sx={{ alignItems: 'center', display: 'flex', flex: 1, justifyContent: 'space-between' }}>
                    {footer}
                </Box>
            } 
            isBurnoutQuiz 
            isPassionQuiz={false}
        >
            <Box sx={(theme) => ({ backgroundColor: theme.palette.background.paper, display: 'flex', flex: 1, padding: '2rem', overflowY: 'auto' })}>
                <Box 
                    sx={(theme) => ({ 
                        display: 'flex', 
                        flex: 1,

                        [theme.breakpoints.down(680)]: {
                            flexDirection: 'column'
                        }
                    })}
                >
                    <Box 
                        sx={(theme) => ({ 
                            display: 'flex', 
                            flex: 1,
                            flexDirection: 'column', 
                            justifyContent: 'space-evenly', 
                            padding: '1rem 2rem',

                            [theme.breakpoints.down(680)]: {
                                padding: 0,
                                gap: '1.5rem',
                                marginBottom: '1.5rem'
                            }
                        })}
                    >
                        {leftSide}
                    </Box>
                    <Box 
                        sx={{ 
                            alignItems: 'center', 
                            backgroundColor: '#f9fafb', 
                            display: 'flex', 
                            flex: 1, 
                            flexDirection: 'column', 
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        {rightSide}
                    </Box>
                </Box>
            </Box>
        </QuizLayout>
    )
}