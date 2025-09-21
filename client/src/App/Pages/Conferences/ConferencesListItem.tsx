import React, { useState } from 'react';
import { Typography } from '@mui/material';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { AppChip } from '../../Components/Chip/Chip';
import { IConference } from '../../Resources/ConferencesResource';
import { Tags } from '../../Resources/Enums/Tags';
import { 
    ChipWrapper, 
    ItemEventWrapper,
    EventDateWrapper,
    EventDateDay,
    EventDateMonth,
    EventLocationWrapper,
    EventBox,
    ItemEvent
} from '../../Styles/Pages/ConferencesStyle';
import { VideoDialog } from '../../Components/VideoDialog/VideoDialog';
import { useTranslation } from 'react-i18next';
import { CardContentAction, CardContentButton, CardContentMedia, CardContentSubtitle, CardContentTitle, CardContentWrapper, CardWrapper } from '../../Styles/Components/List/ListItem';

export const ConferencesListItem = ({ 
    year, 
    day, 
    month, 
    event, 
    title, 
    location, 
    tags, 
    imgUrl, 
    lightColor, 
    darkColor,
    link 
}: IConference) => {
    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const searchReplay = tags.filter((tag) => {
        return tag === Tags.REPLAY
    });

    const hasReplay = searchReplay.length > 0;

    const handleShowVideo = () => {
        setShowVideo(true);
    }

    const handleHideVideo = () => {
        setShowVideo(false);
    }

    return (
        <>
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
                        <AppChip size="small" label={year} type={Tags.YEAR} />
                    </ChipWrapper>
                    <CardContentSubtitle variant='caption'>{event}</CardContentSubtitle>
                    <EventBox>
                        <CardContentTitle variant='h4'>{title}</CardContentTitle>
                        <ItemEvent>
                            <ItemEventWrapper>
                                <EventDateWrapper darkColor={darkColor} lightColor={lightColor}>
                                    <EventDateDay component="span">{day}</EventDateDay>
                                    <EventDateMonth component="span">{month.slice(0, 3)}</EventDateMonth>
                                </EventDateWrapper>
                                <EventLocationWrapper>
                                    <MyLocationRoundedIcon fontSize='small' sx={{ color: 'text.disabled' }} />
                                    <Typography variant="caption" sx={{ lineHeight: 1.2 }}>{location}</Typography>
                                </EventLocationWrapper>
                            </ItemEventWrapper>
                        </ItemEvent>
                    </EventBox>
                    {hasReplay && (
                        <CardContentAction flexRight>
                            <CardContentButton onClick={handleShowVideo} startIcon={<VisibilityRoundedIcon />}>
                                {t('app.general.actions.watch')}
                            </CardContentButton>
                        </CardContentAction>
                    )}
                </CardContentWrapper>
            </CardWrapper>
            {link && showVideo && <VideoDialog title={title} open={showVideo} close={handleHideVideo} src={link} />}
        </>
    )
}