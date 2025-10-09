import useClickOutside from "@hooks/useClickOutside";
import useDocumentTitle from "@hooks/useDocumentTitle";
import i18n from "@i18n";
import { Box, useMediaQuery } from "@mui/material";
import { Init } from "@pages/FalloutOnPassion/QuizPage/QuizStepper/Steps/Init";
import React, { useRef, useState } from "react";
import { QuizSettings } from "../../Components/QuizSettings";
import { QuizPopper } from "../QuizPopper";
import { QuizLayout } from "../../Layouts/QuizLayout";

export const InitStep = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popperRef = useRef(null);
  
  useClickOutside(popperRef, () => {
    setOpenSettings(false);
  });

  const isWavyMobile = useMediaQuery("(max-width: 767px)");

  const handlePopper = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenSettings(true);
  };

  useDocumentTitle(`Helvira Goma | 💓 ${i18n.t("app.menu.passion")}`);

  return (
    <QuizLayout buttons={<></>} withFooter={false}>
      <Box 
        sx={(theme) => ({ 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flex: 1,
          overflowY: 'auto',

          [theme.breakpoints.down(800)]: {
            backgroundColor: '#EEFAE1',
            flexDirection: 'column-reverse',
            justifyContent: 'flex-start'
          }
        })}
      >
        <Init />
        <QuizSettings
          isMobile={isWavyMobile}
          handlePopper={handlePopper}
          isSettingsOpen={openSettings}
        />
        <QuizPopper
          openSettings={openSettings}
          anchorEl={anchorEl}
          popperRef={popperRef}
        />
      </Box>
    </QuizLayout>
  );
};
