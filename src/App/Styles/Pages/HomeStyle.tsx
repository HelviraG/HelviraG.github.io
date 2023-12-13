import { alpha, Box, styled, Typography } from '@mui/material';

export const AnimatedTextBox = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: theme.spacing(10),

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(8)
    },

    [theme.breakpoints.down('xs')]: {
        padding: `${theme.spacing(8)} ${theme.spacing(4)}`
    },
}));

export const AnimatedTextTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },

    '&:after': {
        content: '""',
        height: '1px',
        width: '206%',
        display: 'block',
        border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        marginLeft: '-3em',
        marginTop: '1em',
        marginBottom: '1em',
    }
}));

export const WelcomeSectionBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4), 
    marginTop: theme.spacing(4), 
    textAlign: 'center'
}));

export const WelcomeTextBox = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    backgroundImage: 'linear-gradient(131.83deg, #FFFAFA 0%, #FFF7F7 99.21%)',
    borderRadius: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(6),
    maxWidth: '50%',
    padding: theme.spacing(2),
    position: 'relative',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
        maxWidth: '80%'
    },

    '&:before': {
        backgroundImage: 'linear-gradient(312.25deg, #FFC4BC 0%, rgba(255, 255, 255, 0) 66.19%)',
        borderRadius: '18px',
        bottom: -2,
        content: '""',
        left: -2,
        position: 'absolute',
        right: -2,
        top: -2,
        zIndex: -1
    }
}));

export const WelcomeTextInnerBox = styled(Box)(({ theme }) => ({
    borderRadius: '14px',
    boxShadow: '0 40px 80px #FBE4E0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '80%',
    padding: theme.spacing(2)
}));

export const WelcomeText = styled(Typography)(({ theme }) => ({
    color: theme.palette.background.paper,
    fontSize: '4rem',
    textShadow: '-2px 0 #111827, 0 -2px #111827, 2px 0 #111827, 0 2px #111827, 2px 2px #111827, -2px -2px #111827, -2px 2px #111827, 2px -2px #111827, 6px 6px #FFC4BC',
}))