import { EnterName } from "@fallout/QuizPage/QuizStepper/Steps/Init/EnterName";
import { PickCategory } from "@fallout/QuizPage/QuizStepper/Steps/Init/PickCategory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Divider } from "@mui/material";
import {
  InitPromptAbove,
  InitPromptAboveWrapper,
  InitPromptAboveWrapperChildren,
  InitPromptBelow,
  InitPromptBox,
  InitPromptCardMedia,
  InitPromptIndicator,
  InitPromptWrapper,
} from "@pages/FalloutOnPassion/QuizPage/Styles/InitPrompt";
import { Sounds } from "@resources/Enums/Sounds";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";

export const Init = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [play] = useSound(Sounds.SELECT_FIELD);
  const [hasEnterName, setHasEnterName] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const storedUserName = window.localStorage
    .getItem("FALLOUT_ON_PASSION_USERNAME")
    ?.split('"')
    .join("");
  const hasStoredUser = Boolean(storedUserName && storedUserName.length > 0);

  const storedCategory = window.localStorage.getItem("FALLOUT_PASSION_FIELD");

  const handleSelectField = (e: SyntheticEvent, field: string) => {
    play();
    window.localStorage.setItem("FALLOUT_PASSION_FIELD", field);
    navigate(`/explore/passion/whoami/${field}/0`);
  };

  useEffect(() => {
    if (storedCategory && hasStoredUser) {
      navigate(`/explore/passion/whoami/${storedCategory}/0`);
    }
  }, [hasStoredUser, storedCategory]);

  return (
    <InitPromptWrapper>
      <InitPromptBox>
        <InitPromptAbove>
          <InitPromptCardMedia
            image={
              "https://od.lk/s/MzRfMzk5Njg0MDZf/WhatsApp_Image_2024-06-19_a%CC%80_03.43.04_796dfceb-removebg-preview.png"
            }
          />
          <InitPromptAboveWrapper>
            <Divider textAlign={"left"} variant={"fullWidth"}>
              <InitPromptAboveWrapperChildren
                hasEnterName={hasEnterName || hasStoredUser}
                deleteIcon={<ReceiptIcon />}
                label={
                  hasEnterName || hasStoredUser
                    ? t("app.explore.fallout_on_passion.quiz.chip")
                    : t("app.explore.fallout_on_passion.quiz.chip_name")
                }
              />
            </Divider>
            {!hasError && (hasEnterName || hasStoredUser) && (
              <InitPromptIndicator hasUsername>
                <Trans
                  i18nKey={
                    "app.explore.fallout_on_passion.quiz.indicators.say_hi"
                  }
                  values={{ userName: userName ? userName : storedUserName }}
                />
              </InitPromptIndicator>
            )}
            {!hasError && !hasEnterName && userName && userName.length > 0 && (
              <InitPromptIndicator isSuccess>
                {t(
                  "app.explore.fallout_on_passion.quiz.indicators.press_confirm",
                )}
              </InitPromptIndicator>
            )}
            {hasError && (
              <InitPromptIndicator isError>
                {t("app.explore.fallout_on_passion.quiz.indicators.error")}
              </InitPromptIndicator>
            )}
          </InitPromptAboveWrapper>
        </InitPromptAbove>
        <InitPromptBelow>
          {!hasEnterName && !hasStoredUser && (
            <EnterName
              setHasEnterName={setHasEnterName}
              setUserName={setUserName}
              setHasError={setHasError}
              hasError={hasError}
              userName={userName}
            />
          )}
          {(hasEnterName || hasStoredUser) && (
            <PickCategory handleSelectField={handleSelectField} />
          )}
        </InitPromptBelow>
      </InitPromptBox>
    </InitPromptWrapper>
  );
};
