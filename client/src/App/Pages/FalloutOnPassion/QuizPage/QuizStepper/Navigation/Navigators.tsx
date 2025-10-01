import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Button } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";

interface NavigatorsProps {
  direction: "left" | "right";
  handleBack?: MouseEventHandler<HTMLButtonElement>;
  handleNext?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Navigators = ({
  direction,
  handleBack,
  handleNext,
  disabled,
}: NavigatorsProps) => {
  const { t } = useTranslation();
  
  return (
    <>
      {direction === "left" ? (
        <Button 
          variant="outlined" 
          sx={(theme) => ({ 
            textTransform: 'lowercase', 
            fontWeight: 600, 
            fontSize: '16px', 
            borderRadius: '32px', 
            borderColor: theme.game.special.greeny, 
            color: theme.game.special.greeny,
            
            '&:hover': {
              backgroundColor: theme.game.special.dark,
              border: `1px solid ${theme.game.special.greeny}`,
              color: theme.game.special.greeny
            }
          })}
          onClick={handleBack}
          disabled={disabled}
        >
          <KeyboardDoubleArrowLeftIcon />
          {t('app.general.actions.back')}
        </Button>
      ) : (
          <Button 
            variant="contained" 
            sx={(theme) => ({ 
              textTransform: 'lowercase', 
              fontWeight: 600, 
              fontSize: '16px', 
              borderRadius: '32px', 
              backgroundColor: theme.game.special.greeny, 
              color: theme.palette.background.paper,
            
              '&:hover': {
                backgroundColor: theme.game.special.dark,
                border: `1px solid ${theme.game.special.greeny}`,
                color: theme.game.special.greeny
              }
            })}
            onClick={handleNext}
            disabled={disabled}
          >
            {t('app.general.actions.next')}
            <KeyboardDoubleArrowRightIcon />
          </Button>
      )}
    </>
  );
};
