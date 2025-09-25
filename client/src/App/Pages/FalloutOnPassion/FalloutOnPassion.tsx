import { Sound } from "@component/Sound/Sound";
import useDocumentTitle from "@hooks/useDocumentTitle";
import useSessionStorage from "@hooks/useSessionStorage";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { Sounds } from "@resources/Enums/Sounds";
import { getPassionField, listAnswers } from "@slices/QuizSlice";
import {
  FabButton,
  FabButtonBox,
  FabButtonComponent,
} from "@styles/Pages/FalloutOnPassionStyle";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { PageLoader } from "./PageLoader/PageLoader";
import { QuizStart } from "./QuizPage/QuizStart";
import { Box } from "@mui/material";

export const FalloutPassion = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value] = useSessionStorage("PAUSE_SOUND", false);

  const [pauseMusic, setPauseMusic] = useState<boolean>(value);

  const [displayLoader, setDisplayLoader] = useState<boolean>(true);

  useDocumentTitle(`Helvira Goma | 💓 ${t("app.menu.passion")}`);

  useEffect(() => {
    setDisplayLoader(true);

    setTimeout(() => {
      setDisplayLoader(false);
    }, 10000);
  }, []);

  useEffect(() => {
    setPauseMusic(value);
  }, [value]);

  useEffect(() => {
    dispatch(getPassionField());
    dispatch(listAnswers());
  }, []);

  return (
    <Box sx={(theme) => ({ 
      width: '80%', 
      margin: '0 auto', 
      paddingBottom: '6em',
      paddingTop: '10em', 
      position: 'relative',

      [theme.breakpoints.up('xl')]: {
        width: '60%',     
      },
    })}>
      {PageLoader(displayLoader)}
      {!displayLoader && <QuizStart />}
      <FabButtonBox>
        <Sound sound={Sounds.START_BACKGROUND} pause={pauseMusic} />
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
    </Box>
  );
};
