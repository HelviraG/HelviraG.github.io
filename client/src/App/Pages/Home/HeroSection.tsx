import React from 'react';
import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { HomeCTA } from './HomeCTA';
import { 
    HelloPillBox, 
    HelloPillTitle, 
    HeroSectionAboveTypo, 
    HeroSectionBelowTypo, 
    HeroSectionBox, 
    HeroSectionDivider, 
    HeroSectionImageBox, 
    HeroSectionTextBox, 
    HeroSectionWrapper, 
    HomeCTAWrapper, 
    NameTitlePillBox 
} from '@/App/Styles/Pages/HomeStyle';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    const { t } = useTranslation();
    const isScreen = useMediaQuery('(max-width: 1024px)');

    return (
        <HeroSectionWrapper>
            <HeroSectionBox>
                <HeroSectionTextBox>
                    <HelloPillBox>
                        <HelloPillTitle>
                            <Typography variant="h6">Hello ✌️</Typography>
                        </HelloPillTitle>
                    </HelloPillBox>
                    <TypeAnimation 
                        sequence={[
                            t('app.home.main.animated.computer'),
                            1000,
                            t('app.home.main.animated.web'),
                            1000,
                            t('app.home.main.animated.speaker'),
                            1000,
                            t('app.home.main.animated.motivher'),
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        style={{ 
                            fontSize: isScreen ? '0.7em' : '1.1em',
                            background: 'linear-gradient(120deg, rgb(0 0 0), rgb(0 0 0))',
                            WebkitBackgroundClip: 'text',
                            textAlign: 'left',
                        }} 
                    />
                    <HeroSectionDivider />
                    <HeroSectionAboveTypo>
                        <Trans i18nKey="app.home.main.subtext.part_1" components={{ span: <span style={{ backgroundColor: "#cbef85", padding: "4px", borderRadius: "8px" }} /> }} />
                    </HeroSectionAboveTypo>
                    <HeroSectionBelowTypo>
                        <Trans i18nKey="app.home.main.subtext.part_2" components={{ span: <span style={{ backgroundColor: "#cbef85", padding: "4px", borderRadius: "8px" }} /> }} />
                    </HeroSectionBelowTypo>
                </HeroSectionTextBox>
                <HomeCTAWrapper>
                    <HomeCTA />
                </HomeCTAWrapper>
            </HeroSectionBox>
            <HeroSectionImageBox>
                <NameTitlePillBox>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>🦄 Helvira GOMA 🖲️</Typography>
                </NameTitlePillBox>
                <Box>
                    <CardMedia component="img" src="https://i.ibb.co/Psm5TnfS/Design-sans-titre-19-removebg-preview.png" />
                </Box>
            </HeroSectionImageBox>
        </HeroSectionWrapper>
    );
}