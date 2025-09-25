import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { BuyMeACoffee } from "@/App/Pages/Home/BuyMeACoffee";
import { InitStep } from "./InitStep";

export const InitStepsPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();
  
    useDocumentTitle(`Helvira Goma | 🕹️ ${t("app.menu.explorer")}`);
  
    return (
      <>
        {isTablet ? (
          <Mobile>
            <InitStep />
            
            <BuyMeACoffee />
          </Mobile>
        ) : (
          <Desktop>
            <InitStep />
            
            <BuyMeACoffee />
          </Desktop>
        )}
      </>
    );
};

