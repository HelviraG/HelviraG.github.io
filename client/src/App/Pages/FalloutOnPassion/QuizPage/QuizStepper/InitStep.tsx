import { Sound } from "@component/Sound/Sound";
import useClickOutside from "@hooks/useClickOutside";
import useDocumentTitle from "@hooks/useDocumentTitle";
import useSessionStorage from "@hooks/useSessionStorage";
import i18n from "@i18n";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { Card, useMediaQuery } from "@mui/material";
import { Init } from "@pages/FalloutOnPassion/QuizPage/QuizStepper/Steps/Init";
import { Sounds } from "@resources/Enums/Sounds";
import {
  FabButton,
  FabButtonBox,
  FabButtonComponent,
} from "@styles/Pages/FalloutOnPassionStyle";
import React, { useEffect, useRef, useState } from "react";
import { QuizSettings } from "../../Components/QuizSettings";
import { QuizPopper } from "../QuizPopper";
import {
  CardContentStyle,
  DialogBox,
  DialogStyle,
} from "../Styles/QuizStepper";

export const InitStep = () => {
  const [value] = useSessionStorage("PAUSE_SOUND", false);
  const [pauseMusic, setPauseMusic] = useState<boolean>(value);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popperRef = useRef(null);

  useClickOutside(popperRef, () => {
    setOpenSettings(false);
  });

  const isMobile = useMediaQuery("(max-width: 600px");
  const isWavyMobile = useMediaQuery("(max-width: 767px)");

  const handlePopper = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenSettings(true);
  };

  useDocumentTitle(`Helvira Goma | 💓 ${i18n.t("app.menu.passion")}`);

  useEffect(() => {
    setPauseMusic(value);
  }, [value]);

  return (
    <>
      <DialogStyle
        sx={(theme) => ({
          "& .MuiPaper-root": {
            backgroundColor: "#000",
            background:
              'url("https://od.lk/s/MzRfMzc4MDEwODZf/thumb-1920-599163.jpg") no-repeat center',

            [theme.breakpoints.down("md")]: {
              width: "100%",
              margin: 0,
            },
          },

          "& .MuiDialogContent-root": {
            alignContent: "center",
            background:
              'url("https://od.lk/s/MzRfMzc4MDEwODZf/thumb-1920-599163.jpg") no-repeat center',

            [theme.breakpoints.down("md")]: {
              maxWidth: "100%",
            },
            backgroundColor: "#000",
          },
        })}
      >
        <DialogBox>
          <QuizSettings
            isMobile={isWavyMobile}
            handlePopper={handlePopper}
            isSettingsOpen={openSettings}
          />
          <Card>
            <CardContentStyle
              sx={(theme) => ({
                maxWidth: "80%",
                height: "-webkit-fill-available",

                [theme.breakpoints.down("md")]: {
                  maxWidth: "100%",
                },
                margin: "0 auto",
              })}
            >
              <Init />
              <QuizPopper
                openSettings={openSettings}
                anchorEl={anchorEl}
                popperRef={popperRef}
              />
            </CardContentStyle>
          </Card>
        </DialogBox>
      </DialogStyle>
      <FabButtonBox>
        <Sound sound={Sounds.QUIZ_BACKGROUND} pause={pauseMusic} />
        <FabButtonComponent
          aria-label={"play or stop sound"}
          onClick={() => setPauseMusic(!pauseMusic)}
        >
          <FabButton>
            {pauseMusic && <MusicOffIcon />}
            {!pauseMusic && <MusicNoteIcon />}
          </FabButton>
        </FabButtonComponent>
      </FabButtonBox>
    </>
  );
};
