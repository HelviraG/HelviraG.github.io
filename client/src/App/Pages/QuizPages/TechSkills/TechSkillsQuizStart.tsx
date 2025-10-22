import { useTranslation } from "react-i18next"
import { QuizStartLayout } from "../Layout/QuizStartLayout";
import useDocumentTitle from "@/Hooks/useDocumentTitle";

export const TechSkillsQuizStart = () => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | 🧰​ ${t("app.menu.skills")}`);

    return (
        <QuizStartLayout 
            backgroundImg="https://i.ibb.co/N6Px668F/Copie-de-GIT-INIT-9.png" 
            iconImg="https://i.ibb.co/LXkXC28P/Copie-de-GIT-INIT-13-removebg-preview.png"
            title={`${t('app.explore.skills.title')}`}
            subText={`${t('app.explore.skills.quiz.subText')}`}
            caption={`${t('app.explore.skills.caption')}`}
            startRoute="/explore/skills/1"
        />
    )
}