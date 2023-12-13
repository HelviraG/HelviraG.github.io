import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { StyledBadge } from '../../Styles/Layout/Header';
import { AvatarDrawer } from '../Drawer/AvatarDrawer';

export const AppAvatar = () => {
    const [expandAvatar, setExpandAvatar] = useState<boolean>(false);

    const handleClickAvatar = () => {
        setExpandAvatar(true);
    }

    const handleCloseAvatar = () => {
        setExpandAvatar(false);
    }

    return (     
        <>        
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                onClick={handleClickAvatar}>
                <Avatar alt="Helvira Goma" src="https://i.ibb.co/fdH9J4F/ww0u-V-EZ-400x400.jpg" />
            </StyledBadge>
            <AvatarDrawer expandAvatar={expandAvatar} handleCloseAvatar={handleCloseAvatar} />
        </>   
    )
}