import React, { MouseEventHandler } from "react";
import { Navigators } from "./Navigation/Navigators";
import { Box, Typography } from "@mui/material";

interface NavigationProps {
  activeStep: number;
  maxSteps: number;
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handleBack: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  stepLabel: string;
}

export const Navigation = ({
  activeStep,
  maxSteps,
  handleNext,
  handleBack,
  isDisabled,
  stepLabel,
}: NavigationProps) => {
  return (
    <>
      <Box sx={{ minWidth: '93.5px'}}>
        {activeStep > 0 && (
          <Navigators
            direction="left"
            handleBack={handleBack}
            disabled={isDisabled}
          />
        )}  
      </Box>
      <Box>
        <Typography variant="body2" sx={{ color: '#636e72', fontWeight: 600 }}>
          {stepLabel}
        </Typography>
      </Box>
      {activeStep >= 0 && activeStep < maxSteps - 1 && (
        <Navigators
          direction="right"
          handleNext={handleNext}
          disabled={isDisabled}
        />
      )}
    </>
  );
};
