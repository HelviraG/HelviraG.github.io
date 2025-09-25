import { HeroTitle } from "@component/Hero/HeroTitle";
import { Covers } from "@resources/Enums/Images";
import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { CareerPage } from "./Career/CareerPage";
import { BuyMeACoffee } from "./Home/BuyMeACoffee";

export const Career = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();

  useDocumentTitle(`Helvira Goma | ${t("app.menu.career")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            imgUrl={Covers.CAREER}
            quote={t("app.quotes.career")}
            title={t("app.career.title")}
            titleColor="error"
          />
          <CareerPage />
          <BuyMeACoffee />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            imgUrl={Covers.CAREER}
            quote={t("app.quotes.career")}
            title={t("app.career.title")}
            titleColor="error"
          />
          <CareerPage />
          <BuyMeACoffee />
        </Desktop>
      )}
    </>
  );
};
