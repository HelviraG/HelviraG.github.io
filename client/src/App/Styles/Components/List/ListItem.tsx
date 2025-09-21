import { 
    alpha, 
    Box, 
    BoxProps, 
    Button, 
    Card, 
    CardContent, 
    CardMedia, 
    CardMediaProps, 
    CardProps, 
    styled, 
    Typography 
} from '@mui/material';

interface CardWrapperProps extends CardProps {
    imgUrl?: string;
}

interface CardContentMediaProps extends CardMediaProps {
    imgUrl?: string;
}

interface CardContentActionProps extends BoxProps {
    flexRight?: boolean;
}

export const CardWrapper = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'hidden',
})<CardWrapperProps>(({ hidden, theme }) => ({
    alignItems: 'center',
    border: `1px solid ${alpha(theme.palette.primary.light, 0.12)}`,
    borderRadius: theme.spacing(2),
    boxShadow: `0px 20px 20px -17px ${alpha(theme.palette.primary.main, 0.5)}`,
    display: 'flex',
    overflow: 'initial',
    margin: 'auto',
    marginBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    position: 'relative',
    transition: '.3s',
    width: '600px',

    [theme.breakpoints.down('md')]: {    
        flexDirection: 'column',
    },

    [theme.breakpoints.between('lg', 1356)]: {    
        '&:nth-child(odd)': {
            marginLeft: 'initial',
        },

        '&:nth-child(even)': {
            marginRight: 'initial'
        }
    },

    ...(hidden && {
        display: 'none'
    })
}));

export const CardContentMedia = styled(CardMedia, {
    shouldForwardProp: (prop) => prop !== 'imgUrl',
})<CardContentMediaProps>(({ imgUrl, theme }) => ({
    backgroundColor: 'background.default',
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'contain',
    borderRadius: theme.spacing(1),
    height: 0,
    marginLeft: '-24px',
    marginRight: 'auto',
    marginTop: '-24px',
    paddingBottom: '48%',
    position: 'relative',
    transform: 'translateX(-8px)',
    width: '100%',

    [theme.breakpoints.down('md')]: {    
        marginLeft: '26px',
        marginRight: 'auto',
        marginTop: '-74px',
        width: '90%',
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

export const CardContentWrapper = styled(CardContent)(({
    width: '100%'
}));

export const CardContentSubtitle = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    fontSize: '12px',
    letterSpacing: '1px',
    marginBottom: '0.875em',
    textTransform: 'uppercase',
}));

export const CardContentTitle = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '0.35em',  

    [theme.breakpoints.down('lg')]: {    
        fontSize: '16px',
    },
}));

export const CardContentCaption = styled(Typography)(({ theme }) => ({
    fontSize: '0.8rem',
    fontWeight: 100,
    letterSpacing: '0.00938em',
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
}));

export const CardContentAction = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'flexRight',
})<CardContentActionProps>(({ flexRight, theme }) => ({
    display: 'flex', 
    justifyContent: 'end', 
    marginTop: theme.spacing(1),

    ...(flexRight && {
        justifyContent: 'start'
    })
}));

export const CardContentButton = styled(Button)(({
    color: '#ffffff',
    boxShadow: '0px 4px 32px rgba(247, 131, 172, 0.4)',
    paddingLeft: '24px',
    borderRadius: '100px',
    paddingRight: '24px',
    backgroundImage: 'linear-gradient(90deg, #f783ac 5%, #7950f2 95%)',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    marginTop: '20px',
    textTransform: 'uppercase', 
    transition: 'transform ease 300ms',

    '&:hover': {
        transform: 'translate(0, -10px)'
    }
}));