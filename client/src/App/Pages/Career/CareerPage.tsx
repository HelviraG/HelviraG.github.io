import { SubTitle } from "@resources/Enums/Images";
import { ListTitleWrapper, ListWrapper } from "@styles/Components/List/List";
import {
  SubTitleTypography,
  TitleTypography,
  TitleWrapper,
} from "@styles/Layout/TitleStyle";
import React from "react";
import { useTranslation } from "react-i18next";
import { CareerTimeline } from "./CareerTimeline";

export const CareerPage = () => {
  const { t } = useTranslation();

  return (
    <ListWrapper>
      <ListTitleWrapper>
        <TitleWrapper textAlign="right">
          <img src={SubTitle.CAREER} alt="Career page subtitle icon" />
          <TitleTypography variant="h3">
            {t("app.career.subtitle")}
          </TitleTypography>
        </TitleWrapper>
        <SubTitleTypography>{t("app.career.description")}</SubTitleTypography>
      </ListTitleWrapper>
      <CareerTimeline />
    </ListWrapper>
  );
};
