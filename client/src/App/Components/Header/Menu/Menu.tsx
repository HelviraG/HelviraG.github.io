import { alpha, Box, DrawerProps, IconButton } from '@mui/material';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Routes } from '@resources/Enums/Routes';
import { Types } from '@resources/Enums/Types';
import { RouterLink } from '@styles/Components/RouterLink';
import { MenuItem, MenuItemText, MenuList, MenuListIcon, MenuListItemButton, MenuWrapper } from '@styles/Layout/Menu';
import { ArrowForward, BookmarkTwoTone, CodeTwoTone, FilterCenterFocusTwoTone, ImportContactsTwoTone, NewspaperTwoTone, PsychologyTwoTone, SportsEsportsTwoTone, VolumeUpTwoTone, WavingHandTwoTone } from '@mui/icons-material';

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
 
    return (
        <MenuWrapper variant={'persistent'} anchor={Types.RIGHT} open={openMenu} menuWidth={menuWidth} PaperProps={{ ref: drawerRef }} menuColor={'#6d74db'} ModalProps={{ keepMounted: true, disableScrollLock: true }}>
            <Box 
                sx={(theme) => ({ 
                    alignItems: 'center',
                    borderBottom: `.5px solid ${alpha('#6D74DB', 0.3)}`, 
                    display: 'flex',
                    height: '81px',
                    padding: '0 16px',

                    [theme.breakpoints.down(1200)]: {
                        padding: '16px',
                        borderBottom: `.5px solid ${alpha('#dddeef', 0.3)}`
                    }
                })}
            >
                <IconButton onClick={closeDrawer}>
                    <ArrowForward sx={(theme) => ({ color: theme.game.special.dark })} />
                </IconButton>
            </Box>
            <Box>
                <MenuList>
                    <MenuItem isFirstItem key={t('menu.universe')} >
                        <MenuItemText isFirstItem primary={t('menu.universe')} />
                    </MenuItem>
                    <MenuItem key={t('menu.home')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.HOME, isActive: pathname === Routes.HOME }}>
                            <MenuListIcon><WavingHandTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.home')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.conferences')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CONFS, isActive: pathname === Routes.CONFS }}>
                            <MenuListIcon><VolumeUpTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.conferences')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.abstract')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.ABSTRACT, isActive: pathname === Routes.ABSTRACT }}>
                            <MenuListIcon><BookmarkTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.abstract')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.live')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.LIVE, isActive: pathname === Routes.LIVE }}>
                            <MenuListIcon><FilterCenterFocusTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.live')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.explorer')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.EXPLORE, isActive: pathname === Routes.EXPLORE }}>
                            <MenuListIcon><SportsEsportsTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.explorer')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem isFirstItem withMargin key={t('menu.more')} >
                        <MenuItemText isFirstItem primary={t('menu.more')} />
                    </MenuItem>
                    <MenuItem key={t('menu.press')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.PRESS, isActive: pathname === Routes.PRESS }}>
                            <MenuListIcon><ImportContactsTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.press')} />
                        </MenuListItemButton>
                    </MenuItem>
                    <MenuItem key={t('menu.career')}>
                        <MenuListItemButton component={RouterLink} {...{ to: Routes.CAREER, isActive: pathname === Routes.CAREER }}>
                            <MenuListIcon><CodeTwoTone /></MenuListIcon>
                            <MenuItemText primary={t('menu.career')} />
                        </MenuListItemButton>
                    </MenuItem>
                </MenuList>
            </Box>
        </MenuWrapper>
    )
}
