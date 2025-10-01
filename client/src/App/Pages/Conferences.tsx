import { HeroTitle } from "@component/Hero/HeroTitle";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Covers } from "@resources/Enums/Images";
import React from "react";
import { useTranslation } from "react-i18next";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { ConferencesList } from "./Conferences/ConferencesList";
import { BuyCoffeeSection } from "./Home/BuyCoffeeSection";

export const Conferences = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();

  useDocumentTitle(`Helvira Goma | 🎤 ${t("app.menu.conferences")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            imgUrl={Covers.CONFS}
            quote={t("app.quotes.confs")}
            title={t("app.confs.title")}
            titleColor="warning"
          />
          <ConferencesList />
          <BuyCoffeeSection />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            imgUrl={Covers.CONFS}
            quote={t("app.quotes.confs")}
            title={t("app.confs.title")}
            titleColor="warning"
          />
          <ConferencesList />
          <BuyCoffeeSection />
        </Desktop>
      )}
    </>
  );
};
