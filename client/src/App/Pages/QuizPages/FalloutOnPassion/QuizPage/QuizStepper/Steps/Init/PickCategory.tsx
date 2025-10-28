import {
    InitPromptBelowButtonBox,
    InitPromptBelowTypo,
    InitPromptBelowTypoWrapper
} from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/Styles/InitPrompt";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SyntheticEvent } from "react";

export const PickCategory = ({ handleSelectField }: { handleSelectField: (e: SyntheticEvent, field: string) => void }) => {
    const { t } = useTranslation('translation');

    return (
        <>
            <InitPromptBelowTypoWrapper>
                <InitPromptBelowTypo variant={"h3"}>
                    {t('app.explore.fallout_on_passion.quiz.label')}
                </InitPromptBelowTypo>
            </InitPromptBelowTypoWrapper>
            <Box>
                <InitPromptBelowButtonBox>
                    {['coding', 'gaming', 'design', 'data'].map((activity: string) => (
                        <Button 
                            key={activity} 
                            onClick={(e) => handleSelectField(e, activity)}
                            variant="outlined"
                            sx={{ 
                                width: '-webkit-fill-available', 
                                fontSize: '1em', 
                                borderRadius: '16px', 
                                color: 'black', 
                                border: '1px solid #000',

                                '&:hover': {
                                    border: '1px solid #EEFAE1',
                                    color: '#B8E986',
                                    backgroundColor: '#000'
                                }
                            }}
                        >
                            {activity}
                        </Button>
                    ))}
                </InitPromptBelowButtonBox>
            </Box>
        </>
    )
}