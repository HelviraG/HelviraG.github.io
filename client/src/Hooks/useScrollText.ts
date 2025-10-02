import { useLocation } from "react-router-dom";
import { Routes } from "@resources/Enums/Routes";
import { useTranslation } from "react-i18next";

export default function useScrollText() {
    const { t } = useTranslation();
    const pathname = useLocation().pathname;

    const getScrollText = () => {
        switch(pathname) {
            case Routes.HOME:
                return [
                    {
                        "first_section": t('app.scroll.home.first_section'),
                        "second_section": t('app.scroll.home.second_section'),
                        "third_section": t('app.scroll.home.third_section'),
                        "last_section": t('app.scroll.home.last_section')
                    }
                ];
            case Routes.CONFS:
                return [
                    {
                        "first_section": t('app.scroll.confs.first_section'),
                        "second_section": t('app.scroll.confs.second_section'),
                        "third_section": t('app.scroll.confs.third_section'),
                        "last_section": t('app.scroll.confs.last_section')
                    }
                ];
            case Routes.LIVE:
                return [
                    {
                        "first_section": t('app.scroll.lives.first_section'),
                        "second_section": t('app.scroll.lives.second_section'),
                        "third_section": t('app.scroll.lives.third_section'),
                        "last_section": t('app.scroll.lives.last_section')
                    }
                ];
            case Routes.PRESS:
                return [
                    {
                        "first_section": t('app.scroll.press.first_section'),
                        "second_section": t('app.scroll.press.second_section'),
                        "third_section": t('app.scroll.press.third_section'),
                        "last_section": t('app.scroll.press.last_section')
                    }
                ];
            case Routes.CAREER:
                return [
                    {
                        "first_section": t('app.scroll.career.first_section'),
                        "second_section": t('app.scroll.career.second_section'),
                        "third_section": t('app.scroll.career.third_section'),
                        "last_section": t('app.scroll.career.last_section')
                    }
                ];
            case Routes.EXPLORE:
                return [
                    {
                        "first_section": t('app.scroll.explore.first_section'),
                        "second_section": t('app.scroll.explore.second_section'),
                        "third_section": t('app.scroll.explore.third_section'),
                        "last_section": t('app.scroll.explore.last_section')
                    }
                ];
            case Routes.PASSION:
            case Routes.QUIZ:
            case Routes.QUIZ_INIT:
            case Routes.QUIZ_STEP:
                return [
                    {
                        "first_section": t('app.scroll.passion.first_section'),
                        "second_section": t('app.scroll.passion.second_section'),
                        "third_section": t('app.scroll.passion.third_section'),
                        "last_section": t('app.scroll.passion.last_section')
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