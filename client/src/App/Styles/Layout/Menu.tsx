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
    isFirstItem?: boolean
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
        backgroundColor: alpha(theme.palette.text.primary, 0.93),
        ...(menuColor !== '' && menuColor && {
            backgroundColor: alpha(menuColor, 0.93),
        }),
        width: `${menuWidth}px`, 

        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    }
}));

export const MenuIconBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'end', 
    marginBottom: theme.spacing(5)
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
    margin: theme.spacing(2),
    position: 'fixed',
    zIndex: 3000
}));

export const MenuList = styled(List)(({ theme }) => ({
    padding: theme.spacing(4),
}));

export const MenuItemText = styled(ListItemText, {
    shouldForwardProp: (prop) => prop !== 'isFirstItem',
})<MenuItemProps>(({ isFirstItem, theme }) => ({
    '.MuiTypography-root': {
        color: theme.palette.background.default,
    },
    ...(isFirstItem && {
        '.MuiTypography-root': {
            color: alpha(theme.palette.background.default, 0.4),
        },
        '&:after': {
            content: '""',
            height: '1px',
            border: `1px solid ${alpha(theme.palette.background.default, 0.2)}`,
            width: '50%',
            display: 'inline-block',
            marginBottom: '4px',
            marginLeft: '1em',
        }
    }),
}));

export const MenuItem = styled(ListItem, {
    shouldForwardProp: (prop) => prop !== 'isFirstItem' && prop !== 'withMargin',
})<MenuListItemProps>(({ isFirstItem, theme, withMargin }) => ({
    ...(!isFirstItem && {
        paddingLeft: theme.spacing(4),
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
        backgroundColor: alpha(theme.palette.background.default, 0.1),
        borderRadius: '0.4em',
        paddingLeft: '2em',

        '& .MuiTypography-root': {
            fontWeight: 'bold',
        },

        '.MuiSvgIcon-root': {
            color: theme.palette.background.default,
        }
    }),

    '&:hover': {
        backgroundColor: alpha(theme.palette.background.default, 0.1),
        borderRadius: '0.4em',
        paddingLeft: '2em',

        '& .MuiTypography-root': {
            fontWeight: 'bold',
        },

        '.MuiSvgIcon-root': {
            color: theme.palette.background.default,
        }
    }
})) as typeof ListItemButton;

export const MenuListIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'iconColor',
})<MenuListIconProps>(({ iconColor, theme }) => ({
    '.MuiSvgIcon-root': {
        color: alpha(theme.palette.background.default, 0.5),
        ...(iconColor && {
            color: iconColor,
        })
    }
}));