import useScrollText from "@hooks/useScrollText";
import { Box, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ScrollTextWrapper = styled(Box)(({ theme }) => ({
  color: theme.game.special.dark,
  textAlign: 'center', 
  width: '50%'
}));

const ScrollTextTypograhy = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '14px'
  },
}));

export const ScrollText = ({ setHeaderBackground }: { setHeaderBackground: CallableFunction }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  const [text, setText] = useState<string>("");

  const { pageScrollText } = useScrollText();

  const handleScrollText = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

    setScrollY(window.scrollY);

    if (pageScrollText && pageScrollText[0]) {
      if (hasReachedBottom) {
        setText(pageScrollText[0].last_section);
        setHeaderBackground("#FFF");
      } else if (window.scrollY < 2) {
        setText(pageScrollText[0].first_section);
        setHeaderBackground("#00C79A");
      } else if (window.scrollY >= 2 && window.scrollY <= 230) {
        setText(pageScrollText[0].second_section);
        setHeaderBackground("#00C79A");
      } else {
        setText(pageScrollText[0].third_section);
        setHeaderBackground("#FFF");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollText);
  });

  return (
    <ScrollTextWrapper>
      <ScrollTextTypograhy variant="body1">
        {scrollY ? text : pageScrollText[0].first_section}
      </ScrollTextTypograhy>
    </ScrollTextWrapper>
  );
};
