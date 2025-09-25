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
import React from "react";
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
  const { t } = useTranslation();

  return (
    <CardWrapper>
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
            {t("app.general.actions.read_more")}
          </CardContentButton>
        </CardContentAction>
      </CardContentWrapper>
    </CardWrapper>
  );
};
