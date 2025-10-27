import React, { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import { StyledBadge } from '@styles/Layout/Header';
import { AvatarDrawer } from '../Drawer/AvatarDrawer';
import { useLocation } from 'react-router-dom';
import { Routes } from '@resources/Enums/Routes';

export const AppAvatar = () => {
    const [expandAvatar, setExpandAvatar] = useState<boolean>(false);
    const location = useLocation();

    const pathname = location.pathname;

    const handleClickAvatar = () => {
        setExpandAvatar(true);
    }

    const handleCloseAvatar = () => {
        setExpandAvatar(false);
    }

    return (     
        <Box 
            sx={{    
                ...(pathname !== Routes.HOME && { 
                    position: 'absolute',
                    top: '3.8em',
                    left: '2em'
                })
            }}
        >        
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                onClick={handleClickAvatar}
                isRedDot={pathname === Routes.EXPLORE}
                isHomePage={pathname === Routes.HOME}
            >
                <Avatar alt="Helvira Goma Avatar" src="https://i.ibb.co/qMnXS5Vx/Design-sans-titre-20-removebg-preview.png" />
            </StyledBadge>
            <AvatarDrawer expandAvatar={expandAvatar} handleCloseAvatar={handleCloseAvatar} />
        </Box>   
    )
}