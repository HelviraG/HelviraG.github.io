import React from 'react';
import { Mobile } from '../Layout/Mobile/Mobile';
import { MainSection } from './Home/MainSection';
import { Desktop } from '../Layout/Desktop/Desktop';
import { Masonry } from './Home/MasonryImageList';
import { Box } from '@mui/material';
import { WelcomeSection } from './Home/WelcomeSection';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export const Home = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | ${t('app.menu.home')}`);

    return (
        <>
            {isTablet ? (
                <Mobile>
                    <MainSection />
                    <Masonry />
                    <WelcomeSection />
                    <Masonry />
                </Mobile>
            ) : (
                <Desktop>
                    <MainSection />
                    <Box sx={(theme) => ({
                        [theme.breakpoints.up('xl')]: {
                            margin: '0 auto',
                            maxWidth: '80%'
                        },
                    })}>
                        <Masonry />
                        <WelcomeSection />
                        <Masonry />
                    </Box>
                </Desktop>
            )}
        </>
    )
}