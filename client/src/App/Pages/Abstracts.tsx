import { HeroTitle } from "@component/Hero/HeroTitle";
import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { BuyCoffeeSection } from "./Home/BuyCoffeeSection";
import { AbstractsList } from "./Abstracts/AbstractsList";

export const Abstracts = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation(['common', 'translation']);

  useDocumentTitle(`Helvira Goma | 📚 ${t("menu.abstract")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            quote=''
            title={t("translation:app.abstracts.title")}
          />
          <AbstractsList />
          <BuyCoffeeSection />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            quote=''
            title={t("translation:app.abstracts.title")}
          />
          <AbstractsList />
          <BuyCoffeeSection />
        </Desktop>
      )}
    </>
  );
};
