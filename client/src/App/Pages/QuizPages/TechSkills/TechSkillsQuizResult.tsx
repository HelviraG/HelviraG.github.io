import { useTranslation } from "react-i18next"
import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QuizResult } from "./Quiz/QuizResult";
import { listAnswers } from "@/Redux/Slices/TechSkillsQuizSlice";

export const TechSkillsQuizResult = ({ isTablet }: { isTablet: boolean }) => {
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
                    <QuizResult />
                    
                </Mobile>
            ) : (
                <Desktop withTopButton={false} withHeader={false} withFooter={false}>
                    <QuizResult />
                    
                </Desktop>
            )}
        </>
    );
}