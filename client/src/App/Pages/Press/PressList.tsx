import { SubTitle } from "@resources/Enums/Images";
import {
  IPress,
  ListPressArticles,
} from "@resources/Pages/General/PressResource";
import {
  ListItemsWrapper,
  ListTitleWrapper,
  ListWrapper,
} from "@styles/Components/List/List";
import {
  SubTitleTypography,
  TitleTypography,
  TitleWrapper,
} from "@styles/Layout/TitleStyle";
import React from "react";
import { useTranslation } from "react-i18next";
import { PressListItem } from "./PressListItem";

export const PressList = () => {
  const { t } = useTranslation();

  return (
    <ListWrapper>
      <ListTitleWrapper>
        <TitleWrapper textAlign="right">
          <img src={SubTitle.PRESS} alt="Press page subtitle icon" />
          <TitleTypography variant="h3">
            {t("app.press.subtitle")}
          </TitleTypography>
        </TitleWrapper>
        <SubTitleTypography>{t("app.press.description")}</SubTitleTypography>
      </ListTitleWrapper>
      <ListItemsWrapper className="press-list">
        {ListPressArticles().map((article: IPress) => (
          <PressListItem {...article} key={`${article.title}`} />
        ))}
      </ListItemsWrapper>
    </ListWrapper>
  );
};
