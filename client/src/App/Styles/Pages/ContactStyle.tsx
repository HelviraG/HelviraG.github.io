import { alpha, Box, styled } from '@mui/material';

export const ContactFormBox = styled(Box)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.main, .05),
    border: '2px solid black',
    boxShadow: '15px 15px 1px #25f4e9, 15px 15px 1px 2px black',
    margin: '0 auto', 
    marginBottom: theme.spacing(30),
    marginTop: theme.spacing(10), 
    maxWidth: '80%', 
    padding: theme.spacing(4),
    position: 'relative',

    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        marginTop: theme.spacing(10),
        maxWidth: '100%'
    },

    [theme.breakpoints.up('xl')]: {
        margin: '0 auto',
        maxWidth: '50%'
    },
}));

export const FormWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'column', 
    gap: theme.spacing(4),
}));

export const FormIdentityWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between',
    gap: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },
}));

export const SubmitButtonBox = styled(Box)(({
    display: 'flex', 
    justifyContent: 'end'
}));