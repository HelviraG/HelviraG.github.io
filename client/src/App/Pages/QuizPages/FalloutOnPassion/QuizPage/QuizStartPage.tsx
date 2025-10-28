import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { FalloutQuiz } from "../FalloutQuiz";

export const QuizStartPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation('common');
  
  useDocumentTitle(`Helvira Goma | 💓 ${t("menu.passion")}`);
  
  return (
    <>
      {isTablet ? (
        <Mobile withTopButton={false} withHeader={false} withFooter={false}>
          <FalloutQuiz />
          
        </Mobile>
      ) : (
        <Desktop withTopButton={false} withHeader={false} withFooter={false}>
          <FalloutQuiz />
          
        </Desktop>
      )}
    </>
  );
};

