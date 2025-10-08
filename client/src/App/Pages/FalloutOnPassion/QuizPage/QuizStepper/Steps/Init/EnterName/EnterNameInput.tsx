import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import {
    EnterNameError,
    EnterNameErrorWrapper,
    EnterNameInput,
    InitNameWrapper
} from "@fallout/QuizPage/Styles/InitPrompt";
import { useTranslation } from "react-i18next";
import { Box, Tooltip, Typography } from "@mui/material";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import React, { useEffect, useRef, useState, ChangeEvent } from 'react';

type EnterNameInputProps = {
  setHasEnterName: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
};

const isValidCharacter = (letter: string) => /^[a-zA-Z]$/.test(letter);

export const EnterNameTextInput = ({
  setHasEnterName,
  setUserName,
  userName,
  hasError,
  setHasError,
}: EnterNameInputProps) => {
  const { t } = useTranslation();

  // controlled values for the 10 inputs
  const [values, setValues] = useState<string[]>(() => Array(10).fill(''));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // initialize from external userName if it changes
  useEffect(() => {
    const chars = (userName || '').slice(0, 10).split('');
    const next = Array(10).fill('');
    chars.forEach((c, i) => (next[i] = c));
    setValues(next);
  }, [userName]);

  useEffect(() => {
    const name = values.join('').trim();
    setUserName(name);
  }, [values, setUserName]);

  const focusInput = (index: number) => {
    const el = inputsRef.current[index];
    if (el) {
      el.focus();
      el.select();
    }
  };

  // handle typed characters (onChange)
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const raw = e.target.value || '';
    // take last char typed (handles mobile & quick typing/paste)
    const char = raw.slice(-1);

    if (char === '') {
      // user cleared the input manually
      setValues((prev) => {
        const copy = [...prev];
        copy[index] = '';
        return copy;
      });
      return;
    }

    if (!isValidCharacter(char)) {
      setHasError(true);
      // keep input visually empty (controlled)
      return;
    }

    setHasError(false);

    setValues((prev) => {
      const copy = [...prev];
      copy[index] = char;
      return copy;
    });

    if (index < 9) {
      focusInput(index + 1);
    }
  };

  // handle special keys: Backspace, Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      e.preventDefault();

      if (values[index]) {
        setValues((prev) => {
          const copy = [...prev];
          copy[index] = '';
          return copy;
        });
        return;
      }

      if (index > 0) {
        setValues((prev) => {
          const copy = [...prev];
          copy[index - 1] = '';
          return copy;
        });
        focusInput(index - 1);
      }

      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      const maybeName = values.join('').trim();
      if (!hasError && maybeName.length > 0) {
        setHasEnterName(true);
        window.localStorage.setItem('FALLOUT_ON_PASSION_USERNAME', JSON.stringify(maybeName));
      }
    }
  };

  const handleCharacterError = () => (hasError ? t('app.explore.fallout_on_passion.quiz.indicators.error_tip') : null);

  return (
    <Box>
      <InitNameWrapper>
        {Array.from({ length: 10 }).map((_, index) => (
          <EnterNameInput
            key={index}
            id={`name-${index}`}
            name={`quizzerName-${index}`}
            value={values[index]}
            inputProps={{
              maxLength: 1,
              disableunderline: 'true',
            }}
            hasError={hasError}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
            // store the native input element ref so we can focus/select programmatically
            inputRef={(el: HTMLInputElement | null) => {
              inputsRef.current[index] = el;
            }}
          />
        ))}
      </InitNameWrapper>

      {handleCharacterError() && (
        <EnterNameErrorWrapper>
            <Tooltip color={'error'} title={handleCharacterError() ?? ''} placement="top-start" arrow>
                <EnterNameError>
                    <NewReleasesIcon />
                    <Typography>{handleCharacterError()}</Typography>
                </EnterNameError>
            </Tooltip>
        </EnterNameErrorWrapper>
      )}
    </Box>
  );
};
