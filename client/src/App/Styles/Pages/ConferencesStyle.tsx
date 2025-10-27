import {Box, styled, BoxProps, CardMedia, CardMediaProps, Accordion, AccordionSummary} from '@mui/material';

interface CardContentMediaProps extends CardMediaProps {
    imgUrl?: string;
}

interface EventBoxProps extends BoxProps {
    isConference?: boolean;
}

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

export const EventBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isConference',
})<EventBoxProps>(({ isConference, theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        alignItems: 'center',
    },

    ...(isConference && {
        width: '100px'
    })
}));

export const ItemEvent = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isConference',
})<EventBoxProps>(({ isConference, theme }) => ({
    display: 'flex', 
    flexDirection: 'row-reverse', 
    marginTop: theme.spacing(2),

    ...(isConference && {
        marginTop: 0
    })
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

export const CardEventMedia = styled(CardMedia, {
    shouldForwardProp: (prop) => prop !== 'imgUrl',
})<CardContentMediaProps>(({ imgUrl, theme }) => ({
    backgroundColor: 'background.default',
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    borderRadius: theme.spacing(1),
    height: 0,
    marginLeft: '-24px',
    marginRight: 'auto',
    marginTop: '-24px',
    paddingBottom: '48%',
    position: 'relative',
    transform: 'translateX(-50px)',
    width: '100%',

    [theme.breakpoints.down('md')]: {
        backgroundPosition: 'center',
        marginLeft: '26px',
        marginRight: 'auto',
        marginTop: '-74px',
        width: '90%',
    },

    [theme.breakpoints.down('lg')]: {
        transform: 'translateX(-24px)',
    },

    '&:after': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: '""',
        opacity: '0.4',
        position: 'absolute',
        borderRadius: theme.spacing(1),
        backgroundImage: 'linear-gradient(90deg, #f783ac 5%, #7950f2 95%)',
    }
}));

export const ConferenceCardWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',

    [theme.breakpoints.down(500)]: {
        maxWidth: '90%', margin: '0 auto'
    }
}));

export const ConferenceCardHeader = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isConference',
})<{ isConference?: boolean }>(({ isConference,theme }) => ({
    padding: '0 10px 0 0',

    [theme.breakpoints.down(500)]: {
        marginTop: theme.spacing(3)
    },

    ...(isConference && {
        padding: '0 16px 0 0'
    })
}));

export const ConferenceCardBody = styled(Box)(({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    gap: '20px'
}));

export const CardEvent = styled(Accordion)(({ theme }) => ({
    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px #7950f29c',
    maxWidth: '90%',

    [theme.breakpoints.down(500)]: {
        maxWidth: '100%'
    }
}));

export const CardEventDetailHeader = styled(AccordionSummary)(({ theme }) => ({
    width: '100%',

    '.accordion-summary-box': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '4px',

        '.accordion-summary-box-item1': {
            alignSelf: 'end'
        },

        '.accordion-summary-box-item2': {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '-webkit-fill-available',

            '.accordion-summary-box-item2-actions': {
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
            }
        }
    }
}))
