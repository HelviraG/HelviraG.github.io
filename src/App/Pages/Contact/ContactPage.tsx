import React from 'react';
import { ListTitleWrapper, ListWrapper } from '../../Styles/Components/List/List';
import { SubTitleTypography, TitleTypography, TitleWrapper } from '../../Styles/Layout/TitleStyle';
import { useTranslation } from 'react-i18next';
import { ContactForm } from './ContactForm';


export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <ListWrapper>
            <ListTitleWrapper>
                <TitleWrapper>
                    <TitleTypography variant='h3'>{t('app.contact.subtitle')}</TitleTypography>
                    <SubTitleTypography>{t('app.contact.description')}</SubTitleTypography>
                </TitleWrapper>
            </ListTitleWrapper>
            <ContactForm />
        </ListWrapper>
    )
}