import { AppChip } from "@component/Chip/Chip";
import { VideoDialog } from "@component/VideoDialog/VideoDialog";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { AccordionDetails, Box, IconButton, Typography } from "@mui/material";
import { Tags } from "@resources/Enums/Tags";
import {
  IConference,
  IEvent,
} from "@resources/Pages/General/ConferencesResource";
import {
  CardContentAction,
  CardContentButton,
  CardContentTitle,
  CardContentWrapper,
  CardWrapper,
} from "@styles/Components/List/ListItem";
import {
  CardEvent,
  CardEventDetailHeader,
  CardEventMedia,
  ChipWrapper,
  ConferenceCardBody,
  ConferenceCardHeader,
  ConferenceCardWrapper,
  EventBox,
  EventDateDay,
  EventDateMonth,
  EventDateWrapper,
  EventLocationWrapper,
  ItemEvent,
  ItemEventWrapper,
} from "@styles/Pages/ConferencesStyle";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ConferencesListItem = ({
  cover,
  title,
  events,
  lang,
  value,
}: { value?: string } & IConference) => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const hasTag = lang === value;

  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleHideVideo = () => {
    setShowVideo(false);
  };

  const handleViewResources = (url: string | undefined) => {
    window.open(`${url}`, "_blank", "rel=noopener noreferrer");
  };

  return (
    <CardWrapper
      role="tabpanel"
      hidden={!hasTag && value !== Tags.ALL}
      isConference
    >
      <CardEventMedia imgUrl={cover} />
      <ConferenceCardWrapper>
        <ConferenceCardHeader isConference>
          <CardContentTitle variant="h4" isConference>
            {lang === "EN" ? '🇺🇸' : '🇫🇷'} {title}
          </CardContentTitle>
        </ConferenceCardHeader>
        <ConferenceCardBody>
          {events &&
            events.map((event: IEvent, index) => (
              <CardEvent
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                key={event.event}
              >
                <CardEventDetailHeader
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Box className={"accordion-summary-box"}>
                    <Box className={"accordion-summary-box-item1"}>
                      <AppChip
                        chipBackground={""}
                        chipBorder={""}
                        chipColor={""}
                        size="small"
                        label={event.year}
                        type={Tags.YEAR}
                        key={event.tags[0]}
                      />
                    </Box>
                    <Box className={"accordion-summary-box-item2"}>
                      <Box>
                        <Typography>{event.event}</Typography>
                      </Box>
                      <Box className={"accordion-summary-box-item2-actions"}>
                        {event.link && (
                          <IconButton onClick={handleShowVideo}>
                            <VisibilityRoundedIcon
                              fontSize={"small"}
                              color={"error"}
                            />
                          </IconButton>
                        )}
                        {event.githubLink && (
                          <IconButton
                            onClick={() =>
                              handleViewResources(event.githubLink)
                            }
                          >
                            <MenuBookIcon
                              fontSize={"small"}
                              color={"primary"}
                            />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </CardEventDetailHeader>
                <AccordionDetails
                  sx={{
                    alignItems: "baseline",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <EventLocationWrapper>
                      <MyLocationRoundedIcon
                        fontSize="small"
                        sx={{ color: "text.disabled" }}
                      />
                      <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                        {event.location}
                      </Typography>
                    </EventLocationWrapper>
                    <ChipWrapper sx={{ marginTop: "10px" }}>
                      {event.tags.map((tag) => (
                        <AppChip
                          chipBackground={event.lightColor}
                          chipBorder={event.darkColor}
                          chipColor={event.darkColor}
                          size="small"
                          label={tag}
                          type={tag}
                          key={tag}
                        />
                      ))}
                    </ChipWrapper>
                    {event.githubLink && (
                      <CardContentWrapper isConference>
                        <CardContentAction flexRight>
                          <CardContentButton
                            onClick={() =>
                              handleViewResources(event.githubLink)
                            }
                            startIcon={<MenuBookIcon />}
                          >
                            {t("app.general.actions.resources")}
                          </CardContentButton>
                        </CardContentAction>
                      </CardContentWrapper>
                    )}
                    {event.link && (
                      <>
                        <CardContentWrapper isConference>
                          <CardContentAction flexRight>
                            <CardContentButton
                              onClick={handleShowVideo}
                              startIcon={<VisibilityRoundedIcon />}
                            >
                              {t("app.general.actions.watch")}
                            </CardContentButton>
                          </CardContentAction>
                        </CardContentWrapper>
                        <VideoDialog
                          title={title}
                          open={showVideo}
                          close={handleHideVideo}
                          src={event.link}
                        />
                      </>
                    )}
                  </Box>
                  <EventBox isConference>
                    <ItemEvent isConference>
                      <ItemEventWrapper>
                        <EventDateWrapper
                          darkColor={event.darkColor}
                          lightColor={event.lightColor}
                        >
                          <EventDateDay component="span">
                            {event.day}
                          </EventDateDay>
                          <EventDateMonth component="span">
                            {event.month.slice(0, 3)}
                          </EventDateMonth>
                        </EventDateWrapper>
                      </ItemEventWrapper>
                    </ItemEvent>
                  </EventBox>
                </AccordionDetails>
              </CardEvent>
            ))}
        </ConferenceCardBody>
      </ConferenceCardWrapper>
    </CardWrapper>
  );
};
