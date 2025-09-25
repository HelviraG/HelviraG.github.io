import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Typography } from "@mui/material";
import { Sounds } from "@resources/Enums/Sounds";
import {
  SettingsButtonBox,
  WavyButton,
  WavySettingsButtonBox,
  WavySettingsSpan,
  WavySettingsSpanBox,
} from "@styles/Pages/FalloutOnPassionStyle/ComponentsStyle";
import React, { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";

interface QuizSettingsProps {
  isMobile: boolean;
  handlePopper: MouseEventHandler<HTMLButtonElement>;
  isSettingsOpen: boolean;
}

export const QuizSettings = ({
  isMobile,
  handlePopper,
  isSettingsOpen,
}: QuizSettingsProps) => {
  const { t } = useTranslation();
  const [play] = useSound(Sounds.TAB_SETTINGS);

  const handleOpenSettings = (e: any) => {
    play();
    handlePopper(e);
  };

  return (
    <SettingsButtonBox>
      <WavySettingsButtonBox isPillButton>
        <WavySettingsSpanBox isPillButton isSettingsOpen={isSettingsOpen}>
          <WavySettingsSpan>
            <SettingsSuggestIcon
              fontSize="small"
              sx={(theme) => ({
                marginRight: "8px",

                [theme.breakpoints.down("md")]: {
                  margin: "0 auto",
                },
              })}
            />
            <Typography
              sx={(theme) => ({
                display: "block",
                fontSize: "11px",
                fontWeight: 900,

                [theme.breakpoints.down(768)]: {
                  display: "none",
                },
              })}
            >
              {t("app.general.actions.params")}
            </Typography>
          </WavySettingsSpan>
        </WavySettingsSpanBox>
        <WavyButton
          variant="contained"
          onClick={(e) => handleOpenSettings(e)}
          startIcon={<SettingsSuggestIcon />}
          isDrawy
          isSettingsOpen={isSettingsOpen}
        >
          {isMobile ? "" : t("app.general.actions.params")}
        </WavyButton>
      </WavySettingsButtonBox>
    </SettingsButtonBox>
  );
};
