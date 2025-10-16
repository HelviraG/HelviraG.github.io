import {QuizPopperContent, QuizPopperStyle, QuizPopperWrapper} from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/Styles/QuizPopper";
import {Sounds} from "@resources/Enums/Sounds";
import {MutableRefObject, SyntheticEvent, useState} from "react";
import useSound from "use-sound";
import {TabNavigation} from "./QuizSettingsPopper/TabNavigation";
import {TabPanel} from "./QuizSettingsPopper/TabPanel";

interface QuizPopperProps {
    openSettings: boolean;
    anchorEl: HTMLButtonElement | null;
    popperRef: MutableRefObject<null>;
}

export const QuizPopper = ({openSettings, anchorEl, popperRef}: QuizPopperProps) => {
    const [value, setValue] = useState(0);
    const [play] = useSound(Sounds.CLICK_SETTINGS);

    const handleTabNavigation = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        play();
    };

    return (
        <QuizPopperStyle
            open={openSettings}
            placement="bottom-end"
            anchorEl={anchorEl}
            ref={popperRef}
        >
            <QuizPopperWrapper>
                <QuizPopperContent>
                    <TabNavigation value={value} handleTabNavigation={handleTabNavigation}/>
                    <TabPanel value={value}/>
                </QuizPopperContent>
            </QuizPopperWrapper>
        </QuizPopperStyle>
    )
}