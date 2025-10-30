import { useLocation } from "react-router-dom";
import { Routes } from "@resources/Enums/Routes";
import { useTranslation } from "react-i18next";

export default function useScrollText() {
    const { t } = useTranslation('common');
    const pathname = useLocation().pathname;

    const getScrollText = () => {
        switch(pathname) {
            case Routes.HOME:
                return [
                    {
                        "first_section": t('scroll.home.first_section'),
                        "second_section": t('scroll.home.second_section'),
                        "third_section": t('scroll.home.third_section'),
                        "last_section": t('scroll.home.last_section')
                    }
                ];
            case Routes.CONFS:
                return [
                    {
                        "first_section": t('scroll.confs.first_section'),
                        "second_section": t('scroll.confs.second_section'),
                        "third_section": t('scroll.confs.third_section'),
                        "last_section": t('scroll.confs.last_section')
                    }
                ];
            case Routes.LIVE:
                return [
                    {
                        "first_section": t('scroll.lives.first_section'),
                        "second_section": t('scroll.lives.second_section'),
                        "third_section": t('scroll.lives.third_section'),
                        "last_section": t('scroll.lives.last_section')
                    }
                ];
            case Routes.PRESS:
                return [
                    {
                        "first_section": t('scroll.press.first_section'),
                        "second_section": t('scroll.press.second_section'),
                        "third_section": t('scroll.press.third_section'),
                        "last_section": t('scroll.press.last_section')
                    }
                ];
            case Routes.CAREER:
                return [
                    {
                        "first_section": t('scroll.career.first_section'),
                        "second_section": t('scroll.career.second_section'),
                        "third_section": t('scroll.career.third_section'),
                        "last_section": t('scroll.career.last_section')
                    }
                ];
            case Routes.EXPLORE:
                return [
                    {
                        "first_section": t('scroll.explore.first_section'),
                        "second_section": t('scroll.explore.second_section'),
                        "third_section": t('scroll.explore.third_section'),
                        "last_section": t('scroll.explore.last_section')
                    }
                ];
            case Routes.PASSION:
            case Routes.QUIZ:
            case Routes.QUIZ_INIT:
            case Routes.QUIZ_STEP:
                return [
                    {
                        "first_section": t('scroll.passion.first_section'),
                        "second_section": t('scroll.passion.second_section'),
                        "third_section": t('scroll.passion.third_section'),
                        "last_section": t('scroll.passion.last_section')
                    }
                ];
            case Routes.PLAYER:
                return [
                    {
                        "first_section": t('scroll.player.first_section'),
                        "second_section": t('scroll.player.second_section'),
                        "third_section": t('scroll.player.third_section'),
                        "last_section": t('scroll.player.last_section')
                    }
                ];
            default:
                return [
                    {
                        "first_section": "",
                        "second_section": "",
                        "third_section": "",
                        "last_section": ""
                    }
                ]
        }
    }

    return { pageScrollText: getScrollText() }
}