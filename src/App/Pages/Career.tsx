import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mobile } from '../Layout/Mobile/Mobile';
import { Desktop } from '../Layout/Desktop/Desktop';
import { HeroTitle } from '../Components/Hero/HeroTitle';
import { CareerPage } from './Career/CareerPage';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export const Career = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | ${t('app.menu.career')}`);
    
    return (
        <>
            {isTablet ? (
                <Mobile>
                    <HeroTitle quote="" title={t('app.career.title')} titleColor="secondary" />
                    <CareerPage />
                </Mobile>
            ) : (
                <Desktop>
                    <HeroTitle quote="" title={t('app.career.title')} titleColor="secondary" />
                    <CareerPage />
                </Desktop>
            )}
        </>
    )
}