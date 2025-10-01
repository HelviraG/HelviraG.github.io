import { 
    alpha, 
    Avatar, 
    Box, 
    Card,
    CardContent,
    Chip, 
    Drawer, 
    IconButton, 
    Link, 
    styled,
    Typography
} from '@mui/material';

export const DrawerWrapper = styled(Drawer)(({ theme }) => ({
    '.MuiDrawer-paper': {
        backgroundColor: theme.palette.text.primary,
        overflow: 'hidden',
        position: 'relative',
        width: '600px',
        
        [theme.breakpoints.down('md')]: {
            fontSize: '11px',
            width: '100%',
        },

        [theme.breakpoints.up('xl')]: {
            width: '800px',
        },

        '&:before': {
            background: 'url(https://i.ibb.co/pJk93fF/helvira-g-a-computer-related-background-usable-as-a-wallpaper-i-46c333e3-7496-4ffb-bf64-1969c5a32f68.png) no-repeat center center',
            backgroundSize: 'cover',
            content: '""',
            display: 'block',
            height: '100%',
            opacity: 0.5,
            position: 'absolute',
            width: '100%',
        }
    }
}));

export const DrawerCloseWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: '0% 0% 0% 134%',
    border: '2px solid transparent',
    backgroundColor: alpha('#E74C3C', 0.5),
    color: 'background.default',
    padding: '8px 2px 14px 16px',

    '&:hover': {
        backgroundColor: alpha(theme.palette.background.default, 0.5),

        '& .MuiSvgIcon-root': {
            color: '#E74C3C'
        }
    }
}));

export const DrawerClose = styled(IconButton)(({ theme }) => ({
    color: theme.palette.background.default,
}));

export const DrawerAvatarWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(9),
}));

export const DrawerAvatar = styled(Avatar)(({ theme }) => ({
    border: '0.15em solid white',
    boxShadow: `inset 0 0 0 0.2em #E74C3C, inset 0 0 1em 0.3em #E74C3C, inset 1em 1em 0.4em rgba(0, 0, 0, 0.6), 0 0 0 0.2em #E74C3C, 0 0 1em 0.3em #E74C3C, 1em 1em 0.4em rgba(0, 0, 0, 0.6)`,
    height: 150,
    width: 150,

    '& img': {
        transform: 'scale(1.6)',
        objectPosition: '1px 22px',
    }
}));

export const DrawerChipWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center', 
    marginTop: theme.spacing(4)
}));

export const DrawerChip = styled(Chip)(({ theme }) => ({
    border: "0.15em solid white",
    boxShadow: "inset 0 0 0 0.2em #E74C3C, inset 0 0 1em 0.3em #E74C3C, inset 1em 1em 0.4em rgba(0, 0, 0, 0.6), 0 0 0 0.2em #E74C3C, 0 0 1em 0.3em #E74C3C, 1em 1em 0.4em rgba(0, 0, 0, 0.6)",
    color: theme.palette.background.default, 
    fontWeight: 100, 
    fontSize: 18,
    zIndex: 6000 
}));

export const SocialMediaWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    gap: theme.spacing(2),

    '& .MuiButtonBase-root': {
        backgroundColor: alpha('#E74C3C', 0.9),
        borderRadius: '20%',
        color: theme.palette.background.default,
        transition: 'all .4s ease',
        boxShadow: "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)",

        '&:hover': {
            backgroundColor: "#5170ff",
            '.MuiSvgIcon-root': {
                animation: 'jelly-move 0.9s both',
                "@keyframes jelly-move": {
                    "0%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                    "30%": {
                        transform: "scale3d(1.25, 0.75, 1)",
                    },
                    "40%": {
                        transform: "scale3d(0.75, 1.25, 1)",
                    },
                    "50%": {
                        transform: "scale3d(1.15, 0.85, 1)",
                    },
                    "65%": {
                        transform: "scale3d(0.95, 1.05, 1)",
                    },
                    "75%": {
                        transform: "scale3d(1.05, 0.95, 1)",
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                }
            }
        }
    }
}));

export const CardBox = styled(Box)(({ theme }) => ({
    overflowY: 'auto', 
    zIndex: 6000,

    '&::-webkit-scrollbar': {
        borderRadius: '20px',
        width: '4px',
    },
        
    '&::-webkit-scrollbar-track': {
        background: 'rgb(255 255 255 / 10%)',
    },
        
    '&::-webkit-scrollbar-thumb': {
        background: alpha(theme.palette.primary.main, 0.3),
        borderRadius: '50px'
    }
}));

export const CardBoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4), 
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
    backgroundColor: alpha('#E74C3C', 0.7),
    border: '0.15em solid white',
    boxShadow: '0 0 0 0.2em #E74C3C, 0 0 1em 0.3em #E74C3C, 1em 1em 0.4em rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    marginTop: 2,
    maxWidth: '80%',

    '& .MuiTypography-root': {
        color: theme.palette.background.default,
        fontWeight: 100,
    } 
}));

export const CardContentBox = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(4), 
}));

export const CardContentTypography = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(6), 
    '&:before': {
        content: '""',
        height: '1px',
        display: 'block',
        backgroundColor: 'white',
        marginBottom: '-2.2em',
    },
    '&:after': {
        backgroundColor: 'background.default',
        content: '""',
        display: 'block',
        height: '1px',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1)
    }
}));

export const CardContentAboutTypography = styled(Typography)({
    color: '#FB0F5A',
    cursor: 'none',
    fontWeight: 900,
    textDecoration: 'none',
});

export const CardContentAboutLink = styled(Link)({
    color: 'lightpink!important',
    cursor: 'none',
    fontWeight: '900!important',
    textDecoration: 'none',
});