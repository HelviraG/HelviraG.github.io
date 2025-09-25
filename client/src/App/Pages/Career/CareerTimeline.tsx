import { AppChip } from "@component/Chip/Chip";
import { List, Typography } from "@mui/material";
import { Types } from "@resources/Enums/Types";
import {
  IExperience,
  ListExperiences,
} from "@resources/Pages/General/CareerResource";
import {
  ExperienceDivider,
  ExperienceDurationBox,
  ExperienceDurationLabel,
  ExperienceMission,
  ExperienceSubtitleBox,
  ExperienceTagWrapper,
  ExperienceTitle,
  ExperienceTitleBox,
  ListItemWrapper,
  ListWrapper,
} from "@styles/Pages/CareerStyle";
import React from "react";

export const CareerTimeline = () => {
  return (
    <ListWrapper>
      {ListExperiences().map((experience: IExperience) => (
        <ListItemWrapper
          isRight={experience.anchor === Types.RIGHT}
          key={experience.company}
        >
          <ExperienceDurationBox isRight={experience.anchor === Types.RIGHT}>
            <ExperienceDurationLabel component="span">
              {experience.time}
            </ExperienceDurationLabel>
          </ExperienceDurationBox>
          <ExperienceDivider />
          <ExperienceTitleBox isRight={experience.anchor === Types.RIGHT}>
            <ExperienceTitle variant="h4">
              {experience.position}
            </ExperienceTitle>

            <ExperienceSubtitleBox isRight={experience.anchor === Types.RIGHT}>
              <Typography variant="h6">{experience.company}</Typography>
              <AppChip
                chipBackground={experience.lightColor}
                chipBorder={experience.darkColor}
                chipColor={experience.darkColor}
                size="small"
                label={experience.duration}
                type={experience.duration}
              />
            </ExperienceSubtitleBox>

            <List>
              {experience.missions.map((mission, index) => (
                <ExperienceMission key={index}>{mission}</ExperienceMission>
              ))}
            </List>

            <ExperienceTagWrapper>
              {experience.technos.map((tag) => (
                <AppChip
                  chipBackground={experience.lightColor}
                  chipBorder={experience.darkColor}
                  chipColor={experience.darkColor}
                  size="small"
                  label={tag}
                  type={tag}
                  key={tag}
                />
              ))}
            </ExperienceTagWrapper>
          </ExperienceTitleBox>
        </ListItemWrapper>
      ))}
    </ListWrapper>
  );
};
