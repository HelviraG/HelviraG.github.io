import React, { useState } from 'react';
import { ChipWrapper } from '../../Styles/Pages/ConferencesStyle';
import { ILive } from '../../Resources/VideosResource';
import { AppChip } from '../../Components/Chip/Chip';
import { VideoDialog } from '../../Components/VideoDialog/VideoDialog';
import PlayCircleuOtlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { useTranslation } from 'react-i18next';
import { 
    CardContentSubtitle, 
    CardContentButton, 
    CardContentAction, 
    CardContentTitle, 
    CardContentWrapper, 
    CardWrapper, 
    CardContentMedia 
} from '../../Styles/Components/List/ListItem';

interface LiveItemProps {
    index?: number;
    value?: string;
}

export const VideosListItem = ({ 
    channel,
    channelImg, 
    title, 
    tags, 
    imgUrl, 
    lightColor, 
    darkColor,
    link,
    value
}: ILive & LiveItemProps) => {
    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const hasTag = tags.filter((tag) => tag === value).length > 0;

    const handleShowVideo = () => {
        setShowVideo(true);
    }

    const handleHideVideo = () => {
        setShowVideo(false);
    }

    return (
        <CardWrapper role="tabpanel" hidden={!hasTag}>
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
                <CardContentSubtitle variant='caption'>{channel}</CardContentSubtitle>
                <CardContentTitle variant="h4">{title}</CardContentTitle>
                <CardContentAction>
                    <CardContentButton onClick={handleShowVideo} startIcon={<PlayCircleuOtlineRoundedIcon />}>
                        {t('app.general.actions.watch')}
                    </CardContentButton>
                </CardContentAction>
            </CardContentWrapper>
            {link && showVideo && <VideoDialog title={title} open={showVideo} close={handleHideVideo} src={link} />}
        </CardWrapper>
    )
}