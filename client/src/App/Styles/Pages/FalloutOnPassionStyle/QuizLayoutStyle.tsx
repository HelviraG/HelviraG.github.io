import { alpha, Button, styled } from "@mui/material";

export const QuizOutlinedButton = styled(Button, {
    shouldForwardProp: (prop) => prop != 'hasFullWidth'
})<{ hasFullWidth?: boolean }>(({ theme, hasFullWidth }) => ({
    textTransform: 'lowercase', 
    fontWeight: 600, 
    fontSize: '16px', 
    border: `1px solid ${theme.game.special.greeny}`, 
    borderRadius: '32px', 
    color: theme.game.special.greeny,
    padding: '6px 32px',

    ...(hasFullWidth && {
        [theme.breakpoints.down(500)]: {
            width: '100%'
        },
    }),

    '&:hover': {
        backgroundColor: alpha(theme.game.special.dark, .1),
        borderColor: theme.game.special.dark,
        color: theme.game.special.dark
    }
}));

export const QuizContainedButton = styled(Button, {
    shouldForwardProp: (prop) => prop != 'hasFullWidth'
})<{ hasFullWidth?: boolean }>(({ theme, hasFullWidth }) => ({
    textTransform: 'lowercase', 
    fontWeight: 600, 
    fontSize: '16px', 
    backgroundColor: theme.game.special.greeny, 
    color: theme.palette.background.paper,
    borderRadius: '32px', 
    padding: '6px 32px',

    ...(hasFullWidth && {
        [theme.breakpoints.down(500)]: {
            width: '100%'
        },
    }),

    '&:hover': {
        backgroundColor: theme.game.special.dark,
        border: `1px solid ${theme.game.special.greeny}`, 
        color: theme.game.special.greeny
    }
}));

export const BurnoutQuizOutlinedButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.game.special.greeny, 
    border: `2px solid #130f40`,
    borderRadius: '9999px', 
    color: '#130f40',
    padding: '.5rem 1.5rem', 
    minWidth: '150px',

    '&:hover': {
        backgroundColor: theme.game.special.orange,
        border: `2px solid #130f40`,
        color: theme.palette.background.paper
    }
}));

export const BurnoutQuizContainedButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#130f40', 
    border: `2px solid ${theme.game.special.greeny}`,
    borderRadius: '9999px', 
    color: theme.game.special.greeny,
    padding: '.5rem 1.5rem', 
    minWidth: '150px',

    '&:hover': {
        backgroundColor: theme.game.special.greeny,
        border: `2px solid #130f40`,
        color: '#130f40'
    }
}));