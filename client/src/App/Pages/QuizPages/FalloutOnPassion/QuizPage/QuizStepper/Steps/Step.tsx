import { Box, Typography } from "@mui/material";
import { Sounds } from "@resources/Enums/Sounds";
import { storeAnswers } from "@slices/QuizSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useSound from "use-sound";
import { StepBox, StepButtonBox } from "../../Styles/QuizStepper";
import {
  BackgroundStepInnerBox,
  BackgroundStepSecondInnerBox,
  BackgroundStepThirdInnerBox,
  BackgroundStepTypo,
  ForegroundStepBox,
  ForegroundStepInnerBox,
  ForegroundStepTypo,
  StepButton,
} from "../../Styles/StepButton";

const options = [1, 2, 3, 4, 5, 6, 7];

interface StepProps {
  p: string[];
  setSelectedAnswer: CallableFunction;
  activeStep: number;
  storedAnswer: number;
  hasAnswer: boolean;
}

export const Step = ({
  p,
  setSelectedAnswer,
  activeStep,
  storedAnswer,
  hasAnswer,
}: StepProps) => {
  const dispatch = useDispatch();
  const [play] = useSound(Sounds.SELECT_FIELD);
  const [clickedButton, setClickedButton] = useState<number>();

  const handleOptionSelected = (option: number) => {
    setSelectedAnswer(option);
    setClickedButton(option);
    play();
    dispatch(
      storeAnswers({
        questionId: activeStep.toString(),
        answer: option.toString(),
      }),
    );
  };

  return (
    <StepBox>
      <StepButtonBox>
        {options.map((option, index) => (
          <StepButton
            key={index}
            variant="contained"
            isClicking={clickedButton === option}
            isSaved={hasAnswer && storedAnswer === option}
            onClick={() => handleOptionSelected(option)}
          >
            <BackgroundStepInnerBox component={"span"}>
              <BackgroundStepSecondInnerBox component={"span"}>
                <BackgroundStepThirdInnerBox component={"span"}>
                  <BackgroundStepTypo>
                    <Box 
                      sx={{ 
                        border: '1px solid white',     
                        padding: '6px',
                        borderRadius: '50%',
                        margin: '10px',
                        fontSize: '27px'
                      }}
                    >
                      {option}
                    </Box>
                  </BackgroundStepTypo>
                </BackgroundStepThirdInnerBox>
              </BackgroundStepSecondInnerBox>
            </BackgroundStepInnerBox>
            <ForegroundStepBox
              isClicking={clickedButton === option}
              isSaved={hasAnswer && storedAnswer === option}
            >
              <ForegroundStepInnerBox>
                <ForegroundStepTypo>
                  <Box 
                    sx={(theme) => ({ 
                      border: '1px solid #596F4C',     
                      padding: '6px',
                      borderRadius: '50%',
                      margin: '10px',
                      fontSize: '27px',

                      ...(hasAnswer && storedAnswer === option && {
                        color: theme.palette.background.paper
                      })
                    })}
                  >
                    {option}
                  </Box>
                </ForegroundStepTypo>
              </ForegroundStepInnerBox>
            </ForegroundStepBox>
          </StepButton>
        ))}
      </StepButtonBox>
      {p.map((p: string, index) => (
        <Typography key={index} variant="caption" textAlign="center">
          {p}
        </Typography>
      ))}
    </StepBox>
  );
};
