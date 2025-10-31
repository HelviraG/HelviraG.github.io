import { Typography } from '@mui/material';
import { 
    AnimatedTitleBox,
    HeroTitleBox, 
    PaletteKey, 
    TitleBox, 
    TitleWrapper,
    SubTitle,
    SubTitleBox,
    HeroTitleWrapper
} from '@styles/Components/HeroTitleStyle';

interface HeroTitleProps {
    quote: string;
    title: string;
    titleColor?: PaletteKey
}

export const HeroTitle = ({ quote, title, titleColor }: HeroTitleProps) => {    
    return (
        <HeroTitleWrapper>
            <HeroTitleBox>
                <AnimatedTitleBox>
                    <TitleWrapper>
                        <TitleBox titleColor={titleColor}>
                            <Typography variant="h2">{title}</Typography>
                            <Typography variant="h2">{title}</Typography>
                        </TitleBox>
                    </TitleWrapper>
                    <SubTitleBox noPadding={quote.length === 0}>
                        <SubTitle variant="body1">{quote}</SubTitle>
                    </SubTitleBox>
                </AnimatedTitleBox>
            </HeroTitleBox>
        </HeroTitleWrapper>
    )
}