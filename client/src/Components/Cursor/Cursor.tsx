import React, { useContext } from 'react';
import "./DotRing.css";
import useMousePosition from "../../Hooks/useMousePosition";
import { MouseContext } from '../../Context/MouseContextProvider';
import { useMediaQuery } from '@mui/material';

export const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const isTablet = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px`, display: isTablet ? 'none' : 'block' }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px`, display: isTablet ? 'none' : 'block'  }}
      ></div>
    </>
  );
};
