import React from "react";
import { StepperBox } from "../../Styles/QuizStepper";

interface StepperProps {
  activeStep: number;
  maxSteps: number;
}

export const Stepper = ({ activeStep, maxSteps }: StepperProps) => {
  return (
    <StepperBox
      variant="dots"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      backButton={<></>}
      nextButton={<></>}
    />
  );
};
