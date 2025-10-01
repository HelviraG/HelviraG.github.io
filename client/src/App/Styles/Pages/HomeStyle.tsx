import { alpha, Box, Button, Divider, Link, styled, Typography } from '@mui/material';

// Main Section //////////////////////////////////////////////////////
export const MainSectionBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.game.special.iceBlue.medium
}));

// Hero Section //////////////////////////////////////////////////////
export const HeroSectionWrapper = styled(Box)(({ theme }) => ({
    display: "flex", 
    justifyContent: "space-between", 
    maxWidth: "90%", 
    margin: "0 auto", 
    flexDirection: 'row', 
    paddingTop: '5em', 
    gap: 2,

    [theme.breakpoints.up(1025)]: {
        paddingTop: '14em'
    },

    [theme.breakpoints.down('lg')]: {
        gap: 0,
    },

    [theme.breakpoints.down(426)]: {
        flexDirection: 'column',
        gap: 4
    }
}));

export const HeroSectionBox = styled(Box)(({ theme }) => ({
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'start', 
    justifyContent: 'center', 
    fontSize: '2em', 
    fontWeight: 'bold', 
    padding: '0 2em',

    [theme.breakpoints.down('lg')]: {
        padding: '0 16px',
    },
}));

export const HeroSectionTextBox = styled(Box)({
    position: 'relative'
});

export const HeroSectionDivider = styled(Divider)(({ theme }) => ({
    margin: '0 0 1em 0', 
    borderColor: theme.game.special.iceBlue.light, 
    width: '50px', 
    height: '4px', 
    borderRadius: '2px'
}));

export const HeroSectionAboveTypo = styled(Typography)(({ theme }) => ({
    fontSize: '0.8em', 
    padding: '0 40px 0 0', 
    textAlign: 'justify',
    marginBottom: '10px',

    [theme.breakpoints.up(1025)]: {
        fontSize: '0.7em'
    },

    [theme.breakpoints.down('lg')]: {
        fontSize: '0.6em',
        padding: '0 32px 0 0'
    },

    [theme.breakpoints.down(500)]: {
        padding: 0
    }
}));

export const HeroSectionBelowTypo = styled(Typography)(({ theme }) => ({
    fontSize: '0.8em', 
    padding: '0 40px 0 0',

    [theme.breakpoints.up(1025)]: {
        fontSize: '0.7em'
    },

    [theme.breakpoints.down('lg')]: {
        fontSize: '0.6em',
        padding: '0 32px 0 0'
    },

    [theme.breakpoints.down(500)]: {
        padding: 0
    }
}));

export const HeroSectionImageBox = styled(Box)(({ theme }) => ({
    flex: 1, 
    position: 'relative',

    [theme.breakpoints.down('lg')]: {
        display: 'flex',
        flexDirection: 'column-reverse'
    },

    [theme.breakpoints.down(500)]: {
        marginTop: '-4em'
    }
}));

export const NameTitlePillBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#ff477e',
    border: `4px solid ${theme.game.special.dark}`,
    borderRadius: '23px',
    boxShadow: `4px 6px 0px 0px ${theme.game.special.dark}`,
    padding: '10px 30px',
    width: 'fit-content', 
    position: 'absolute', 
    right: '2em', 
    bottom: '5em',

    '&:hover': {
        backgroundColor: theme.game.special.greeny,
    },

    [theme.breakpoints.down('sm')]: {
        width: 'fit-content',
        padding: '4px 10px'
    },

    [theme.breakpoints.between('sm', 'md')]: {
        width: 'fit-content',
        padding:  '4px'
    },

    [theme.breakpoints.between('md', 'lg')]: {
        padding: '7px'
    },

    [theme.breakpoints.down('lg')]: {
        right: '2em',
        bottom: '-2.6em',
    },

    [theme.breakpoints.down('md')]: {
        right: '0em',
        bottom: '7.4em',
    },
}));

export const HelloPillBox = styled(Box)(({ theme }) => ({
    zIndex: 2,
    left: '10px',
    position: 'absolute',
    top: '-4em',

    [theme.breakpoints.down('sm')]: {
        left: '145px',
        top: '45px',
    },

    [theme.breakpoints.between('sm', 'md')]: {
        left: '190px',
        top: '14px',
        width: 'fit-content',
    },

    [theme.breakpoints.down('lg')]: {
        top: '-2.5em',
        left: '-0.2em'
    },

    [theme.breakpoints.down('md')]: {
        left: 0,
        top: '-3em',
    }
}));

