import RemoveRoadIcon from "@mui/icons-material/RemoveRoad";
import SpeedIcon from "@mui/icons-material/Speed";
import { useMediaQuery } from "@mui/material";
import {
  ErrorDialogCard,
  ErrorDialogCardBox,
  ErrorDialogCardButton,
  ErrorDialogCardButtonBox,
  ErrorDialogCardContent,
  ErrorDialogCardTypo,
  ErrorDialogContent,
  ErrorDialogStyle,
} from "@pages/FalloutOnPassion/ErrorPage/ErrorPageStyle";
import { Routes } from "@resources/Enums/Routes";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DialogPaper } from "../QuizPage/Styles/QuizStepper";

export const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleClickQuiz = () => {
    navigate(Routes.PASSION);
  };

  const handleClickWebsite = () => {
    navigate(Routes.EXPLORE);
  };

  return (
    <ErrorDialogStyle
      disableEscapeKeyDown
      open={true}
      fullWidth
      PaperProps={{
        sx: DialogPaper(isMobile, true),
      }}
      sx={{
        background: `transparent url(${t("app.explore.fallout_on_passion.error")}) center no-repeat`,
      }}
    >
      <ErrorDialogContent>
        <ErrorDialogCard>
          <ErrorDialogCardContent>
            <ErrorDialogCardBox>
              <ErrorDialogCardTypo variant="h6">
                Oops, shelter not found!
              </ErrorDialogCardTypo>
              <ErrorDialogCardButtonBox>
                <ErrorDialogCardButton
                  isQuizButton
                  variant={"contained"}
                  startIcon={<SpeedIcon />}
                  onClick={handleClickQuiz}
                >
                  Quiz
                </ErrorDialogCardButton>
                <ErrorDialogCardButton
                  isWebsiteButton
                  variant={"contained"}
                  endIcon={<RemoveRoadIcon />}
                  onClick={handleClickWebsite}
                >
                  Website
                </ErrorDialogCardButton>
              </ErrorDialogCardButtonBox>
            </ErrorDialogCardBox>
          </ErrorDialogCardContent>
        </ErrorDialogCard>
      </ErrorDialogContent>
    </ErrorDialogStyle>
  );
};
