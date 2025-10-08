import { EnterName } from "@fallout/QuizPage/QuizStepper/Steps/Init/EnterName";
import { PickCategory } from "@fallout/QuizPage/QuizStepper/Steps/Init/PickCategory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Box, CardMedia, Divider } from "@mui/material";
import {
  InitPromptAboveWrapperChildren,
  InitPromptBelow,
  InitPromptIndicator,
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
    <>
      <Box sx={(theme) => ({ 
        backgroundColor: '#EEFAE1', 
        display: 'flex', 
        height: '-webkit-fill-available', 
        alignItems: 'center', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        width: '50%',

        [theme.breakpoints.down(1100)]: {
          width: '60%'
        },

        [theme.breakpoints.down(800)]: {
          flex: 1,
          width: '-webkit-fill-available'
        }
      })}>
        <Box sx={(theme) => ({ 
          backgroundColor: '#B8E986', 
          padding: '4em', 
          margin: '5em', 
          borderRadius: '32px', 
          height: '50%', 

          ...((hasEnterName || hasStoredUser) && { 
            height: 'auto', 
            padding: '3em' 
          }),

          [theme.breakpoints.down(1100)]: {
            maxWidth: '90%'
          },

          [theme.breakpoints.down(800)]: {
            height: 'auto',
            padding: '3em 4em',
            margin: '2em'
          },

          [theme.breakpoints.down(380)]: {
            padding: '3em 2em'
          }
        })}>
          <Divider textAlign={"right"} variant={"fullWidth"}>
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
        </Box>
      </Box>
      <Box sx={(theme) => ({ 
        padding: '2em', 
        width: '50%', 
        backgroundColor: 'black', 
        height: '-webkit-fill-available', 
        alignContent: 'center',

        [theme.breakpoints.down(1100)]: {
          width: '40%'
        },

        [theme.breakpoints.down(800)]: {
          width: '-webkit-fill-available'
        }
      })}>
        <CardMedia
          component="img"
          image="https://od.lk/s/MzRfMzk5Njg0MDZf/WhatsApp_Image_2024-06-19_a%CC%80_03.43.04_796dfceb-removebg-preview.png"
          sx={{ borderRadius: '40px' }}
        />
      </Box>
    </>
  );
};
