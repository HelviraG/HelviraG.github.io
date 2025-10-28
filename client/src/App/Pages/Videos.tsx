import { HeroTitle } from "@component/Hero/HeroTitle";
import { Covers } from "@resources/Enums/Images";
import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { BuyCoffeeSection } from "./Home/BuyCoffeeSection";
import { VideosList } from "./Videos/VideosList";

export const Videos = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation(['common', 'translation']);

  useDocumentTitle(`Helvira Goma | 📼 ${t("menu.live")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            imgUrl={Covers.LIVE}
            quote={t("quotes.lives")}
            title={t("translation:app.lives.title")}
            titleColor="primary"
          />
          <VideosList />
          <BuyCoffeeSection />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            imgUrl={Covers.LIVE}
            quote={t("quotes.lives")}
            title={t("translation:app.lives.title")}
            titleColor="primary"
          />
          <VideosList />
          <BuyCoffeeSection />
        </Desktop>
      )}
    </>
  );
};
