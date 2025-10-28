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
import React, { useEffect, useRef, useState } from "react";
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
  const { t } = useTranslation('common');
  const [showVideo, setShowVideo] = useState(false);
  const hasTag = tags.filter((tag) => tag === value).length > 0;
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleHideVideo = () => {
    setShowVideo(false);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (itemRef.current) {
            observer.unobserve(itemRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  

  return (
    <CardWrapper
      ref={itemRef}
      role="tabpanel" hidden={!hasTag}
       sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
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
            {t("actions.watch")}
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
