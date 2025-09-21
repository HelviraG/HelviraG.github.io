import React from 'react';
import { ListItemsWrapper, ListTitleWrapper, ListWrapper } from '../../Styles/Components/List/List';
import { SubTitleTypography, TitleTypography, TitleWrapper } from '../../Styles/Layout/TitleStyle';
import { useTranslation } from 'react-i18next';
import { IPress, ListPressArticles } from '../../Resources/PressResource';
import { PressListItem } from './PressListItem';

export const PressList = () => {
    const { t } = useTranslation();

    return (
        <ListWrapper>
            <ListTitleWrapper>
                <TitleWrapper>
                    <TitleTypography variant='h3'>{t('app.press.subtitle')}</TitleTypography>
                    <SubTitleTypography>{t('app.press.description')}</SubTitleTypography>
                </TitleWrapper>
            </ListTitleWrapper>
            <ListItemsWrapper className="press-list">
                {ListPressArticles().map((article: IPress) => (
                    <PressListItem {...article} key={`${article.title}`} />
                ))}
            </ListItemsWrapper>
        </ListWrapper>
    )
}