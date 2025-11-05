import { 
    alpha, 
    Box, 
    Drawer, 
    DrawerProps, 
    IconButton, 
    List,
    ListItem, 
    ListItemIcon, 
    ListItemIconProps,
    ListItemButton, 
    ListItemButtonProps, 
    ListItemProps, 
    ListItemText, 
    ListItemTextProps, 
    styled 
} from '@mui/material';

interface MenuDrawerProps extends DrawerProps {
    menuWidth?: number;
    menuColor?: string;
}

interface MenuItemProps extends ListItemTextProps {
    isFirstItem?: boolean;
    passionItem?: boolean;
}

interface MenuListItemProps extends ListItemProps {
    isFirstItem?: boolean;
    withMargin?: boolean;
}

interface MenuListItemButtonProps extends ListItemButtonProps {
    isActive?: boolean;
}

interface MenuListIconProps extends ListItemIconProps {
    iconColor?: string;
}

export const MenuWrapper = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'menuWidth' && prop !== 'menuColor',
})<MenuDrawerProps>(({ menuWidth, menuColor, theme }) => ({
    cursor: 'none',
    '.MuiDrawer-paper': { 
        border: 'none',
        backgroundColor: alpha(theme.palette.text.primary, 0.96),

        ...(menuColor !== '' && menuColor && {
            backgroundColor: alpha(menuColor, 0.3),
        }),

        width: `${menuWidth}px`, 

        [theme.breakpoints.down(1200)]: {
            ...(menuColor !== '' && menuColor && {
                backgroundColor: alpha(theme.palette.info.main, 0.98)
            }),

            width: '60%'
        },

        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    
    '.MuiPaper-root': {
        zIndex: 140000000,
    }
}));

export const MenuIconBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'end', 
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
    margin: theme.spacing(2),
    position: 'fixed',
    zIndex: 3000
}));

export const MenuList = styled(List)(({ theme }) => ({
    padding: `${theme.spacing(4)} ${theme.spacing(2)}`,

    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2)
    }
}));

export const MenuItemText = styled(ListItemText, {
    shouldForwardProp: (prop) => prop !== 'isFirstItem' && prop !== 'passionItem',
})<MenuItemProps>(({ isFirstItem, passionItem, theme }) => ({
    '.MuiTypography-root': {
        color: theme.game.special.dark,
    },
    ...(isFirstItem && {
        '.MuiTypography-root': {
            color: alpha(theme.game.special.dark, 1),
        },
        '&:after': {
            content: '""',
            height: '1px',
            border: `1px solid ${alpha(theme.game.special.dark, 0.5)}`,
            width: '50%',
            display: 'inline-block',
            marginBottom: '4px',
            marginLeft: '1em',
        }
    }),

    ...(passionItem && {
        '.MuiTypography-root': {
            color: theme.palette.background.paper,
        },

        ...(isFirstItem && {
            '.MuiTypography-root': {
                color: alpha(theme.palette.background.paper, 1),
            },
            
            '&:after': {
                content: '""',
                height: '1px',
                border: `1px solid ${alpha(theme.palette.background.paper, 0.5)}`,
                width: '50%',
                display: 'inline-block',
                marginBottom: '4px',
                marginLeft: '1em',
            }
        }),
    })
}));

export const MenuItem = styled(ListItem, {
    shouldForwardProp: (prop) => prop !== 'isFirstItem' && prop !== 'withMargin',
})<MenuListItemProps>(({ isFirstItem, theme, withMargin }) => ({
    ...(!isFirstItem && {
        paddingLeft: 0,
        paddingRight: 0
    }),
    ...(withMargin && {
        marginTop: theme.spacing(4),
    }),
}));

export const MenuListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})<MenuListItemButtonProps>(({ isActive, theme }) => ({
    cursor: 'none',
    transition: 'all 0.4s ease',
    '& .MuiTypography-root': {
        fontWeight: 100,
    },
    ...(isActive && {
        backgroundColor: alpha('#444aff', 0.2),
        borderLeft: `4px solid #444aff`,
        borderRadius: '0 0.4em 0.4em 0',
        paddingLeft: '2em',

        '& .MuiTypography-root': {
            fontWeight: 'bold',
        },

        '.MuiSvgIcon-root': {
            color: theme.game.special.dark,
        }
    }),

    '&:hover': {
        backgroundColor: alpha('#444aff', 0.2),
        borderRadius: '0.4em',
        paddingLeft: '2.2em',

        '& .MuiTypography-root': {
            fontWeight: 'bold',
        },

        '.MuiSvgIcon-root': {
            color: theme.game.special.dark,
        }
    }
})) as typeof ListItemButton;

export const MenuListIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'iconColor',
})<MenuListIconProps>(({ iconColor, theme }) => ({
    '.MuiSvgIcon-root': {
        color: alpha(theme.game.special.dark, 0.8),
        ...(iconColor && {
            color: iconColor,
        })
    }
}));