import React from 'react';
import { IPress } from '../../Resources/PressResource';
import { ChipWrapper } from '../../Styles/Pages/ConferencesStyle';
import { AppChip } from '../../Components/Chip/Chip';
import { CardContentSubtitle, CardContentButton, CardContentAction, CardContentCaption, CardContentTitle, CardContentWrapper, CardWrapper, CardContentMedia } from '../../Styles/Components/List/ListItem';
import { useTranslation } from 'react-i18next';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';

export const PressListItem = ({ 
    media, 
    mediaImg, 
    title, 
    tags, 
    imgUrl, 
    lightColor, 
    darkColor,
    link,
    writtenBy,
    caption
}: IPress) => {
    const { t } = useTranslation();

    return (
        <CardWrapper>
            <CardContentMedia imgUrl={imgUrl} />
            <CardContentWrapper>
                <ChipWrapper>
                    {tags.map((tag) => (
                        <AppChip 
                            chipBackground={lightColor}
                            chipBorder={darkColor}
                            chipColor={darkColor}
                            size="small" 
                            label={tag} 
                            type={tag} 
                            key={tag}
                        />
                    ))}
                </ChipWrapper>
                <CardContentSubtitle variant="caption">{writtenBy} | {media}</CardContentSubtitle>
                <CardContentTitle variant="h4">{title}</CardContentTitle>
                <CardContentCaption>{caption}</CardContentCaption>
                <CardContentAction>
                    <CardContentButton href={link} startIcon={<FeedRoundedIcon />}>
                        {t('app.general.actions.read_more')}
                    </CardContentButton>
                </CardContentAction>
            </CardContentWrapper>
        </CardWrapper>
    )
}