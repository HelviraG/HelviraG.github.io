import React from 'react';
import { useTranslation } from 'react-i18next';
import { ConferencesListItem } from './ConferencesListItem';
import { ListConferences, IConference } from '../../Resources/ConferencesResource';
import { ListItemsWrapper, ListTitleWrapper, ListWrapper } from '../../Styles/Components/List/List';
import { SubTitleTypography, TitleTypography, TitleWrapper } from '../../Styles/Layout/TitleStyle';

export const ConferencesList = () => {
    const { t } = useTranslation();

    return (
        <ListWrapper>
            <ListTitleWrapper>
                <TitleWrapper>
                    <TitleTypography variant="h3">{t('app.confs.subtitle')}</TitleTypography>
                </TitleWrapper>
                <SubTitleTypography>{t('app.confs.description')}</SubTitleTypography>
            </ListTitleWrapper>
            <ListItemsWrapper>
                {ListConferences().map((conference: IConference) => (
                    <ConferencesListItem {...conference} key={`${conference.month}-${conference.day}`} />
                ))}
            </ListItemsWrapper>
        </ListWrapper>
    )
}