import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { QuizStartLayout } from "../Layout/QuizStartLayout";

export const BurnoutQuizStart = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <QuizStartLayout 
            backgroundImg="https://i.ibb.co/ptZtcQh/Copie-de-GIT-INIT-4.png" 
            title={`${t('app.explore.battery.title')}`}
            subText={`${t('app.explore.battery.quiz.subText')}`}
            caption={`${t('app.explore.skills.caption')}`}
            startRoute='/explore/burnout/1'
        />
    )
}