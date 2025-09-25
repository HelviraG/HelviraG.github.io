import { HeroTitle } from "@component/Hero/HeroTitle";
import { Covers } from "@resources/Enums/Images";
import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { BuyMeACoffee } from "./Home/BuyMeACoffee";
import { VideosList } from "./Videos/VideosList";

export const Videos = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();

  useDocumentTitle(`Helvira Goma | 📼 ${t("app.menu.live")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            imgUrl={Covers.LIVE}
            quote={t("app.quotes.lives")}
            title={t("app.lives.title")}
            titleColor="primary"
          />
          <VideosList />
          <BuyMeACoffee />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            imgUrl={Covers.LIVE}
            quote={t("app.quotes.lives")}
            title={t("app.lives.title")}
            titleColor="primary"
          />
          <VideosList />
          <BuyMeACoffee />
        </Desktop>
      )}
    </>
  );
};
