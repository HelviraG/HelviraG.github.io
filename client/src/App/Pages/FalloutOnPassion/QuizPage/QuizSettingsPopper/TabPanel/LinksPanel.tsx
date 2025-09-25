import { CustomTabPanel } from "@/App/Pages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel";
import {
  TabsListItem,
  TabsListItemButton,
  TabsPanelChip,
} from "@fallout/QuizPage/QuizSettingsPopper/TabPanel/TabsPanelStyle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ReplayIcon from "@mui/icons-material/Replay";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";
import { Box, Divider, ListItemButton } from "@mui/material";
import { Routes } from "@resources/Enums/Routes";
import { RouterLink } from "@styles/Components/RouterLink";
import { MenuItemText, MenuListIcon } from "@styles/Layout/Menu";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const LinksPanel = ({ value }: { value: number }) => {
  const { t } = useTranslation();
  const pathname = useLocation().pathname;

  return (
    <CustomTabPanel value={value} index={3}>
      <Divider color={"warning"} textAlign={"right"}>
        <TabsPanelChip
          icon={<WrongLocationIcon fontSize={"small"} />}
          label={t("app.explore.fallout_on_passion.tabs.exit.title")}
        />
      </Divider>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(2),
        })}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TabsListItem disablePadding>
          <ListItemButton
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <MenuItemText isFirstItem primary={t("app.menu.passion")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...TabsListItemButton().listItemButtonProps,
            }}
            component={RouterLink}
            {...{ to: Routes.PASSION, isActive: pathname === Routes.PASSION }}
          >
            <MenuListIcon>
              <ReplayIcon />
            </MenuListIcon>
            <MenuItemText primary={t("app.menu.passion_quiz.start")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...TabsListItemButton().listItemButtonProps,
            }}
            component={RouterLink}
            {...{ to: Routes.QUIZ, isActive: pathname === Routes.QUIZ }}
          >
            <MenuListIcon>
              <PlaylistAddCheckIcon />
            </MenuListIcon>
            <MenuItemText primary={t("app.menu.passion_quiz.test")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...TabsListItemButton().listItemButtonProps,
            }}
            component={RouterLink}
            {...{
              to: Routes.QUIZ_RESULT,
              isActive: pathname === Routes.QUIZ_RESULT,
            }}
          >
            <MenuListIcon>
              <EmojiEventsIcon />
            </MenuListIcon>
            <MenuItemText primary={t("app.menu.passion_quiz.result")} />
          </ListItemButton>
        </TabsListItem>
        <TabsListItem disablePadding>
          <ListItemButton
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <MenuItemText isFirstItem primary={t("app.menu.universe")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...TabsListItemButton().listItemButtonProps,
            }}
            component={RouterLink}
            {...{ to: Routes.HOME, isActive: pathname === Routes.HOME }}
          >
            <MenuListIcon>
              <WavingHandRoundedIcon />
            </MenuListIcon>
            <MenuItemText primary={t("app.menu.back_website")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...TabsListItemButton().listItemButtonProps,
            }}
            component={RouterLink}
            {...{ to: Routes.CONFS, isActive: pathname === Routes.CONFS }}
          >
            <MenuListIcon>
              <VolumeUpRoundedIcon />
            </MenuListIcon>
            <MenuItemText primary={t("app.menu.conferences")} />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...TabsListItemButton().listItemButtonProps,
            }}
            component={RouterLink}
            {...{ to: Routes.EXPLORE, isActive: pathname === Routes.EXPLORE }}
          >
            <MenuListIcon>
              <SportsEsportsIcon />
            </MenuListIcon>
            <MenuItemText primary={t("app.menu.explorer")} />
          </ListItemButton>
        </TabsListItem>
      </Box>
    </CustomTabPanel>
  );
};
