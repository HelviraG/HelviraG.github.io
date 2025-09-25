import React, { MouseEventHandler } from "react";
import { Navigators } from "./Navigation/Navigators";

interface NavigationProps {
  activeStep: number;
  maxSteps: number;
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handleBack: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

export const Navigation = ({
  activeStep,
  maxSteps,
  handleNext,
  handleBack,
  isDisabled,
}: NavigationProps) => {
  return (
    <>
      {activeStep > 0 && (
        <Navigators
          direction="left"
          handleBack={handleBack}
          disabled={isDisabled}
          isFirstStep={activeStep === 0}
        />
      )}
      {activeStep >= 0 && activeStep < maxSteps - 1 && (
        <Navigators
          direction="right"
          handleNext={handleNext}
          disabled={isDisabled}
          isFirstStep={activeStep === 0}
        />
      )}
    </>
  );
};
