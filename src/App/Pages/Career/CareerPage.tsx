import React from 'react';
import { ListTitleWrapper, ListWrapper } from '../../Styles/Components/List/List';
import { SubTitleTypography, TitleTypography, TitleWrapper } from '../../Styles/Layout/TitleStyle';
import { useTranslation } from 'react-i18next';
import { CareerTimeline } from './CareerTimeline';

export const CareerPage = () => {
    const { t } = useTranslation();

    return (
        <ListWrapper>
            <ListTitleWrapper>
                <TitleWrapper>
                    <TitleTypography variant='h3'>{t('app.career.subtitle')}</TitleTypography>
                    <SubTitleTypography>{t('app.career.description')}</SubTitleTypography>
                </TitleWrapper>
            </ListTitleWrapper>
            <CareerTimeline />
        </ListWrapper>
    )
}