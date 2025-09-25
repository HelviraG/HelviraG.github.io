import {Box, Button, ButtonProps, Card, CardContent, Dialog, DialogContent, styled, Typography} from "@mui/material";

interface ErrorDialogButtonProps extends ButtonProps {
    isQuizButton?: boolean;
    isWebsiteButton?: boolean;
}

export const ErrorDialogStyle = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: 'transparent',
        maxWidth: '74%'
    },

    [theme.breakpoints.down(767)]: {
        maxWidth: '100%'
    }
}));

export const ErrorDialogContent = styled(DialogContent)(() => ({
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    width: '100%',
    backgroundColor: 'transparent'
}));

export const ErrorDialogCard = styled(Card)(({
    width: '100%',
    backgroundColor: 'transparent',
}));

export const ErrorDialogCardContent = styled(CardContent)(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const ErrorDialogCardBox = styled(Box)(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const ErrorDialogCardTypo = styled(Typography)(({ theme }) => ({
    color: theme.game.purple.light,
    fontStyle: 'italic'
}));

export const ErrorDialogCardButtonBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: theme.spacing(2),
    textTransform: 'capitalize',
}));

export const ErrorDialogCardButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isQuizButton' && prop !== 'isWebsiteButton',
})<ErrorDialogButtonProps>(({ isQuizButton, isWebsiteButton, theme }) => ({
    borderRadius: theme.spacing(4),
    fontWeight: 900,

    ...(isWebsiteButton && {
        backgroundColor: theme.game.purple.dark,
    }),

    ...(isQuizButton && {
        backgroundColor: theme.game.special.red,
    }),

    '&:hover': {
        backgroundColor: theme.game.special.greeny,

        '& .MuiSvgIcon-root': {
            ...(isWebsiteButton && {
                color: theme.game.purple.dark
            }),

            ...(isQuizButton && {
                color: theme.game.special.red,
            }),
        }
    },

    '& .MuiSvgIcon-root': {
        color: theme.game.purple.light
    }
}));

