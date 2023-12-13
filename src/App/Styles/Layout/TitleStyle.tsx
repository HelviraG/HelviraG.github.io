import { Box, Typography, styled } from '@mui/material';

export const TitleWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    
    '&:before': {
        content: '""',
        height: '1px',
        width: '47%',
        display: 'block',
        backgroundColor: theme.palette.primary.light,
        position: 'absolute',
        top: '50%',
        right: '1%',
    }
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.background.default,
    fontSize: '3rem',
    letterSpacing: '0.008em',
    textShadow: `-2px 0 #111827, 0 -2px #111827, 2px 0 #111827, 0 2px #111827, 2px 2px #111827, -2px -2px #111827, -2px 2px #111827, 2px -2px #111827, 6px 6px ${theme.palette.primary.light}`,
    width: '50%'
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));