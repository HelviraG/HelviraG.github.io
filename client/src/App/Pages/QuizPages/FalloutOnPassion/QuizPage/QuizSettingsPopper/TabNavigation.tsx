import {
  TabNavigation as TabNavigationStyle,
  TabsNavigation,
  TabsNavigationWrapper,
} from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/TabsPanelStyle";
import CopyrightIcon from "@mui/icons-material/Copyright";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { useMediaQuery } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";

export const TabNavigation = ({
  value,
  handleTabNavigation,
}: {
  value: number;
  handleTabNavigation: (event: SyntheticEvent, value: number) => void;
}) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <TabsNavigationWrapper>
      <TabsNavigation
        value={value}
        onChange={handleTabNavigation}
        aria-label="quiz settings popper tabs"
        centered
        variant={"fullWidth"}
      >
        <TabNavigationStyle
          icon={<ShareLocationIcon fontSize={"small"} />}
          value={0}
          label={
            isMobile ? "" : t("app.explore.fallout_on_passion.tabs.tab.title_1")
          }
          wrapped
          iconPosition={"start"}
        />
        <TabNavigationStyle
          icon={<CopyrightIcon fontSize={"small"} />}
          value={2}
          label={
            isMobile ? "" : t("app.explore.fallout_on_passion.tabs.tab.title_3")
          }
          wrapped
          iconPosition={"start"}
        />
        <TabNavigationStyle
          icon={<DoorSlidingIcon fontSize={"small"} />}
          value={3}
          label={
            isMobile ? "" : t("app.explore.fallout_on_passion.tabs.tab.title_4")
          }
          wrapped
          iconPosition={"start"}
        />
      </TabsNavigation>
    </TabsNavigationWrapper>
  );
};
