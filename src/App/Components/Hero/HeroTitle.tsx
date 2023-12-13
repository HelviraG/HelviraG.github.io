import React from 'react';
import { Typography } from '@mui/material';
import { PaletteKey, TitleBox, TitleWrapper } from '../../Styles/Components/HeroTitleStyle';

interface HeroTitleProps {
    quote: string;
    title: string;
    titleColor: PaletteKey
}

export const HeroTitle = ({ quote, title, titleColor }: HeroTitleProps) => {    
    return (
        <TitleWrapper>
            <TitleBox quote={quote} titleColor={titleColor}>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="h2">{title}</Typography>
            </TitleBox>
        </TitleWrapper>
    )
}