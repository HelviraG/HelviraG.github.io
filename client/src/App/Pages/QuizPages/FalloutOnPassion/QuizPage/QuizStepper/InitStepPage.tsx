import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { InitStep } from "./InitStep";
import { BuyCoffeeLink } from "@/App/Components/Link/BuyCoffeeLink";

export const InitStepsPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();
  
    useDocumentTitle(`Helvira Goma | 🕹️ ${t("app.menu.explorer")}`);
  
    return (
      <>
        {isTablet ? (
          <Mobile withFooter={false} withHeader={false} withTopButton={false}>
            <InitStep />
            <BuyCoffeeLink />
            
          </Mobile>
        ) : (
          <Desktop withFooter={false} withHeader={false} withTopButton={false}>
            <InitStep />
            <BuyCoffeeLink />
            
          </Desktop>
        )}
      </>
    );
};

