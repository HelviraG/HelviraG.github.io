import { HeroTitle } from "@component/Hero/HeroTitle";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Covers } from "@resources/Enums/Images";
import React from "react";
import { useTranslation } from "react-i18next";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { ExplorerList } from "./Explorer/ExplorerList";
import { BuyCoffeeSection } from "./Home/BuyCoffeeSection";

export const Explorer = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation(['common', 'translation']);

  useDocumentTitle(`Helvira Goma | 🕹️ ${t("menu.explorer")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <HeroTitle
            imgUrl={Covers.EXPLORER}
            quote={t("quotes.game_title")}
            title={t("translation:app.explore.subtitle")}
            titleColor="error"
          />
          <ExplorerList />
          <BuyCoffeeSection />
        </Mobile>
      ) : (
        <Desktop>
          <HeroTitle
            imgUrl={Covers.EXPLORER}
            quote={t("quotes.game_title")}
            title={t("translation:app.explore.subtitle")}
            titleColor="error"
          />
          <ExplorerList />
          <BuyCoffeeSection />
        </Desktop>
      )}
    </>
  );
};
