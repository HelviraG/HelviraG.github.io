import { AppChip } from "@component/Chip/Chip";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import { IPress } from "@resources/Pages/General/PressResource";
import {
  CardContentAction,
  CardContentButton,
  CardContentCaption,
  CardContentMedia,
  CardContentSubtitle,
  CardContentTitle,
  CardContentWrapper,
  CardWrapper,
} from "@styles/Components/List/ListItem";
import { ChipWrapper } from "@styles/Pages/ConferencesStyle";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const PressListItem = ({
  media,
  title,
  tags,
  imgUrl,
  lightColor,
  darkColor,
  link,
  writtenBy,
  caption,
}: IPress) => {
  const { t } = useTranslation('common');
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

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
              key={tag}
            />
          ))}
        </ChipWrapper>
        <CardContentSubtitle variant="caption">
          {writtenBy} | {media}
        </CardContentSubtitle>
        <CardContentTitle variant="h4">{title}</CardContentTitle>
        <CardContentCaption>{caption}</CardContentCaption>
        <CardContentAction>
          <CardContentButton href={link} startIcon={<FeedRoundedIcon />}>
            {t("actions.read_more")}
          </CardContentButton>
        </CardContentAction>
      </CardContentWrapper>
    </CardWrapper>
  );
};
