import {Box, BoxProps, Button, ButtonProps, styled, Typography, TypographyProps} from "@mui/material";

interface StartButtonProps extends ButtonProps {
    isInitPrompt?: boolean;
}

interface ButtonBoxProps extends BoxProps {
    isInitPrompt?: boolean;
}

interface ButtonTypoProps extends TypographyProps {
    isInitPrompt?: boolean;
}

export const StartButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<StartButtonProps>(({ isInitPrompt, theme}) => ({
    width: '250px',
    height: '53px',
    flexShrink: 0,
    borderRadius: '17px',
    background: '#000',
    position: 'relative',

    [theme.breakpoints.down(1030)]: {
        width: '158px',
        height: '52px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    ...(isInitPrompt && {
        width: '186px'
    })
}));

export const BackgroundStartInnerBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonBoxProps>(({ isInitPrompt, theme}) => ({
    width: '250px',
    height: '53px',
    flexShrink: 0,
    overflow: 'hidden',
    textAlign: 'center',
    position: 'absolute',
    borderRadius: '17px',
    top: 0,
    right: 0,
    boxShadow: '0px 4px 0.9px 0px rgba(255, 255, 255, 0.50) inset',
    background: '#000',

    [theme.breakpoints.down(1030)]: {
        width: '158px',
        height: '52px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    ...(isInitPrompt && {
        width: '186px'
    })
}));

export const BackgroundStartSecondInnerBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonBoxProps>(({ isInitPrompt, theme}) => ({
    width: '250px',
    height: '53px',
    borderRadius: '17px',
    background: '#000',

    [theme.breakpoints.down(1030)]: {
        width: '158px',
        height: '52px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    ...(isInitPrompt && {
        width: '186px'
    })
}));

export const BackgroundStartThirdInnerBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonBoxProps>(({ isInitPrompt, theme}) => ({
    width: '250px',
    height: '53px',
    flexShrink: 0,
    borderRadius: '17px 17px 0px 0px',
    background: '#000',

    [theme.breakpoints.down(1030)]: {
        width: '158px',
        height: '30px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    ...(isInitPrompt && {
        width: '186px'
    })
}));

export const BackgroundStartTypo = styled(Typography, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonTypoProps>(({ isInitPrompt, theme}) => ({
    color: '#fff',
    paddingTop: '10px',
    webkitTextStrokeWidth: '0.5837001204490662',
    webkitTextStrokeColor: '#000',
    fontFamily: "Lilita One",
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    background: 'linear-gradient(180deg, #FFF 30.82%, #FFB672 86.99%)',
    backgroundClip: 'text',
    webkitTextFillColor: 'transparent',

    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        textShadow: '0px 3.339px 0px #723400',
    },

    [theme.breakpoints.between('md', 768)]: {
        fontSize: '20px'
    },

    [theme.breakpoints.between(768, 1030)]: {
        width: '158px',
        height: '52px',
        fontSize: '20px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    ...(isInitPrompt && {
        background: 'linear-gradient(180deg, #FFF 30.82%, #009432 86.99%)',
        fontSize: '27px'
    })
}));

export const ForegroundStartBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonBoxProps>(({ isInitPrompt, theme}) => ({
    width: '250px',
    height: '53px',
    borderRadius: '17px',
    background: '#B0DF81',
    border: '1px solid #93BA6F',
    zIndex: 99999999,
    mask: 'url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png")',
    maskSize: '3000% 100%',
    animation: 'ani2 .7s steps(22) forwards',

    [theme.breakpoints.down(1030)]: {
        width: '158px',
        height: '52px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    '&:hover': {
        animation: 'ani .7s steps(22) forwards',
        backgroundColor: 'black',
    },

    ...(isInitPrompt && {
        width: '186px',
        background: '#B0DF81',
    }),

    "@keyframes ani": {
        "from": {
            maskPosition: '0 0',
        },
        "to": {
            maskPosition: '100% 0',
        }
    },

    "@keyframes ani2": {
        "from": {
            maskPosition: '100% 0',
        },
        "to": {
            maskPosition: '0 0',
        }
    },
}));

export const ForegroundStartInnerBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonBoxProps>(({ isInitPrompt, theme}) => ({
    width: '250px',
    height: '32px',
    flexShrink: 0,
    borderRadius: '17px 17px 0px 0px',
    background: '#B0DF81',

    [theme.breakpoints.down(1030)]: {
        width: '158px',
        height: '30px'
    },

    [theme.breakpoints.down('md')]: {
        width: '-webkit-fill-available',
        height: '45px'
    },

    [theme.breakpoints.up(2400)]: {
        width: '314px',
        height: '53px'
    },

    ...(isInitPrompt && {
        width: '186px'
    })
}));

export const ForegroundStartTypo = styled(Typography, {
    shouldForwardProp: (prop) => prop !== "isInitPrompt"
})<ButtonTypoProps>(({ isInitPrompt, theme}) => ({
    color: '#eccc68',
    paddingTop: '10px',
    webkitTextStrokeWidth: '0.5837001204490662',
    webkitTextStrokeColor: '#000',
    fontFamily: "Lilita One",
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    background: '#B0DF81',
    backgroundClip: 'text',
    webkitTextFillColor: 'transparent',

    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },

    [theme.breakpoints.between('md',1030)]: {
        fontSize: '20px'
    },

    ...(isInitPrompt && {
        background: '#B0DF81',
        fontSize: '27px',
        color: '#009432',
    })
}));