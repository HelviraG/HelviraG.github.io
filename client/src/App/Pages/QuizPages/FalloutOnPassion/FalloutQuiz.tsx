import useDocumentTitle from "@hooks/useDocumentTitle";
import { getPassionField, listAnswers } from "@/Redux/Slices/PassionQuizSlice";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { QuizStart } from "./QuizPage/QuizStart";
import { Box } from "@mui/material";

export const FalloutQuiz = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  useDocumentTitle(`Helvira Goma | 💓 ${t("app.menu.passion")}`);

  useEffect(() => {
    dispatch(getPassionField());
    dispatch(listAnswers());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', flex: 1, display: "flex", flexDirection: "column" }}>
      <QuizStart />
    </Box>
  );
};
