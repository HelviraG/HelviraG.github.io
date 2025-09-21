import { Typography } from '@mui/material';
import {
    BelowBoxFirstSection,
    BelowBoxSecondSection,
    HomeSecondSectionBox,
    InnerMiddleBox,
    SecondSectionAboveBox,
    SecondSectionBelowBox,
    SecondSectionLeftBox,
    SecondSectionMiddleBox,
    SecondSectionRightBelowBox,
    SecondSectionRightBox
} from '@styles/Pages/HomeStyle';
import { HomeCTA } from './HomeCTA';
import { WelcomeSection } from './WelcomeSection';

export const SecondSection = () => {
    return (
        <HomeSecondSectionBox>
            <SecondSectionLeftBox>
                <SecondSectionAboveBox></SecondSectionAboveBox>
                <SecondSectionMiddleBox>
                    <InnerMiddleBox>
                        <Typography variant="h6">Welcome ✌️</Typography>
                    </InnerMiddleBox>
                </SecondSectionMiddleBox>
                <SecondSectionBelowBox></SecondSectionBelowBox>
            </SecondSectionLeftBox>   
            <SecondSectionRightBox>
                <WelcomeSection />
                <HomeCTA />
                <SecondSectionRightBelowBox>
                    <BelowBoxFirstSection></BelowBoxFirstSection>
                    <BelowBoxSecondSection></BelowBoxSecondSection>
                </SecondSectionRightBelowBox>
            </SecondSectionRightBox>
        </HomeSecondSectionBox>
    )
}
