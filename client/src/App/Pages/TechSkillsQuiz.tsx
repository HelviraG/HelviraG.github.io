import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";
import { BurnoutQuizStart } from "./QuizPages/BatteryLevel/BurnoutQuizStart";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { TechSkillsQuizStart } from "./QuizPages/TechSkills/TechSkillsQuizStart";

export const TechSkillsQuiz = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();
      
    useDocumentTitle(`Helvira Goma | 🧰​ ${t("app.menu.skills")}`);
    
    return (
        <>
            {isTablet ? (
                <Mobile withTopButton={false} withHeader={false} withFooter={false}>
                    <TechSkillsQuizStart />
                    
                </Mobile>
            ) : (
                <Desktop withTopButton={false} withHeader={false} withFooter={false}>
                    <TechSkillsQuizStart />
                    
                </Desktop>
            )}
        </>
    ); 
}