import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Button, ButtonProps, styled } from "@mui/material";
import React, { MouseEventHandler } from "react";

interface NavigatorsProps {
  direction: "left" | "right";
  handleBack?: MouseEventHandler<HTMLButtonElement>;
  handleNext?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isFirstStep?: boolean;
}

interface ButtonBoxProps extends ButtonProps {
  isFirstStep?: boolean;
  direction?: string;
}

export const ButtonBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFirstStep" && prop !== "direction",
})<ButtonBoxProps>(({ isFirstStep, direction, theme }) => ({
  position: "absolute",
  top: "-80%",

  ...(isFirstStep && {
    top: "-140%",
  }),

  ...(direction === "right" &&
    isFirstStep && {
      right: "4%",
    }),

  ...(direction === "right" &&
    !isFirstStep && {
      right: "0%",
    }),

  ...(direction === "left" && {
    left: "0%",
  }),

  [theme.breakpoints.between("xs", "md")]: {
    ...(isFirstStep && {
      top: "-120%",
    }),

    top: "-100%",
  },

  [theme.breakpoints.down("xs")]: {
    ...(isFirstStep && {
      top: "-90%",
    }),

    ...(direction === "left" &&
      !isFirstStep && {
        left: "3%",
      }),

    ...(direction === "right" &&
      !isFirstStep && {
        right: "3%",
      }),

    top: "-60%",
  },
}));

export const NavGameButton = styled(Button)(({ theme }) => ({
  background: `repeating-linear-gradient( 45deg, #ffc800, #ffc800 5px, #ffc200 5px, #ffc200 10px)`,
  borderRadius: "50px",
  boxShadow:
    "0 6px 0 #b76113, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #75421f, 0 12px 0 5px #8a542b, 0 15px 0 5px #593116, 0 15px 1px 6px rgba(0,0,0,.3)",
  borderBottom: "3px solid rgba(205, 102, 0, 0.5)",
  textShadow:
    "2px 2px 1px #e78700, -2px 2px 1px #e78700, 2px -2px 1px #e78700, -2px -2px 1px #e78700, 0px 2px 1px #e78700, 0px -2px 1px #e78700, 0px 4px 1px #c96100, 2px 4px 1px #c96100, -2px 4px 1px  #c96100",
  minWidth: "50px!important",
  padding: "6px 10px",

  "&:hover": {
    top: "2px",
    boxShadow:
      "0 4px 0 #b76113, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #75421f, 0 10px 0 5px #8a542b, 0 13px 0 5px #593116, 0 13px 1px 6px rgba(0,0,0,.3)",
  },

  "& .MuiSvgIcon-root": {
    color: theme.game.special.red,
    fontSize: "small",
    fontWeight: 900,
  },
}));

export const Navigators = ({
  direction,
  handleBack,
  handleNext,
  disabled,
  isFirstStep,
}: NavigatorsProps) => {
  return (
    <>
      {direction === "left" ? (
        <ButtonBox isFirstStep={isFirstStep} direction="left">
          <NavGameButton
            variant="contained"
            onClick={handleBack}
            disabled={disabled}
          >
            <KeyboardDoubleArrowLeftIcon />
          </NavGameButton>
        </ButtonBox>
      ) : (
        <ButtonBox isFirstStep={isFirstStep} direction="right">
          <NavGameButton
            variant="contained"
            onClick={handleNext}
            disabled={disabled}
          >
            <KeyboardDoubleArrowRightIcon />
          </NavGameButton>
        </ButtonBox>
      )}
    </>
  );
};
