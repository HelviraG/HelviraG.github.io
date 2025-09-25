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
    background: `linear-gradient(180deg, #B67800 55.86%, ${theme.game.purple.dark} 100%)`,
    position: 'relative',

    '&.active': {
        ...(isClicking && {
            background: `linear-gradient(180deg, ${theme.game.special.red} 55.86%, ${theme.game.special.orange} 100%)`,
        }),
    },

    ...(isSaved && {
        background: `linear-gradient(180deg, ${theme.game.special.red} 55.86%, ${theme.game.special.orange} 100%)`,
    }),

    [theme.breakpoints.down('lg')]: {
        padding: '14px',
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
    boxShadow: '0px 4px 0.9px 0px rgba(255, 255, 255, 0.50) inset',
    background: 'linear-gradient(180deg, #3C40C6 55.86%, #0FBCf9 100%)',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    },
}));

export const BackgroundStepSecondInnerBox = styled(Box)(({ theme}) => ({
    width: '64px',
    height: '50px',
    borderRadius: '17px',
    background: 'linear-gradient(180deg, #3C40C6 55.86%, #0FBCf9 100%)',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    }
}));

export const BackgroundStepThirdInnerBox = styled(Box)(({ theme}) => ({
    width: '64px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '17px 17px 0px 0px',
    background: 'linear-gradient(177deg, rgba(255, 255, 255, 0.00) 2.87%, rgba(255, 255, 255, 0.27) 102.03%)',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    }
}));

export const BackgroundStepTypo = styled(Typography)(({ theme}) => ({
    color: '#7ed6df',
    paddingTop: '15px',
    textShadow: '0px 5.339px 0px #130f40',
    webkitTextStrokeWidth: '0.5837001204490662',
    webkitTextStrokeColor: '#000',
    fontFamily: "Lilita One",
    fontSize: '27px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    background: 'linear-gradient(180deg, #FFF 30.82%, #4BCFFA 86.99%)',
    backgroundClip: 'text',
    webkitTextFillColor: 'transparent',

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
    background: `linear-gradient(180deg, ${theme.game.purple.light} 0%, ${theme.game.special.red} 100%)`,
    boxShadow: '0px 4px 0.9px 0px rgba(255, 255, 255, 0.50) inset',
    zIndex: 99999999,
    mask: 'url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png")',
    maskSize: '3000% 100%',
    animation: 'ani2 .7s steps(22) forwards',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    },

    '&.active': {
        ...(isClicking && {
            background: `linear-gradient(180deg, ${theme.game.special.red} 55.86%, ${theme.game.special.orange} 100%)`,
        }),
    },

    ...(isSaved && {
        background: `linear-gradient(180deg, ${theme.game.special.red} 55.86%, ${theme.game.special.orange} 100%)`,
    }),

    '&:hover': {
        animation: 'ani .7s steps(22) forwards',
        backgroundColor: 'pink',
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
    background: 'linear-gradient(177deg, rgba(255, 255, 255, 0.00) 2.87%, rgba(255, 255, 255, 0.27) 102.03%)',

    [theme.breakpoints.up(783)]: {
        height: '64px',
        width: '64px',
    }
}));

export const ForegroundStepTypo = styled(Typography)(({ theme}) => ({
    color: '#eccc68',
    paddingTop: '15px',
    textShadow: '0px 5.339px 0px #723400',
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
        fontSize: '20px'
    },

    [theme.breakpoints.between('md', 'lg')]: {
        paddingTop: '10px'
    }
}));