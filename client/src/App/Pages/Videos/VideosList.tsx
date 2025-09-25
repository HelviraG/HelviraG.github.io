import { Tab } from "@mui/material";
import { SubTitle } from "@resources/Enums/Images";
import { Tags } from "@resources/Enums/Tags";
import { ILive, ListVideos } from "@resources/Pages/General/VideosResource";
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
import { VideoTabs } from "@styles/Pages/VideosStyle";
import React, { SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { VideosListItem } from "./VideosListItem";

export const VideosList = () => {
  const [currentTab, setCurrentTab] = useState(Tags.ALL);
  const { t } = useTranslation();

  const handleFilterTag = (event: any, newTab: SetStateAction<Tags>) => {
    setCurrentTab(newTab);
  };

  const livesCategories = [
    { label: t("app.lives.tags.all"), value: Tags.ALL },
    { label: Tags.INTERVIEW, value: Tags.INTERVIEW },
    { label: Tags.LIVE, value: Tags.LIVE },
    {
      label: t("app.lives.tags.testimony"),
      value: t("app.lives.tags.testimony"),
    },
    { label: t("app.lives.tags.videos"), value: Tags.VIDEO },
  ];

  return (
    <ListWrapper>
      <ListTitleWrapper>
        <TitleWrapper textAlign="right">
          <img src={SubTitle.LIVE} alt="Live page subtitle icon" />
          <TitleTypography variant="h3">
            {t("app.lives.subtitle")}
          </TitleTypography>
        </TitleWrapper>
        <SubTitleTypography>{t("app.lives.description")}</SubTitleTypography>
      </ListTitleWrapper>
      <VideoTabs
        variant="scrollable"
        value={currentTab}
        onChange={handleFilterTag}
      >
        {livesCategories.map((category) => (
          <Tab
            value={category.value}
            key={category.label}
            label={category.label}
          />
        ))}
      </VideoTabs>
      <ListItemsWrapper>
        {ListVideos().map((live: ILive) => (
          <VideosListItem value={currentTab} {...live} key={live.link} />
        ))}
      </ListItemsWrapper>
    </ListWrapper>
  );
};
