import { Box, styled } from '@mui/material';

export const ListWrapper = styled(Box)(({ theme }) => ({
    margin: '0 auto', 
    marginBottom: theme.spacing(10), 
    marginTop: theme.spacing(6), 
    maxWidth: '90%',

    [theme.breakpoints.up('xl')]: {
        maxWidth: '70%',
    },
}));

export const ListTitleWrapper = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(5), 
}));

export const ListItemsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexWrap: 'wrap',
        
    '&.press-list': {
        gap: theme.spacing(2),
        marginBottom: '8em'
    } 
}));