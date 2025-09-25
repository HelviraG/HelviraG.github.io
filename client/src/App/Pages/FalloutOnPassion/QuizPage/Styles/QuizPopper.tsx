import { Box, Paper, Popper, styled } from "@mui/material";

export const QuizPopperStyle = styled(Popper)(({ theme }) => ({
    display: 'flex',
    zIndex: 99999,
    marginTop: '24px!important',
    height: '60%',
    width: '600px',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
        height: '50%',
        margin: '14px 0px 14px 14px!important',
        width: '97%'
    }
}));

export const QuizPopperWrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.game.special.dark,
    borderRadius: '23px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
}));

export const QuizPopperContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flex: 1,
    height: '100%'
}));