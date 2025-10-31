import { HeroTitle } from "@component/Hero/HeroTitle";
import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { CareerPage } from "./Career/CareerPage";
import { BuyCoffeeSection } from "./Home/BuyCoffeeSection";

export const Career = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation(['common', 'translation']);

  useDocumentTitle(`Helvira Goma | 🔖 ${t("menu.career")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            quote={t("quotes.career")}
            title={t("translation:app.career.title")}
          />
          <CareerPage />
          <BuyCoffeeSection />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            quote={t("quotes.career")}
            title={t("translation:app.career.title")}
          />
          <CareerPage />
          <BuyCoffeeSection />
        </Desktop>
      )}
    </>
  );
};
