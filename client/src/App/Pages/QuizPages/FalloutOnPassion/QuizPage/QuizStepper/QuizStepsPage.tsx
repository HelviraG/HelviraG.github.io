import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { Steps } from "./Steps";
import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";

export const QuizStepsPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();
  
  useDocumentTitle(`Helvira Goma | 💓 ${t("app.menu.passion")}`);
  
  return (
    <>
      {isTablet ? (
        <Mobile withFooter={false} withHeader={false} withTopButton={false}>
          <Steps />
          
        </Mobile>
      ) : (
        <Desktop withFooter={false} withHeader={false} withTopButton={false}>
          <Steps />
          
        </Desktop>
      )}
    </>
  );
};

