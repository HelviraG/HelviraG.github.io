import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { FalloutQuiz } from "./QuizPages/FalloutOnPassion/FalloutQuiz";
import { BuyCoffeeLink } from "../Components/Link/BuyCoffeeLink";

export const FalloutPassionPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();
  
  useDocumentTitle(`Helvira Goma | 💓 ${t("app.menu.passion")}`);
  
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

