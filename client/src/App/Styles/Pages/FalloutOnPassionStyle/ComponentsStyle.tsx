import { Box, BoxProps, Button, ButtonProps, Icon, styled } from '@mui/material';

interface WavySettingsButtonBoxProps extends BoxProps {
    isPillButton: boolean;
}

interface WavySettingsSpanBoxProps extends BoxProps {
    isPillButton: boolean;
    isSettingsOpen: boolean;
}

interface AnimatedGameButtonProps extends ButtonProps {
    isCloudy?: boolean;
    isDrawy?: boolean;
    isSettingsOpen: boolean;
}

export const SettingsButtonBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '2%',
    right: '4%',
}));

export const WavySettingsButtonBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isPillButton'
})<WavySettingsButtonBoxProps>(({ isPillButton, theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    transition: '.5s',
    letterSpacing: '1px',

    zIndex: 99999,

    ...(!isPillButton && {
        width: '100px',
        height: '50px',
        borderRadius: '8px',
    }),

    ...(isPillButton && {
        borderRadius: '16px',
        height: '40px',

        [theme.breakpoints.down('md')]: {
            width: '50px'
        },

        [theme.breakpoints.up(2300)]: {
            height: '62px',
            width: '260px',

            '& .MuiSvgIcon-root': {
                fontSize: '36px!important'
            }
        }
    })
}));

export const WavySettingsSpan = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',

    '& .MuiSvgIcon-root': {
        marginLeft: '0!important',
        marginRight: '0!important',
    },

    '& .MuiButton-icon': {
        marginLeft: '0!important',
        [theme.breakpoints.down("md")]: {
            margin: "0 auto",
        },
    }
}));

export const WavySettingsSpanTypo = styled(Icon)(({ theme }) => ({
    display: "block",
    fontSize: "11px",
    fontWeight: 900,

    [theme.breakpoints.down(768)]: {
        display: "none",
    },
}));

export const WavySettingsSpanBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isPillButton' && prop !== 'isSettingsOpen',
})<WavySettingsSpanBoxProps>(({ isPillButton, isSettingsOpen, theme }) => ({
    fontWeight: 900,
    position: 'absolute',
    color: theme.palette.background.paper,
    fontSize: '11px',
    overflow: 'hidden',
    textAlign: 'center',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    textTransform: 'uppercase',

    ...(isSettingsOpen && {
       backgroundColor: theme.game.special.dark,
    }),

    ...(isPillButton && {
        backgroundColor: theme.game.special.red,
        paddingTop: '11px',
        borderRadius: '8px',
    }),

    ...(!isPillButton && {
        backgroundColor: theme.game.special.orange,
        paddingTop: '17px',
    }),

    [theme.breakpoints.up(2300)]: {
        fontSize: '30px'
    }
}));


export const WavyButton = styled(Button,
    {
        shouldForwardProp: (prop) => prop !== "isCloudy" && prop !== "isDrawy" && prop !== "isSettingsOpen",
    }
    )<AnimatedGameButtonProps>(({ isCloudy, isDrawy, isSettingsOpen, theme }) => ({
    height: '100%',
    fontSize: '11px',
    fontWeight: 900,
    width: '101%',
    color: theme.palette.background.paper,

    backgroundColor: theme.game.special.dark,

    ...(isSettingsOpen && {
       backgroundColor: theme.game.special.dark,
    }),

    '& .MuiButton-icon': {
        marginLeft: '0!important',
        marginRight: '0!important'
    },

    [theme.breakpoints.up(2300)]: {
        fontSize: '30px',

        '& .MuiSvgIcon-root': {
            fontSize: '36px!important'
        }
    },

    ...(isDrawy && {
        mask: 'url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png")',
        maskSize: '3000% 100%',
        animation: 'ani2 .7s steps(29) forwards',

        '&:hover': {
            animation: 'ani .7s steps(29) forwards',
            backgroundColor: 'black',
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
        borderRadius:'16px',
    }),


    ...(isCloudy && {
        mask: 'url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png")',
        maskSize: '3000% 100%',
        animation: 'ani2 .7s steps(22) forwards',

        '&:hover': {
            animation: 'ani .7s steps(22) forwards',
            backgroundColor: 'black',
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

        borderRadius: '8px'
    })
}));