import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { BuyMeACoffee } from "@/App/Pages/Home/BuyMeACoffee";
import { QuizStart } from "./QuizStart";

export const QuizStartPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();
  
    useDocumentTitle(`Helvira Goma | 🕹️ ${t("app.menu.explorer")}`);
  
    return (
      <>
        {isTablet ? (
          <Mobile>
            <QuizStart />
            
            <BuyMeACoffee />
          </Mobile>
        ) : (
          <Desktop>
            <QuizStart />
            
            <BuyMeACoffee />
          </Desktop>
        )}
      </>
    );
};

