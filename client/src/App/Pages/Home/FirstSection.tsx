import { Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import { SubTitle } from '@resources/Enums/Images';
import {
    FirstSectionLeftBox,
    FirstSectionRightBox,
    HomeFirstSectionBox,
    RightSideAboveImageBox,
    RightSideBelowImageBox,
    RightSideTitleBox,
    RightSideTitleWrapper
} from '@styles/Pages/HomeStyle';

export const FirstSection = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 425px)');

    return (
        <HomeFirstSectionBox>
            <FirstSectionLeftBox>
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
                        fontSize: isMobile ? '1.5rem' : '2.125rem',     
                        background: 'linear-gradient(120deg, rgb(0 0 0), rgb(0 0 0))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', 
                        position: 'absolute',
                        bottom:'122px',
                        left: 0,
                        right: 0,
                        textAlign: 'center'
                    }} 
                />
                <img src={SubTitle.SPEAKER} alt="speaker megaphone" />
            </FirstSectionLeftBox>
            <FirstSectionRightBox>
                <RightSideAboveImageBox></RightSideAboveImageBox>
                <RightSideTitleWrapper>
                    <RightSideTitleBox>
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>🦄 Helvira GOMA 🖲️</Typography>
                    </RightSideTitleBox>
                </RightSideTitleWrapper>
                <RightSideBelowImageBox></RightSideBelowImageBox>
            </FirstSectionRightBox>         
        </HomeFirstSectionBox>
    )
}