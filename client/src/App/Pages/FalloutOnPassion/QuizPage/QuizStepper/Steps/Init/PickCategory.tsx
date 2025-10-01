import {
    InitPromptBelowButtonBox,
    InitPromptBelowTypo,
    InitPromptBelowTypoWrapper
} from "@fallout/QuizPage/Styles/InitPrompt";
import {Box} from "@mui/material";
import {
    BackgroundStartInnerBox,
    BackgroundStartSecondInnerBox,
    BackgroundStartThirdInnerBox,
    BackgroundStartTypo,
    ForegroundStartBox,
    ForegroundStartInnerBox, ForegroundStartTypo,
    StartButton
} from "@styles/Pages/FalloutOnPassionStyle/ButtonsStyle";
import { useTranslation } from "react-i18next";
import { SyntheticEvent } from "react";

export const PickCategory = ({ handleSelectField }: { handleSelectField: (e: SyntheticEvent, field: string) => void }) => {
    const { t } = useTranslation();

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
                        <Box key={activity}>
                            <StartButton onClick={(e) => handleSelectField(e, activity)} isInitPrompt>
                                <BackgroundStartInnerBox component={"span"} isInitPrompt>
                                    <BackgroundStartSecondInnerBox component={"span"} isInitPrompt>
                                        <BackgroundStartThirdInnerBox component={"span"} isInitPrompt>
                                            <BackgroundStartTypo isInitPrompt>{activity}</BackgroundStartTypo>
                                        </BackgroundStartThirdInnerBox>
                                    </BackgroundStartSecondInnerBox>
                                </BackgroundStartInnerBox>
                                <ForegroundStartBox isInitPrompt>
                                    <ForegroundStartInnerBox isInitPrompt>
                                        <ForegroundStartTypo isInitPrompt>{activity}</ForegroundStartTypo>
                                    </ForegroundStartInnerBox>
                                </ForegroundStartBox>
                            </StartButton>
                        </Box>
                    ))}
                </InitPromptBelowButtonBox>
            </Box>
        </>
    )
}