import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { QuizSteps } from "./Quiz/QuizSteps";
import { listAnswers } from "@/Redux/Slices/TechSkillsQuizSlice";

export const TechSkillsQuizSteps = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useDocumentTitle(`Helvira Goma | 🧰​ ${t("app.menu.skills")}`);

    useEffect(() => {
        dispatch(listAnswers());
    });

    return (
        <>
            {isTablet ? (
                <Mobile withTopButton={false} withHeader={false} withFooter={false}>
                    <QuizSteps />
                    
                </Mobile>
            ) : (
                <Desktop withTopButton={false} withHeader={false} withFooter={false}>
                    <QuizSteps />
                    
                </Desktop>
            )}
        </>
    );
}