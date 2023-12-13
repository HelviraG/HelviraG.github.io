import React from 'react';
import { Mobile } from '../Layout/Mobile/Mobile';
import { Desktop } from '../Layout/Desktop/Desktop';
import { HeroTitle } from '../Components/Hero/HeroTitle';
import { useTranslation } from 'react-i18next';
import { ContactPage } from './Contact/ContactPage';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export const Contact = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | ${t('app.menu.contact')}`);
    
    return (
        <>
            {isTablet ? (
                <Mobile>
                    <HeroTitle quote={t('app.quotes.press_title')} title={t('app.contact.title')} titleColor="primary" />
                    <ContactPage />
                </Mobile>
            ) : (
                <Desktop>
                    <HeroTitle quote={t('app.quotes.press_title')} title={t('app.contact.title')} titleColor="primary" />
                    <ContactPage />
                </Desktop>
            )}
        </>
    )
}