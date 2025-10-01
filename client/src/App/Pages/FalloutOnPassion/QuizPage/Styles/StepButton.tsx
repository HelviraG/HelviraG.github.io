import { Box, BoxProps, Button, ButtonProps, styled, Typography } from "@mui/material";

interface StepButtonProps extends ButtonProps {
    isClicking?: boolean;
    isSaved?: boolean;
}

interface StepButtonBoxProps extends BoxProps {
    isClicking?: boolean;
    isSaved?: boolean;
}

export const StepButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "isClicking" && prop !== "isSaved"
})<StepButtonProps>(({ isClicking, isSaved, theme}) => ({
    width: '64px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '14px',
    position: 'relative',

    '&.active': {
        ...(isClicking && {
            background: '#000',
        }),
    },

    ...(isSaved && {
        background: '#000',
    }),

    [theme.breakpoints.down('lg')]: {
        padding: '14px',
    },

    [theme.breakpoints.down(800)]: {
        height: '66px',
    },

    [theme.breakpoints.up(783)]: {
        padding: '32px 30px'
    }
}));

export const BackgroundStepInnerBox = styled(Box)(({ theme}) => ({
    width: '64px',
    height: '50px',
    flexShrink: 0,
    overflow: 'hidden',
    textAlign: 'center',
    position: 'absolute',
    borderRadius: '17px',
    top: 0,
    right: 0,
    background: '#000',
    color: theme.palette.background.paper,

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    },

    [theme.breakpoints.down(800)]: {
        height: '66px',
    },
}));

export const BackgroundStepSecondInnerBox = styled(Box)(({ theme}) => ({
    width: '64px',
    height: '50px',
    borderRadius: '17px',
    background: '#000',
    color: theme.palette.background.paper,

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    },

    [theme.breakpoints.down(800)]: {
        height: '66px',
    },
}));

export const BackgroundStepThirdInnerBox = styled(Box)(({ theme}) => ({
    width: '64px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '17px 17px 0px 0px',
    background: '#000',
    color: '#FFF',

    [theme.breakpoints.up(783)]: {
        width: '64px',
    },

    [theme.breakpoints.down(800)]: {
        height: '66px',
    },
}));

export const BackgroundStepTypo = styled(Typography)(({ theme}) => ({
    webkitTextStrokeWidth: '0.5837001204490662',
    webkitTextStrokeColor: '#000',
    fontFamily: "Lilita One",
    fontSize: '27px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    background: '#000',
    backgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    color: theme.palette.background.paper,

    [theme.breakpoints.down('md')]: {
        fontSize: '20px'
    },
}));

export const ForegroundStepBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isClicking" && prop !== "isSaved"
})<StepButtonBoxProps>(({ isClicking, isSaved, theme}) => ({
    width: '64px',
    height: '50px',
    borderRadius: '17px',
    background: '#B0DF81',
    zIndex: 99999999,
    mask: 'url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png")',
    maskSize: '3000% 100%',
    animation: 'ani2 .7s steps(22) forwards',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    },

    [theme.breakpoints.down(800)]: {
        height: '66px',
    },

    '&.active': {
        ...(isClicking && {
            background: '#000',
            color: theme.palette.background.paper
        }),
    },

    ...(isSaved && {
        background: '#000',
        color: theme.palette.background.paper
    }),

    '&:hover': {
        animation: 'ani .7s steps(22) forwards',
        backgroundColor: '#B8E986',
        color: theme.palette.background.paper
    },

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

export const ForegroundStepInnerBox = styled(Box)(({ theme}) => ({
    width: '64px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '17px 17px 0px 0px',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    },

    [theme.breakpoints.down(800)]: {
        height: '66px',
    },
}));

export const ForegroundStepTypo = styled(Typography)(({ theme}) => ({
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
        fontSize: '20px'
    },
}));