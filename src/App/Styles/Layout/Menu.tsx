import { 
    alpha, 
    Box, 
    Drawer, 
    DrawerProps, 
    IconButton, 
    List,
    ListItem, 
    ListItemIcon, 
    ListItemButton, 
    ListItemButtonProps, 
    ListItemProps, 
    ListItemText, 
    ListItemTextProps, 
    styled 
} from '@mui/material';

interface MenuDrawerProps extends DrawerProps {
    menuWidth?: number
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

export const MenuWrapper = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'menuWidth',
})<MenuDrawerProps>(({ menuWidth, theme }) => ({
    '.MuiDrawer-paper': { 
        backgroundColor: alpha(theme.palette.text.primary, 0.93),
        width: `${menuWidth}px` 
    }
}));

export const MenuIconBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'end', 
    marginBottom: theme.spacing(5)
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
    margin: theme.spacing(2),
    position: 'fixed'
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

export const MenuListIcon = styled(ListItemIcon)(({ theme }) => ({
    '.MuiSvgIcon-root': {
        color: alpha(theme.palette.background.default, 0.5),
    }
}));