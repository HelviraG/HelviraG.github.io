import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mobile } from '../Layout/Mobile/Mobile';
import { Desktop } from '../Layout/Desktop/Desktop';
import { HeroTitle } from '../Components/Hero/HeroTitle';
import { PressList } from './Press/PressList';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export const Press = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | ${t('app.menu.press')}`);

    return (
        <>
            {isTablet ? (
                <Mobile>
                    <HeroTitle quote={t('app.quotes.press_title')} title={t('app.press.title')} titleColor="primary" />
                    <PressList />
                </Mobile>
            ) : (
                <Desktop>
                    <HeroTitle quote={t('app.quotes.press_title')} title={t('app.press.title')} titleColor="primary" />
                    <PressList />
                </Desktop>
            )}
        </>
    )
}