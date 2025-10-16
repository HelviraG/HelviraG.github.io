import { CustomTabPanel } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel";
import {
  InfoPanelContentBox,
  InfoPanelContentLink,
} from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/InfoPanelStyle";
import {
  TabsPanelChip,
  TabsPanelSubTitle,
} from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/TabsPanelStyle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Divider, Typography } from "@mui/material";
import { Routes } from "@resources/Enums/Routes";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

export const InfoPanel = ({ value }: { value: number }) => {
  const { t } = useTranslation();

  return (
    <CustomTabPanel value={value} index={0}>
      <Divider color={"warning"} textAlign={"right"}>
        <TabsPanelChip
          icon={<HelpOutlineIcon fontSize={"small"} />}
          label={t("app.explore.fallout_on_passion.tabs.info.title")}
        />
      </Divider>
      <TabsPanelSubTitle variant={"h6"} color={"default"}>
        {t("app.explore.fallout_on_passion.tabs.info.subTitle")}
      </TabsPanelSubTitle>
      <InfoPanelContentBox>
        <Typography variant={"body2"}>
          <Trans
            i18nKey="app.explore.fallout_on_passion.tabs.info.first"
            components={[
              <InfoPanelContentLink
                href={t("app.explore.fallout_on_passion.link_article")}
                target="_blank"
                rel="noopener noreferrer"
              />,
            ]}
          />
        </Typography>
        <Typography variant={"body2"}>
          {t("app.explore.fallout_on_passion.tabs.info.first_bis")}
        </Typography>
        <Typography variant={"body2"}>
          {t("app.explore.fallout_on_passion.tabs.info.second")}
        </Typography>
        <Typography variant={"body2"}>
          {t("app.explore.fallout_on_passion.tabs.info.third")}
        </Typography>
        <Typography variant={"body2"}>
          {t("app.explore.fallout_on_passion.tabs.info.fourth")}
        </Typography>
        <Typography variant={"body2"}>
          <Trans
            i18nKey="app.explore.fallout_on_passion.tabs.info.fifth"
            components={[<InfoPanelContentLink href={Routes.QUIZ_RESULT} />]}
          />
        </Typography>
        <Typography variant={"body2"}>
          {t("app.explore.fallout_on_passion.tabs.info.sixth")}
        </Typography>
      </InfoPanelContentBox>
    </CustomTabPanel>
  );
};
