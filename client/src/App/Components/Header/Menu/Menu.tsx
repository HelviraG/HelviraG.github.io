import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import FilterCenterFocusRoundedIcon from '@mui/icons-material/FilterCenterFocusRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Box, DrawerProps } from '@mui/material';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useClickOutside from '@hooks/useClickOutside';
import { Routes } from '@resources/Enums/Routes';
import { Types } from '@resources/Enums/Types';
import { RouterLink } from '@styles/Components/RouterLink';
import { MenuIconBox, MenuIconButton, MenuItem, MenuItemText, MenuList, MenuListIcon, MenuListItemButton, MenuWrapper } from '@styles/Layout/Menu';

interface MenuProps extends DrawerProps
{
    openMenu: boolean, 
    menuWidth: number,
    closeDrawer: () => void,
}

export const Menu = ({ openMenu, menuWidth, closeDrawer }: MenuProps) => {
    const { t } = useTranslation('common');
    const pathname = useLocation().pathname;

    const drawerRef = useRef(null);

    useClickOutside(drawerRef, closeDrawer);
 
    return (
        <MenuWrapper anchor={Types.RIGHT} open={openMenu} menuWidth={menuWidth} PaperProps={{ ref: drawerRef }} menuColor={'#1E1E40'} ModalProps={{ keepMounted: true, disableScrollLock: true }}>
            <MenuIconBox>
                <MenuIconButton onClick={closeDrawer}>
                    <HighlightOffRoundedIcon sx={{ color: 'background.default' }} />
                </MenuIconButton>
            </MenuIconBox>
            <Box>
                <MenuList>
                    <MenuItem isFirstItem key={t('menu.universe')} >
                        <MenuItemText isFirstItem primary={t('menu.universe')} />
                    </MenuItem>
                    <MenuItem key={t('menu.home')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.HOME, isActive: pathname === Routes.HOME }}>
                            <MenuListIcon><WavingHandRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('menu.home')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.conferences')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CONFS, isActive: pathname === Routes.CONFS }}>
                            <MenuListIcon><VolumeUpRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('menu.conferences')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.live')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.LIVE, isActive: pathname === Routes.LIVE }}>
                            <MenuListIcon><FilterCenterFocusRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('menu.live')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.explorer')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.EXPLORE, isActive: pathname === Routes.EXPLORE }}>
                            <MenuListIcon><SportsEsportsIcon /></MenuListIcon>
                            <MenuItemText primary={t('menu.explorer')} />
                            <MenuListIcon iconColor='#FF6EC7'><FiberNewOutlinedIcon fontSize='large' /></MenuListIcon>
                        </MenuListItemButton>
                    </MenuItem>

                    <MenuItem isFirstItem withMargin key={t('menu.more')} >
                        <MenuItemText isFirstItem primary={t('menu.more')} />
                    </MenuItem>
                    <MenuItem key={t('menu.press')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.PRESS, isActive: pathname === Routes.PRESS }}>
                            <MenuListIcon><ImportContactsIcon /></MenuListIcon>
                            <MenuItemText primary={t('menu.press')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.career')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CAREER, isActive: pathname === Routes.CAREER }}>
                            <MenuListIcon><CodeRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('menu.career')} />
                        </MenuListItemButton>
                    </MenuItem>
                </MenuList>
            </Box>
        </MenuWrapper>
    )
}