import React from 'react';
import { Mobile } from '../Layout/Mobile/Mobile';
import { Desktop } from '../Layout/Desktop/Desktop';
import { ConferencesList } from './Conferences/ConferencesList';
import { HeroTitle } from '../Components/Hero/HeroTitle';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export const Conferences = ({ isTablet }: { isTablet: boolean }) => {
    const { t } = useTranslation();

    useDocumentTitle(`Helvira Goma | ${t('app.menu.conferences')}`);
    
    return (
        <>
            {isTablet ? (
                <Mobile>
                    <HeroTitle quote={t('app.quotes.confs')} title={t('app.confs.title')} titleColor="primary" />
                    <ConferencesList />
                </Mobile>
            ) : (
                <Desktop>
                    <HeroTitle quote={t('app.quotes.confs')} title={t('app.confs.title')} titleColor="primary" />
                    <ConferencesList />
                </Desktop>
            )}
        </>
    )
}