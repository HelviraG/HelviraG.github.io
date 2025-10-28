import { CustomTabPanel } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel";
import { TabsPanelChip } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/TabsPanelStyle";
import FilterIcon from "@mui/icons-material/Filter";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ReceiptIcon from "@mui/icons-material/Receipt";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const CopyrightPanel = ({ value }: { value: number }) => {
  const { t } = useTranslation('translation');

  return (
    <CustomTabPanel value={value} index={2}>
      <Divider sx={(theme) => ({ color: theme.game.special.iceBlue.medium })} textAlign={"right"}>
        <TabsPanelChip
          icon={<ReceiptIcon fontSize={"small"} />}
          label={t("app.explore.fallout_on_passion.tabs.credits.title")}
        />
      </Divider>
      <Typography
        variant={"body1"}
        sx={(theme) => ({
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(2),
          fontWeight: 900,
          color: theme.palette.background.paper,
        })}
      >
        {t("app.explore.fallout_on_passion.tabs.credits.subTitle")}
      </Typography>
      <List
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          color: theme.palette.background.paper,

            "& .MuiSvgIcon-root, .MuiTypography-root": {
              color: theme.palette.background.paper
            }
        })}
      >
        <ListItem
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            flex: 1,
            textAlign: "left",
            width: "-webkit-fill-available",
            color: theme.palette.background.paper,

            "& .MuiButtonBase-root": {
              width: "-webkit-fill-available",
              color: theme.palette.background.paper,
            },
          })}
          disablePadding
        >
          <ListItemButton sx={{ color: '#FFFFFF!important' }}>
            <ListItemIcon>
              <ImageSearchIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: '#FFFFFF' }} primary={"Cover"} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText inset primary={"Prime Video"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            textAlign: "left",
            width: "-webkit-fill-available",

            "& .MuiButtonBase-root": {
              width: "-webkit-fill-available",
              color: '#FFFF',
            },
          }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <FilterIcon />
            </ListItemIcon>
            <ListItemText primary={"Quiz"} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Red Rocket - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Tractor On The Field - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={
                "Armor Brotherhood Of Steel Concept Art - Fallout 4 / Bethesda Studio"
              }
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={
                "Sole Survivor and Dogmeat - Fallout 4 / Bethesda Studio"
              }
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Fallout 4 Garage - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Nuka-World - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Video Game Wallpaper - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Vault Boy - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Sole Survivor - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              inset
              primary={"Vault Door - Fallout 4 / Bethesda Studio"}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </CustomTabPanel>
  );
};
