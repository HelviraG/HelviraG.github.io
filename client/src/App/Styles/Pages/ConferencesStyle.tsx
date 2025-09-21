import { Box, styled, BoxProps } from '@mui/material';

interface DateWrapperProps extends BoxProps {
    darkColor: string;
    lightColor: string;
}

export const ChipWrapper = styled(Box)(({ theme }) => ({
    '.MuiChip-root': { 
        '&:not(:last-child)': { 
            marginRight: theme.spacing(1) 
        }, 

        marginBottom: theme.spacing(1) 
    }
}));

export const EventBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export const ItemEvent = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'row-reverse', 
    marginTop: theme.spacing(2)
}));

export const ItemEventWrapper = styled(Box)(({ theme }) => ({
    alignItems: 'end', 
    display: 'flex', 
    flex: '1 1 10%', 
    flexDirection: 'column', 
    justifyContent: 'space-between' 
}));

export const EventDateWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'lightColor' && prop !== 'darkColor',
})<DateWrapperProps>(({ darkColor, lightColor, theme }) => ({
    alignItems: 'center',
    backgroundColor: lightColor,
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    height: '4rem',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
    width: '4rem',

    'span': {
        color: darkColor,
        lineHeight: 1
    }
}));

export const EventDateDay =  styled(Box)(({
    fontWeight: 500,
    fontSize: '1.5rem',
}));

export const EventDateMonth =  styled(Box)(({
    fontSize: '1rem',
    textTransform: 'uppercase'
}));

export const EventLocationWrapper = styled(Box)(({ theme }) => ({
    alignItems: 'center', 
    display: 'flex', 
    gap: theme.spacing(.5)
}));
