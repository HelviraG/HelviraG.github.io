import { EnterNameTextInput } from "@fallout/QuizPage/QuizStepper/Steps/Init/EnterName/EnterNameInput";
import {
  InitNameWrapper,
  InitPromptBelowTypo,
  InitPromptBelowTypoWrapper,
} from "@fallout/QuizPage/Styles/InitPrompt";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface EnterNameProps {
  setHasEnterName: Dispatch<SetStateAction<boolean>>;
  setUserName: Dispatch<SetStateAction<string>>;
  userName: string;
  hasError: boolean;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

export const EnterName = ({
  setHasEnterName,
  setUserName,
  userName,
  hasError,
  setHasError,
}: EnterNameProps) => {
  const { t } = useTranslation();

  return (
    <>
      <InitPromptBelowTypoWrapper>
        <InitPromptBelowTypo variant={"h6"}>
          {t("app.explore.fallout_on_passion.quiz.label_name")}
        </InitPromptBelowTypo>
      </InitPromptBelowTypoWrapper>
      <Box>
        <InitNameWrapper>
          <input name={"userName"} value={userName} hidden />
          <EnterNameTextInput
            setHasEnterName={setHasEnterName}
            setUserName={setUserName}
            userName={userName}
            setHasError={setHasError}
            hasError={hasError}
          />
        </InitNameWrapper>
      </Box>
    </>
  );
};
