import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { AppAvatar } from '../Avatar/Avatar';
import HdrWeakRoundedIcon from '@mui/icons-material/HdrWeakRounded';
import { Menu } from './Menu/Menu';
import { ScrollText } from './ScrollText/ScrollText';
import { AppHeader } from '../../Styles/Layout/Header';

const tabletDrawer = 600;
const smartphoneDrawer = 320;

export const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const isSmartphone = useMediaQuery('(max-width: 425px)');
    
    const handleOpenMenu = () => {
        setOpenMenu(true);
      };
    
    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <AppHeader component="header">
                <Box>
                    <AppAvatar />
                </Box>
                <ScrollText />
                <Box>
                    <IconButton onClick={handleOpenMenu}>
                        <HdrWeakRoundedIcon sx={{ color: 'primary.dark' }} />
                    </IconButton>
                </Box>
            </AppHeader>
            <Menu 
                openMenu={openMenu} 
                menuWidth={isSmartphone ? smartphoneDrawer : tabletDrawer} 
                onClose={handleCloseMenu}
                closeDrawer={handleCloseMenu}
            />
        </>
    )
};