import React, { useRef } from 'react';
import { Box, DrawerProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { RouterLink } from '../../../Styles/Components/RouterLink';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { MenuIconBox, MenuIconButton, MenuItem, MenuItemText, MenuList, MenuListIcon, MenuListItemButton, MenuWrapper } from '../../../Styles/Layout/Menu';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import FilterCenterFocusRoundedIcon from '@mui/icons-material/FilterCenterFocusRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import { Routes } from '../../../Resources/Enums/Routes';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import useClickOutside from '../../../../Hooks/useClickOutside';

interface MenuProps extends DrawerProps
{
    openMenu: boolean, 
    menuWidth: number,
    closeDrawer: () => void,
}

export const Menu = ({ openMenu, menuWidth, closeDrawer }: MenuProps) => {
    const { t } = useTranslation();
    const pathname = useLocation().pathname;

    const drawerRef = useRef(null);

    useClickOutside(drawerRef, closeDrawer);
 
    return (
        <MenuWrapper anchor="right" open={openMenu} menuWidth={menuWidth} PaperProps={{ ref: drawerRef }}>
            <MenuIconBox>
                <MenuIconButton onClick={closeDrawer}>
                    <HighlightOffRoundedIcon sx={{ color: 'background.default' }} />
                </MenuIconButton>
            </MenuIconBox>
            <Box>
                <MenuList>
                    <MenuItem isFirstItem key={t('app.menu.universe')} >
                        <MenuItemText isFirstItem primary={t('app.menu.universe')} />
                    </MenuItem>
                    <MenuItem key={t('app.menu.home')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.HOME, isActive: pathname === Routes.HOME }}>
                            <MenuListIcon><WavingHandRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('app.menu.home')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('app.menu.conferences')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CONFS, isActive: pathname === Routes.CONFS }}>
                            <MenuListIcon><VolumeUpRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('app.menu.conferences')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('app.menu.live')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.LIVE, isActive: pathname === Routes.LIVE }}>
                            <MenuListIcon><FilterCenterFocusRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('app.menu.live')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('app.menu.press')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.PRESS, isActive: pathname === Routes.PRESS }}>
                            <MenuListIcon><NewspaperRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('app.menu.press')} />
                        </MenuListItemButton>
                    </MenuItem>

                    <MenuItem isFirstItem withMargin key={t('app.menu.more')} >
                        <MenuItemText isFirstItem primary={t('app.menu.more')} />
                    </MenuItem>
                    <MenuItem key={t('app.menu.career')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CAREER, isActive: pathname === Routes.CAREER }}>
                            <MenuListIcon><CodeRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('app.menu.career')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('app.menu.contact')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CONTACT, isActive: pathname === Routes.CONTACT }}>
                            <MenuListIcon><ForumRoundedIcon /></MenuListIcon>
                            <MenuItemText primary={t('app.menu.contact')} />
                        </MenuListItemButton>
                    </MenuItem>
                </MenuList>
            </Box>
        </MenuWrapper>
    )
}