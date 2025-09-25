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

type EnterNameInputProps = {
    setHasEnterName: Dispatch<SetStateAction<boolean>>,
    setUserName: Dispatch<SetStateAction<string>>,
    userName: string,
    hasError: boolean,
    setHasError: Dispatch<SetStateAction<boolean>>,
}

const isValidCharacter = (letter: string) => {
    return /[^a-z]/gi.test(letter);
}

export const EnterNameTextInput = ({ setHasEnterName, setUserName, userName, hasError, setHasError }: EnterNameInputProps) => {
    const { t } = useTranslation();

    const handleCharacterValidation = (letter: string) => {
        if (isValidCharacter(letter)) {
            setHasError(true)
        }

        return isValidCharacter(letter);
    };

    const onSubmit = () => {
        if (userName && userName.length > 0) {
            setHasEnterName(true);
            window.localStorage.setItem('FALLOUT_ON_PASSION_USERNAME', JSON.stringify(userName));
        }
    };

    const handleEnterName = (e: SyntheticEvent) => {
        const currentLetter = e.currentTarget;
        const currentLetterIndex = currentLetter.id.split('-')[1];
        const nextLetter = `name-${parseInt(currentLetterIndex, 10) + 1}`;

        // @ts-ignore
        const err = handleCharacterValidation(e.target.value);

        if (err) {
            return;
        }

        setHasError(false);

        // @ts-ignore
        if (e.target.value === '') {
            const previousLetter = `name-${parseInt(currentLetterIndex, 10) - 1}`;
            const previousLetterInput = document.getElementById(previousLetter);

            return previousLetterInput?.focus();
        }

        // @ts-ignore
        setUserName(`${userName}${e.target.value}`);

        const nextLetterInput = document.getElementById(nextLetter);
        nextLetterInput?.focus();
    }

    const handleKeyPress = (e: SyntheticEvent) => {
        // @ts-ignore
        if (e.keyCode === 8) {
            const currentLetter = e.target;
            // @ts-ignore
            const currentLetterIndex = currentLetter.id.split('-')[1];

            // @ts-ignore
            if (e.target.value === '') {
                const previousLetter = `name-${parseInt(currentLetterIndex, 10) - 1}`;
                const previousLetterInput = document.getElementById(previousLetter);

                const inputs = document.querySelectorAll('input');
                const inputValues = Array.from(inputs).map((input) => input.value);

                inputValues[currentLetterIndex] = '';
                const userNameInput = inputValues.slice(1, 10).join('').toString();
                setUserName(userNameInput);

                return previousLetterInput?.focus();
            }
        }

        // @ts-ignore
        if (e.keyCode === 13) {
            if (!hasError) onSubmit();
        }
    }

    const handleCharacterError = () => {
        if (hasError) {
            return t('app.explore.fallout_on_passion.quiz.indicators.error_tip');
        }
    }

    return (
        <Box>
            <InitNameWrapper>
                {Array(10).fill(0, 0, 10).map((index, value) => (
                    <EnterNameInput
                        id={`name-${value}`}
                        name={`quizzerName${index}`}
                        inputProps={{
                            maxLength: 1,
                            disableunderline: true.toString(),
                        }}
                        hasError={hasError}
                        onChange={handleEnterName}
                        onKeyDown={(e) => handleKeyPress(e)}
                    />
                ))}
            </InitNameWrapper>

            {handleCharacterError() && (
                <EnterNameErrorWrapper>
                    <Tooltip color={'error'} title={handleCharacterError()} placement="top-start" arrow>
                        <EnterNameError>
                            <NewReleasesIcon/><Typography>{handleCharacterError()}</Typography>
                        </EnterNameError>
                    </Tooltip>
                </EnterNameErrorWrapper>
            )}
        </Box>
    )
}