export const HelloPillTitle = styled(Box)(({ theme }) => ({
    backgroundColor: theme.game.special.greeny,
    border: `4px solid ${theme.game.special.dark}`,
    borderRadius: '23px',
    boxShadow: `4px 6px 0px 0px ${theme.game.special.dark}`,
    padding: '10px 30px',

    '&:hover': {
        backgroundColor: "#ff751f",
    },

    '& .MuiTypography-root': {
        fontWeight: 900
    },

    [theme.breakpoints.down('sm')]: {
        padding: '7px'
    }
}));


// Home CTAs //////////////////////////////////////////////////////
export const HomeCTAWrapper = styled(Box)(({ theme }) => ({ 
    display: 'flex', 
    gap: 2, 
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',

    [theme.breakpoints.down(426)]: {
        flexDirection: 'column',
        alignItems: 'start'
    }
}));

export const HomeCTABox = styled(Box)(({ theme }) => ({
    alignItems: 'center', 
    display: 'flex',
    flex: 1,
    justifyContent: 'center', 
    marginTop: theme.spacing(4), 
    marginBottom: theme.spacing(1),
    gap: theme.spacing(2),

    [theme.breakpoints.down('md')]: {
        '& > a': {
            width: '100%',
        }
    },
        
    [theme.breakpoints.down('lg')]: {
        width: '-webkit-fill-available',
        flexDirection: 'column',

        '& > a': {
            width: '-webkit-fill-available',
            '&:not(:last-child)': {
                marginBottom: theme.spacing(1)
            }
        }
    },
}));

export const HomeCTAButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isSecondary',
})<{ isSecondary?: boolean }>(( { isSecondary = false, theme } ) => ({
    alignSelf: 'center',
    backgroundColor: "#ff477e",
    border: `2px solid ${theme.game.special.dark}`,
    boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
    borderRadius: '24px',
    color: theme.game.special.dark,
    fontWeight: 900,
    lineHeight: '23px',
    outline: 'none',
    padding: '0.75rem 1.4rem',
    textDecoration: 'none',
    transition: 'all 235ms ease-in-out',
    userSelect: 'none',
    touchAction: 'manipulation',

    ...(isSecondary && {
        backgroundColor: theme.game.special.dark,
        border: `2px solid #ff477e`,
        color: "#ff477e",
    }),

    '&:hover': {
        border: `2px solid ${theme.game.special.dark}`,
        backgroundColor: theme.game.special.iceBlue.medium,
        boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 8px -5px',
        color: theme.game.special.dark,
        transform: 'translate3d(0, 2px, 0)',
    },

    [theme.breakpoints.up('xl')]: {
        fontSize: '1.25rem',
    }
}));

// Buy Coffee Section //////////////////////////////////////////////////////
export const BuyCoffeeWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },

    [theme.breakpoints.between('md', 'lg')]: {
        marginTop: theme.spacing(14),
    },

    [theme.breakpoints.up('lg')]: {
        paddingTop: '2em',
    },
}));

export const BuyCoffeeTitleBox = styled(Box)(({ theme }) => ({
    padding: '82px 75px 82px 82px',
    borderRight: `2px dashed ${theme.game.warning.light}`,
    textAlign: 'center',
    width: '50%',

    [theme.breakpoints.down('md')]: {
        padding: '100px 50px 50px',
        borderBottom: `2px dashed ${theme.game.warning.light}`,
        borderRight: 'none',
        width: '80%'
    },

    [theme.breakpoints.between('md', 'lg')]: {
        padding: '62px 38px 62px 62px'
    },

    [theme.breakpoints.up('xl')]: {
        padding: '82px 175px 82px 82px'
    },
}));

export const BuyCoffeeTitleTypo = styled(Typography)({
    fontWeight: 500
});

export const BuyCoffeeLink = styled(Link)({
    color: '#FB0F5A',
    cursor: 'none',
    textDecoration: 'none'
});

export const BuyCoffeeImageBox = styled(Box)(({ theme }) => ({
    background: 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTdtcXRsa2x6cG94dDNiODR0Y3hidWJyODJ1dTBwNWg2bmVmbHdtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/513lZvPf6khjIQFibF/giphy.gif") no-repeat right',
    height: '280px',
    width: '65%',

    [theme.breakpoints.down('md')]: {
        backgroundPosition: 'center',
        marginTop: '1.5em',
        width: '100%'
    },

    [theme.breakpoints.between('md', 'lg')]: {
        padding: '100px',
        width: '100%'
    },
}));

export const BuyCoffeeImageLink = styled(Link)({
    textDecoration: 'none'
});