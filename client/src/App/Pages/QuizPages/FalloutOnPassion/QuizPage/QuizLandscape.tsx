import { Desktop } from "@/App/Layout/Desktop/Desktop";
import { Mobile } from "@/App/Layout/Mobile/Mobile";
import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { useTranslation } from "react-i18next"
import { QuizGeneral } from "./QuizResult/QuizGeneral";

export const QuizLandScape = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation('common');

    useDocumentTitle(`Helvira Goma | 💓 ${t("menu.passion")}`);

    return (
       <>
         {isTablet ? (
            <Mobile withTopButton={false} withHeader={false} withFooter={false}>
              <QuizGeneral /> 
            </Mobile>
         ) : (
            <Desktop withTopButton={false} withHeader={false} withFooter={false}>
              <QuizGeneral />
            </Desktop>
         )}
       </>
     );
}