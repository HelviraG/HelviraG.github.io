import React from 'react';
import { Mobile } from '../Layout/Mobile/Mobile';
import { Desktop } from '../Layout/Desktop/Desktop';
import { HeroTitle } from '../Components/Hero/HeroTitle';
import { useTranslation } from 'react-i18next';
import { VideosList } from './Videos/VideosList';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export const Videos = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | ${t('app.menu.live')}`);
    
    return (
        <>
            {isTablet ? (
                <Mobile>
                    <HeroTitle quote={t('app.quotes.lives')} title={t('app.lives.title')} titleColor="primary" />
                    <VideosList />
                </Mobile>
            ) : (
                <Desktop>
                    <HeroTitle quote={t('app.quotes.lives')} title={t('app.lives.title')} titleColor="primary" />
                    <VideosList />
                </Desktop>
            )}
        </>
    )
}