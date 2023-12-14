import React, { useContext } from 'react';
import "./DotRing.css";
import useMousePosition from "../../Hooks/useMousePosition";
import { MouseContext } from '../../Context/MouseContextProvider';

export const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};