import { Box, BoxProps, Palette, PaletteColor, styled } from '@mui/material';

export type PaletteKey = keyof {
    [Key in keyof Palette as Palette[Key] extends PaletteColor ? Key : never]: true;
}

interface TitleBoxProps extends BoxProps {
    quote?: string;
    titleColor?: string;
}

export const TitleWrapper = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: theme.spacing(20),

    [theme.breakpoints.up('lg')]: {
        margin: '0 auto',
        maxWidth: '80%'
    },

    [theme.breakpoints.up('xl')]: {
        maxWidth: '60%'
    },
}));

export const TitleBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'titleColor' && prop !== 'quote',
})<TitleBoxProps>(({ quote, titleColor, theme }) => ({
    alignSelf: 'end',
    position: 'relative',

    'h2': { 
        color: theme.palette.background.default,
        fontSize: '8em',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',

        '&:nth-child(1)': {
            color: 'transparent',
            WebkitTextStroke: `2px ${theme.palette[titleColor as PaletteKey].main}`,
        },

        '&:nth-child(2)': {
            color: `${theme.palette[titleColor as PaletteKey].main}`,
            animation: 'wave 4s ease-in-out infinite',
        },

        "@keyframes wave": {
            "0%, 100%": {
                clipPath: "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
            },
            "50%": {
                clipPath: "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
            }
        }
    },

    '&:after': {
        content: `'${quote}'`,
        display: 'block',
        fontSize: '12px',
        fontWeight: 500,
        top: '70px',
        width: '364px',
        position: 'absolute',
        right: '-138px',

        [theme.breakpoints.down('xs')]: {
            fontSize: '11px',
            width: '250px',
        },

        [theme.breakpoints.up('xl')]: {
            fontSize: '18px',
            marginTop: theme.spacing(3),
            textAlign: 'right'
        },
    },

    [theme.breakpoints.up('xl')]: {
        'h2': {
            fontSize: '10em',
        }
    },
}));

