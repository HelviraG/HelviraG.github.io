import React, { useContext } from 'react';
import "./DotRing.css";
import useMousePosition from "../../Hooks/useMousePosition";
import { MouseContext } from '@context/MouseContextProvider';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Routes } from '@resources/Enums/Routes';
import { alpha, Box } from '@mui/material';

export const Cursor = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const isTablet = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box
        sx={{
            ...(pathname.startsWith(Routes.EXPLORE) && {
                background: 'linear-gradient(to right, #3AE374 2px, transparent 2px) 0 0, linear-gradient(to right, #3AE374 2px, transparent 2px) 0 100%, linear-gradient(to left, #3AE374 2px, transparent 2px) 100% 0, linear-gradient(to left, #3AE374 2px, transparent 2px) 100% 100%, linear-gradient(to bottom, #3AE374 2px, transparent 2px) 0 0, linear-gradient(to bottom, #3AE374 2px, transparent 2px) 100% 0, linear-gradient(to top, #3AE374 2px, transparent 2px) 0 100%, linear-gradient(to top, #3AE374 2px, transparent 2px) 100% 100%',
            }),
            ...(!pathname.startsWith(Routes.EXPLORE) && {
                background: 'linear-gradient(to right, #FF4757 2px, transparent 2px) 0 0, linear-gradient(to right, #FF4757 2px, transparent 2px) 0 100%, linear-gradient(to left, #FF4757 2px, transparent 2px) 100% 0, linear-gradient(to left, #FF4757 2px, transparent 2px) 100% 100%, linear-gradient(to bottom, #FF4757 2px, transparent 2px) 0 0, linear-gradient(to bottom, #FF4757 2px, transparent 2px) 100% 0, linear-gradient(to top, #FF4757 2px, transparent 2px) 0 100%, linear-gradient(to top, #FF4757 2px, transparent 2px) 100% 100%',
            }),
            backgroundRepeat: 'no-repeat',
            backgroundSize: '6px 8px',
            backgroundColor: pathname.startsWith(Routes.EXPLORE) ? alpha('#3AE374', .2) : alpha('#FF4757', .2) ,
            borderRadius: '4px',
            display: isTablet ? 'none' : 'block',
            left: `${x}px`,
            top: `${y}px`,

            zIndex: 9999999999
        }}
        className={"ring " + cursorType}
      ></Box>
      <Box
        className={"dot " + cursorType}
        sx={{
          left: `${x}px`, top: `${y}px`,
          display: isTablet ? 'none' : 'block',
          backgroundColor: pathname.startsWith(Routes.EXPLORE) ? '#32FF7E' : '#FF4757',
          zIndex: 9999999999
        }}
      ></Box>
    </>
  );
};
