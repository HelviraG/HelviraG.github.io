import { Box, Button, Divider, styled, Typography } from "@mui/material";
import falloutResultImg from "/assets/img/fallout_passion_result.jpeg";

// Quiz General //////////////////////////////////////////////////////
export const DashboardWrapper = styled(Box)(({ theme }) => ({
    position: 'relative', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1,
    overflowY: 'auto',

    [theme.breakpoints.down(800)]: {
        flexDirection: 'column'
    },
}));

export const EmptyBoxWrapper = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${falloutResultImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    display: 'flex',
    flex: 1,
    filter: 'saturate(1)',
    transition: 'all 0.5s ease',
}));

export const DashboardLeftWrapperBox = styled(Box, {
    shouldForwardProp: (prop) => prop != 'selectedActivity'
})<{ selectedActivity: string | null }>(({ theme, selectedActivity }) => ({
    display: 'flex',
    flex: 1,
    height: '-webkit-fill-available',
    width: '80%',
    position: 'relative',

    //backgroundImage: selectedActivity
        //? `url(${falloutResultImg})`
        //: `url(https://od.lk/s/MzRfMzc4MDEwODhf/thumb-1920-830262.jpg)`,
    //backgroundSize: 'cover',
    //backgroundPosition: 'center',
    //filter: 'saturate(1)',
    //transition: 'all 0.5s ease',

    [theme.breakpoints.down(1200)]: {
        width: '70%'
    },

    [theme.breakpoints.down(800)]: {
        width: '100%'
    },
    
    [theme.breakpoints.down(585)]: {
        height: '850px', 
    },

    '&:after': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: '""',
        opacity: '0.4',
        position: 'absolute',
        backgroundImage: `linear-gradient(90deg, ${theme.game.special.dark} 5%, #7950f2 95%)`,
    }
}));

export const DashboardRightWrapperBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#DDF6FF', 
    display: 'flex', 
    height: '-webkit-fill-available', 
    alignItems: 'center', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    width: '30%',

    [theme.breakpoints.down(1200)]: {
        width: '40%'
    },

    [theme.breakpoints.down(800)]: {
        flex: 0,
        width: '-webkit-fill-available'
    }
}));

export const DashboardRightBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#8CE0FF', 
    padding: '3em 2em', 
    margin: '1em', 
    borderRadius: '32px', 
    width: '70%',

    [theme.breakpoints.down(800)]: {
        padding: '2em',
        margin: '2em'
    },

    [theme.breakpoints.down(500)]: {
        width: '90%'
    }
}));

export const DashboardButtonsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    gap: theme.spacing(3), 
    marginTop: theme.spacing(4),

    [theme.breakpoints.down(800)]: {
        flexDirection: 'row',
        gap: theme.spacing(1)
    },

    [theme.breakpoints.down(500)]: {
        flexDirection: 'column',
        gap: theme.spacing(2)
    }
}));

export const DashboardButton = styled(Button, {
    shouldForwardProp: (prop) => prop != 'isSelectedActivity'
})<{ isSelectedActivity: boolean }>(({ theme, isSelectedActivity }) => ({
    borderRadius: '26px', 
    backgroundColor: '#87D7F4', 
    border: '1px solid #76B8D2',
    textTransform: 'lowercase',
    
    ...(isSelectedActivity && {
        backgroundColor: '#000',
        color: '#FFF',
        border: '1px solid #FFF',
    }),

    '&:hover': {
        backgroundColor: '#5A71D9',
        color: '#FFF',
        border: '1px solid #FFF',
    },

    [theme.breakpoints.down(800)]: {
        flex: 1
    }
}));

// Quiz Dashboard //////////////////////////////////////////////////////
export const DashboardContentWrapper = styled(Box)({
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
});

export const DashboardContentInner = styled(Box)(({ theme }) => ({
    border: '0.1em solid white',
    borderRadius: '24px',
    boxShadow: `inset 0 0 0 0.2em ${theme.game.special.greeny}, inset 0 0 1em 0.3em ${theme.game.special.greeny}, inset 1em 1em 0.4em rgba(0, 0, 0, 0.6), 0 0 0 0.2em ${theme.game.special.greeny}, 0 0 1em 0.3em ${theme.game.special.greeny}, 1em 1em 0.4em rgba(0, 0, 0, 0.6)`,
    width: '80%', 
    padding: '2em', 
    backdropFilter: 'brightness(0.4)',

    gap: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    margin: '0 auto',
    position: 'absolute',
    left: 0,
    right: 0,

    [theme.breakpoints.down(800)]: {
        padding: '1em 2em', 
        gap: 0
    },

    [theme.breakpoints.down(585)]: {
        padding: '1em', 
        top: '41%',
        width: '90%'
    }
}));

export const DashboardContentInnerPill = styled(Box)(({ theme }) => ({
    backgroundColor: theme.game.special.iceBlue.dark, 
    padding: '6px 24px', 
    border: `3px solid ${theme.game.special.greeny}`,
    borderRadius: '24px',
    color: theme.game.special.greeny, 
    width: 'max-content' 
}));

export const DashboardContentInnerPillTypo = styled(Typography)(({ theme }) => ({
    color: theme.game.special.greeny
}));

export const DashboardContentTypo = styled(Typography)(({ theme }) => ({
    color: theme.game.special.greeny,
    textAlign: 'right'
}));

export const DashboardContentDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.game.special.greeny,
    marginTop: '.5em'
}));

export const DashboardContentChartWrapper = styled(Box)({
    display: 'flex', 
    marginTop: '.5em' 
});

export const ChartBox = styled(Box)({
    flex: 1,
    zIndex: 1
});