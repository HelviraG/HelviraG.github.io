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
    backgroundColor: theme.game.purple.dark, 
    border: `2px solid ${theme.game.special.dark}`,
    borderRadius: '9999px', 
    color: theme.palette.background.paper,
    padding: '.5rem 1.5rem', 
    minWidth: '150px',

    '&:hover': {
        backgroundColor: theme.game.special.greeny,
        border: `2px solid ${theme.game.special.iceBlue.dark}`,
        color: theme.game.special.iceBlue.dark
    }
}));

export const BurnoutQuizContainedButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.game.special.iceBlue.dark, 
    border: `2px solid ${theme.game.purple.dark}`,
    borderRadius: '9999px', 
    color: theme.palette.background.paper,
    padding: '.5rem 1.5rem', 
    minWidth: '150px',

    '&:hover': {
        backgroundColor: theme.game.purple.dark,
        border: `2px solid ${theme.game.special.iceBlue.dark}`,
        color: theme.game.special.iceBlue.dark
    }
}));