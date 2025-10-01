import { HeroTitle } from "@component/Hero/HeroTitle";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Covers } from "@resources/Enums/Images";
import React from "react";
import { useTranslation } from "react-i18next";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { BuyCoffeeSection } from "./Home/BuyCoffeeSection";
import { PressList } from "./Press/PressList";

export const Press = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();

  useDocumentTitle(`Helvira Goma | 🗞️ ${t("app.menu.press")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            imgUrl={Covers.PRESS}
            quote={t("app.quotes.press_title")}
            title={t("app.press.title")}
            titleColor="primary"
          />
          <PressList />
          <BuyCoffeeSection />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            imgUrl={Covers.PRESS}
            quote={t("app.quotes.press_title")}
            title={t("app.press.title")}
            titleColor="primary"
          />
          <PressList />
          <BuyCoffeeSection />
        </Desktop>
      )}
    </>
  );
};
