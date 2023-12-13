import { Box, styled, BoxProps, ListItem, ListItemProps, List, Typography } from '@mui/material';

interface ListItemWrapperProps extends ListItemProps {
    isRight: boolean;
}

interface ExperienceDurationBoxProps extends BoxProps {
    isRight: boolean;
}

interface ExperienceTitleBoxProps extends BoxProps {
    isRight: boolean;
}

export const ListWrapper = styled(List)(({ theme }) => ({
    listStyle: 'none', 
    marginTop: theme.spacing(2)
}));

export const ListItemWrapper = styled(ListItem, {
    shouldForwardProp: (prop) => prop !== 'isRight',
})<ListItemWrapperProps>(({ isRight, theme }) => ({
    alignItems: 'center', 
    overflow: 'hidden', 
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(2), 

    ...(isRight && {
        display: 'flex',
        flexDirection: 'row-reverse' 
    }),

    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column'
    },
}));

export const ExperienceDurationBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isRight',
})<ExperienceDurationBoxProps>(({ isRight, theme }) => ({
    ...(isRight && {
        paddingLeft: theme.spacing(3)
    }),
    ...(!isRight && {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    })
}));

export const ExperienceDurationLabel = styled(Box)(() => ({
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '3px',
    margin: '0 0 0.5em 0',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
}));

export const ExperienceDivider = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },

    '&:before': {
        background: '#FF6B6B',
        border: '3px solid transparent',
        borderRadius: '100%',
        content: '""',
        display: 'block',
        height: '15px',
        width: '15px',
        transition: 'background 0.3s ease-in-out, border 0.3s ease-in-out'
    }
}));

export const ExperienceTitleBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isRight',
})<ExperienceTitleBoxProps>(({ isRight, theme }) => ({
    alignItems: 'center',
    paddingRight: '30px', 
    textAlign: 'left',

    ...(isRight && {
        textAlign: 'right'
    })
}));


export const ExperienceTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '1.7rem'
    },
}));

export const ExperienceMission = styled(ListItem)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: 14
    },
}));