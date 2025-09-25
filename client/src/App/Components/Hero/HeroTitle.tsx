import { Box, Typography } from '@mui/material';
import { 
    AnimatedTitleBox,
    HeroImgBox,
    HeroTitleBox, 
    PaletteKey, 
    TitleBox, 
    TitleWrapper,
    SubTitle,
    SubTitleBox,
    SubTiTleDivider
} from '@styles/Components/HeroTitleStyle';

interface HeroTitleProps {
    imgUrl: string;
    quote: string;
    title: string;
    titleColor?: PaletteKey
}

export const HeroTitle = ({ imgUrl, quote, title, titleColor }: HeroTitleProps) => {    
    return (
        <Box sx={{ backgroundColor: '#00c79a', padding: '7em 0' }}>
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
        </Box>
    )
}