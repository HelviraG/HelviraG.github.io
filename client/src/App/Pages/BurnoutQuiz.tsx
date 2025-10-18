import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";
import { BurnoutQuizStart } from "./QuizPages/BatteryLevel/BurnoutQuizStart";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";

export const BurnoutQuiz = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();
      
    useDocumentTitle(`Helvira Goma | 💓 ${t("app.menu.battery")}`);
    
    return (
        <>
            {isTablet ? (
                <Mobile withTopButton={false} withHeader={false} withFooter={false}>
                    <BurnoutQuizStart />
                    
                </Mobile>
            ) : (
                <Desktop withTopButton={false} withHeader={false} withFooter={false}>
                    <BurnoutQuizStart />
                    
                </Desktop>
            )}
        </>
    ); 
}