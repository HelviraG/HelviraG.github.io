import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { AnimatedTextBox, AnimatedTextTypography } from '../../Styles/Pages/HomeStyle';
import { useMediaQuery } from '@mui/material';

export const MainSection = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 425px)');

    return (           
        <AnimatedTextBox>
            <AnimatedTextTypography variant="h4">
                Helvira Goma
            </AnimatedTextTypography>
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
                    background: 'linear-gradient(120deg, #2E33DB, #6D74DB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                }} 
            />
        </AnimatedTextBox>
    )
}