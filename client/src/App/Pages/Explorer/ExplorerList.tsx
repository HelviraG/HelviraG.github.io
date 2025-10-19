import { AppChip } from "@component/Chip/Chip";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LineAxisIcon from '@mui/icons-material/LineAxis';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { SubTitle } from "@resources/Enums/Images";
import { Routes } from "@resources/Enums/Routes";
import { Tags } from "@resources/Enums/Tags";
import {
  ListItemsWrapper,
  ListTitleWrapper,
  ListWrapper,
} from "@styles/Components/List/List";
import {
  CardContentAction,
  CardContentButton,
  CardWrapper,
} from "@styles/Components/List/ListItem";
import { TitleTypography, TitleWrapper } from "@styles/Layout/TitleStyle";
import { ChipWrapper } from "@styles/Pages/ConferencesStyle";
import React from "react";
import { useTranslation } from "react-i18next";

export const ExplorerList = () => {
  const { t } = useTranslation();

  return (
    <ListWrapper>
      <ListTitleWrapper>
        <TitleWrapper textAlign="right">
          <img src={SubTitle.EXPLORER} alt="Explore page subtitle icon" />
          <TitleTypography variant="h3" shadowColor="#ff4757">
            {t("app.explore.description")}
          </TitleTypography>
        </TitleWrapper>
      </ListTitleWrapper>
      <ListItemsWrapper
        sx={{
          marginTop: "2em",

          "& .MuiPaper-root": {
            color: "error.dark",
          },
        }}
      >
        <CardWrapper isPlayground>
          <CardMedia
            component="img"
            sx={(theme) => ({
              width: 500,
              height: "100%",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",

              [theme.breakpoints.down("lg")]: {
                width: "100%",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              },
            })}
            image={t("app.explore.fallout_on_passion.miniature")}
            alt="Fallout on Passion"
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "20px" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <ChipWrapper>
                <AppChip label="passion" type={Tags.PASSION} />
                <AppChip label="quiz" type={Tags.QUIZ} />
              </ChipWrapper>
              <Typography
                component="div"
                variant="h5"
                sx={{ fontWeight: 800, marginTop: "0.5em" }}
              >
                {t("app.explore.fallout_on_passion.title")}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component="div"
                sx={{ fontWeight: 800 }}
              >
                {t("app.explore.fallout_on_passion.subtitle")}
              </Typography>
              <CardContentAction isExplorerList>
                <CardContentButton
                  href={`${Routes.QUIZ_RESULT}`}
                  startIcon={<LineAxisIcon />}
                >
                  {t("app.general.actions.check")}
                </CardContentButton>
                <CardContentButton
                  href={`${Routes.PASSION}`}
                  startIcon={<VideogameAssetIcon />}
                  isPlayground
                >
                  {t("app.general.actions.play")}
                </CardContentButton>
              </CardContentAction>
            </CardContent>
          </Box>
        </CardWrapper>
        <CardWrapper isPlayground>
          <CardMedia
            component="img"
            sx={(theme) => ({
              width: 500,
              height: "100%",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",

              [theme.breakpoints.down("lg")]: {
                width: "100%",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              },
            })}
            image={t("app.explore.battery.miniature")}
            alt="Burnout Assessment"
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "20px" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <ChipWrapper>
                <AppChip label="burn-out" type={Tags.BURNOUT} />
                <AppChip label="quiz" type={Tags.QUIZ} />
              </ChipWrapper>
              <Typography
                component="div"
                variant="h5"
                sx={{ fontWeight: 800, marginTop: "0.5em" }}
              >
                {t("app.explore.battery.title")}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component="div"
                sx={{ fontWeight: 800 }}
              >
                {t("app.explore.battery.subtitle")}
              </Typography>
              <CardContentAction isExplorerList>
                <CardContentButton
                  href={`${Routes.BATTERY}`}
                  startIcon={<ElectricalServicesIcon />}
                  isPlayground
                >
                  {t("app.general.actions.start")}
                </CardContentButton>
              </CardContentAction>
            </CardContent>
          </Box>
        </CardWrapper>
        <CardWrapper isPlayground>
          <CardMedia
            component="img"
            sx={(theme) => ({
              width: 500,
              height: "100%",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",

              [theme.breakpoints.down("lg")]: {
                width: "100%",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              },
            })}
            image={t("app.explore.skills.miniature")}
            alt="Tech Skills Expiration Assessment"
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "20px" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <ChipWrapper>
                <AppChip label="skills" type={Tags.SKILLS} />
                <AppChip label="quiz" type={Tags.QUIZ} />
              </ChipWrapper>
              <Typography
                component="div"
                variant="h5"
                sx={{ fontWeight: 800, marginTop: "0.5em" }}
              >
                {t("app.explore.skills.title")}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component="div"
                sx={{ fontWeight: 800 }}
              >
                {t("app.explore.skills.subtitle")}
              </Typography>
              <CardContentAction isExplorerList>
                <CardContentButton
                  href={`${Routes.SKILLS}`}
                  startIcon={<HandymanIcon />}
                  isPlayground
                >
                  {t("app.general.actions.start")}
                </CardContentButton>
              </CardContentAction>
            </CardContent>
          </Box>
        </CardWrapper>
      </ListItemsWrapper>
    </ListWrapper>
  );
};
