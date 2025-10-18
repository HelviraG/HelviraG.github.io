import useChangeLangage from "@hooks/useChangeLangage";
import { useMediaQuery } from "@mui/material";
import { showField } from "@/Redux/Slices/PassionQuizSlice";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

export const FirstStep = ({ p }: { p: string[] }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { t } = useTranslation();
  const { appLang: lang } = useChangeLangage();

  const category = useSelector(showField);

  useEffect(() => {}, [lang]);

  return (
    <TypeAnimation
      splitter={(str) => str.split(/(?= )/)}
      sequence={[
        t(p[0], { cat: category }),
        6000,
        t(p[1], { cat: category }),
        6000,
        t(p[2], { cat: category }),
        6000,
        t(p[3], { cat: category }),
        6000,
        t(p[4], { cat: category }),
        6000,
        t(p[5], { cat: category }),
        6000,
        t(p[6], { cat: category }),
        6000,
        t(p[7], { cat: category }),
        6000,
        t(p[8], { cat: category }),
        6000,
      ]}
      speed={{ type: "keyStrokeDelayInMs", value: 30 }}
      omitDeletionAnimation={true}
      style={{
        fontSize: isMobile ? "12px" : "15px",
        display: "block",
        height: isMobile ? "120px" : "90px",
        padding: isMobile ? "0px 26px 26px" : "0",
        marginTop: isMobile ? "2em" : "1em",
        textAlign: "justify",
        fontStyle: "italic",
      }}
      repeat={Infinity}
    />
  );
};
