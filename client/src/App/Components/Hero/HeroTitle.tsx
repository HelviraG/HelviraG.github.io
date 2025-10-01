import { Typography } from '@mui/material';
import { 
    AnimatedTitleBox,
    HeroImgBox,
    HeroTitleBox, 
    PaletteKey, 
    TitleBox, 
    TitleWrapper,
    SubTitle,
    SubTitleBox,
    SubTiTleDivider,
    HeroTitleWrapper
} from '@styles/Components/HeroTitleStyle';

interface HeroTitleProps {
    imgUrl: string;
    quote: string;
    title: string;
    titleColor?: PaletteKey
}

export const HeroTitle = ({ imgUrl, quote, title, titleColor }: HeroTitleProps) => {    
    return (
        <HeroTitleWrapper>
            <HeroTitleBox>
                <HeroImgBox imgUrl={imgUrl}></HeroImgBox>
                <AnimatedTitleBox>
                    <TitleWrapper>
                        <TitleBox titleColor={titleColor}>
                            <Typography variant="h2">{title}</Typography>
                            <Typography variant="h2">{title}</Typography>
                        </TitleBox>
                    </TitleWrapper>
                    <SubTitleBox>
                        <SubTiTleDivider orientation="horizontal" variant="middle" />
                        <SubTitle variant="body1">{quote}</SubTitle>
                    </SubTitleBox>
                </AnimatedTitleBox>
            </HeroTitleBox>
        </HeroTitleWrapper>
    )
}