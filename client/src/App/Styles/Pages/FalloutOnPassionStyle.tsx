import {alpha, Box, Fab, styled} from '@mui/material';

interface NeuBrutButtonBoxProps {
    isTopRight?: boolean
}

export const NeuBrutButtonBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isTopRight'
})<NeuBrutButtonBoxProps>(({ isTopRight, theme }) => ({
    position: 'absolute',
    zIndex: 8,

    ...(!isTopRight && {
        bottom: theme.spacing(1.5),
        left: theme.spacing(2),

        [theme.breakpoints.between('lg', 1460)]: {
            left: theme.spacing(6),
            bottom: theme.spacing(2.6),
        },

        [theme.breakpoints.up(2350)]: {
            left: theme.spacing(8.6),
            bottom: theme.spacing(6),
        },
    }),

    ...(isTopRight && {
        [theme.breakpoints.down('md')]: {
            bottom: theme.spacing(1.5),
            right: theme.spacing(2),
        },

        [theme.breakpoints.between('md', 'lg')]: {
            top: '5%',
            left: theme.spacing(2)
        },

        [theme.breakpoints.between('lg', 1460)]: {
            left: theme.spacing(6),
            top: '68%',
        },

        [theme.breakpoints.between(1460, 2350)]: {
            top: theme.spacing(4),
            left: theme.spacing(2),
        },

        [theme.breakpoints.up(2350)]: {
            top: theme.spacing(6),
            left: theme.spacing(8.6),
        },
    })
}));

export const FabButtonBox = styled(Box)(() => ({
    bottom: '3.5%',
    position: 'absolute',
    right: '2%',
}));

export const FabButtonComponent = styled(Fab)(({ theme }) => ({
    display: 'flex',
    width: '60px',
    height: '60px',
    padding: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '100px',
    border: `1px solid ${alpha(theme.game.special.dark, .05)}`,
    background: `${alpha(theme.game.special.dark, .02)}`,
    zIndex: 99998,

    '&:hover': {
        background: `${alpha(theme.game.special.dark, .2)}`,
    },

    '& .MuiSvgIcon-root': {
        color: theme.palette.background.paper
    }
}));

export const FabButton = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '40px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '100px',
    border: `1px solid ${alpha(theme.game.special.dark, .9)}`,
    background: `linear-gradient(180deg, ${alpha(theme.game.special.dark, .8)} 0%, ${theme.game.special.red} 100%)`,
}));
