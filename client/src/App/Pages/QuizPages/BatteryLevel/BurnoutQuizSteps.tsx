import { useTranslation } from "react-i18next"
import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { QuizSteps } from "./Quiz/QuizSteps";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listAnswers } from "@/Redux/Slices/BurnoutQuizSlice";

export const BurnoutQuizSteps = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useDocumentTitle(`Helvira Goma | 💓 ${t("app.menu.battery")}`);

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