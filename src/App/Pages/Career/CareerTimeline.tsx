import React from 'react';
import { Box, List, Typography } from '@mui/material';
import { AppChip } from '../../Components/Chip/Chip';
import { ExperienceDivider, ExperienceDurationBox, ExperienceDurationLabel, ExperienceMission, ExperienceTitle, ExperienceTitleBox, ListItemWrapper, ListWrapper } from '../../Styles/Pages/CareerStyle';
import { IExperience, ListExperiences } from '../../Resources/CareerResource';

export const CareerTimeline = () => {
    return (
        <ListWrapper>
            {ListExperiences().map((experience: IExperience) => (
                <ListItemWrapper isRight={experience.anchor === 'right'}>
                    <ExperienceDurationBox isRight={experience.anchor === 'right'}>
                        <ExperienceDurationLabel component="span">
                            {experience.time}
                        </ExperienceDurationLabel>
                    </ExperienceDurationBox>
                    <ExperienceDivider />
                    <ExperienceTitleBox isRight={experience.anchor === 'right'}>
                        <ExperienceTitle variant='h4'>{experience.position}</ExperienceTitle>
                        <Typography variant='h6'>{experience.company}</Typography>
                        
                        <List>
                            {experience.missions.map((mission, index) => (
                                <ExperienceMission key={index}>{mission}</ExperienceMission>
                            ))}
                        </List>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
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
                        </Box>
                    </ExperienceTitleBox>
                </ListItemWrapper>
            ))}
        </ListWrapper>
    )
}