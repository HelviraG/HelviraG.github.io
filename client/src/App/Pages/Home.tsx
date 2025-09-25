import useDocumentTitle from "@hooks/useDocumentTitle";
import { useListConferencesQuery } from "@services/ConferencesApi";
import React from "react";
import { useTranslation } from "react-i18next";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { MainSection } from "./Home/MainSection";

export const Home = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();

  useDocumentTitle(`Helvira Goma | 🖲️ ${t("app.menu.home")}`);

  return (
    <>
      {isTablet ? (
        <Mobile>
          <MainSection />
        </Mobile>
      ) : (
        <Desktop>
          <MainSection />
        </Desktop>
      )}
    </>
  );
};
