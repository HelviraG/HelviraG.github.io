import useDocumentTitle from "@/Hooks/useDocumentTitle";
import { Mobile } from "../../Layout/Mobile/Mobile";
import { Desktop } from "../../Layout/Desktop/Desktop";
import { BuyCoffeeLink } from "../../Components/Link/BuyCoffeeLink";
import { NotFound } from "./NotFound";

export const NotFoundPage = ({ isTablet }: { isTablet: boolean }) => {
    useDocumentTitle('Helvira Goma | ​👀 Oopsie!')
    
    return (
        <>
            {isTablet ? (
                <Mobile>
                    <NotFound />
                </Mobile>
            ) : (
                <Desktop>
                    <NotFound />
                </Desktop>
            )}
        </>
    );
}