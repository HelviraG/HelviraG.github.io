import { Box, Tab } from "@mui/material";
import { ConferencesListItem } from "@pages/Conferences/ConferencesListItem";
import { SubTitle } from "@resources/Enums/Images";
import { Tags } from "@resources/Enums/Tags";
import {
  IConference,
  ListConferences,
} from "@resources/Pages/General/ConferencesResource";
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
import React, { SetStateAction, SyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const ConferencesList = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(Tags.ALL);

  const handleFilterTag = (
    event: SyntheticEvent<Element, Event>,
    newTab: SetStateAction<Tags>,
  ) => {
    setCurrentTab(newTab);
  };

  const talksCategories = [
    { label: t("app.lives.tags.all"), value: Tags.ALL },
    { label: t("app.lives.tags.english"), value: Tags.ENGLISH },
    { label: t("app.lives.tags.french"), value: Tags.FRENCH },
  ];

  return (
    <ListWrapper>
      <ListTitleWrapper>
        <TitleWrapper textAlign="right">
          <img src={SubTitle.CONFS} alt="Conferences page subtitle icon" />
          <TitleTypography variant="h3">
            {t("app.confs.subtitle")}
          </TitleTypography>
        </TitleWrapper>
        <SubTitleTypography>{t("app.confs.description")}</SubTitleTypography>
      </ListTitleWrapper>
      <ListItemsWrapper sx={{ display: "flex", flexDirection: "column" }}>
        <Box style={{ maxWidth: "100%", margin: "0 auto" }}>
          <VideoTabs
            variant="scrollable"
            value={currentTab}
            onChange={handleFilterTag}
          >
            {talksCategories.map((category) => (
              <Tab
                value={category.value}
                key={category.label}
                label={category.label}
              />
            ))}
          </VideoTabs>
        </Box>
        {ListConferences().map((conference) => {
          // Map tags to string[] for each event
          const eventsWithStringTags = conference.events.map(event => ({
            ...event,
            tags: (event.tags ?? []).map(tag => tag ? String(tag) : ""),
          }));
          return (
            <ConferencesListItem
              {...conference}
              events={eventsWithStringTags}
              key={`${conference.title}-${conference.events[0].month}-${conference.events[0].day}`}
              value={currentTab}
            />
          );
        })}
      </ListItemsWrapper>
    </ListWrapper>
  );
};
