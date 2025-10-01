import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Sounds } from "@resources/Enums/Sounds";
import {
  SettingsButtonBox,
  WavyButton,
  WavySettingsButtonBox,
  WavySettingsSpan,
  WavySettingsSpanBox,
  WavySettingsSpanTypo,
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
            <SettingsSuggestIcon fontSize="small" />
            <WavySettingsSpanTypo>
              {t("app.general.actions.params")}
            </WavySettingsSpanTypo>
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
