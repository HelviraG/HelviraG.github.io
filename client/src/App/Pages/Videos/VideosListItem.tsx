import { AppChip } from "@component/Chip/Chip";
import { VideoDialog } from "@component/VideoDialog/VideoDialog";
import PlayCircleuOtlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { ILive } from "@resources/Pages/General/VideosResource";
import {
  CardContentAction,
  CardContentButton,
  CardContentMedia,
  CardContentSubtitle,
  CardContentTitle,
  CardContentWrapper,
  CardWrapper,
} from "@styles/Components/List/ListItem";
import { ChipWrapper } from "@styles/Pages/ConferencesStyle";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface LiveItemProps {
  index?: number;
  value?: string;
}

export const VideosListItem = ({
  channel,
  title,
  tags,
  imgUrl,
  lightColor,
  darkColor,
  link,
  value,
}: ILive & LiveItemProps) => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const hasTag = tags.filter((tag) => tag === value).length > 0;

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleHideVideo = () => {
    setShowVideo(false);
  };

  return (
    <CardWrapper role="tabpanel" hidden={!hasTag}>
      <CardContentMedia component={"span"} imgUrl={imgUrl} />
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
              key={`${tag}--${tag}`}
            />
          ))}
        </ChipWrapper>
        <CardContentSubtitle variant="caption">{channel}</CardContentSubtitle>
        <CardContentTitle variant="h4">{title}</CardContentTitle>
        <CardContentAction>
          <CardContentButton
            onClick={handleShowVideo}
            startIcon={<PlayCircleuOtlineRoundedIcon />}
          >
            {t("app.general.actions.watch")}
          </CardContentButton>
        </CardContentAction>
      </CardContentWrapper>
      {link && showVideo && (
        <VideoDialog
          title={title}
          open={showVideo}
          close={handleHideVideo}
          src={link}
        />
      )}
    </CardWrapper>
  );
};
