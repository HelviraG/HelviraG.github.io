import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
    CardActions,
    IconButton, 
    Typography 
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { 
    CardBox,
    CardBoxWrapper, 
    CardContentBox, 
    CardContentTypography, 
    CardWrapper, 
    DrawerAvatar, 
    DrawerAvatarWrapper, 
    DrawerChip, 
    DrawerChipWrapper, 
    DrawerClose, 
    DrawerCloseWrapper, 
    DrawerWrapper, 
    SocialMediaWrapper 
} from '../../Styles/Components/AvatarDrawerStyle';
import { useTranslation } from 'react-i18next';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import useClickOutside from '../../../Hooks/useClickOutside';
import { Routes } from '../../Resources/Enums/Routes';

interface AvatarDrawerProps {
    expandAvatar: boolean;
    handleCloseAvatar: () => void;
}

export const AvatarDrawer = ({
    expandAvatar,
    handleCloseAvatar
}: AvatarDrawerProps) => {
    const { t } = useTranslation();
    const drawerRef = useRef(null);

    useClickOutside(drawerRef, handleCloseAvatar);

    return (
        <DrawerWrapper open={expandAvatar} PaperProps={{ ref: drawerRef }}>
            <DrawerCloseWrapper>
                <DrawerClose disableRipple onClick={handleCloseAvatar}>
                    <CloseRoundedIcon />
                </DrawerClose>
            </DrawerCloseWrapper>
            <DrawerAvatarWrapper>
                <DrawerAvatar 
                    alt="Helvira Goma" 
                    src="https://i.ibb.co/fdH9J4F/ww0u-V-EZ-400x400.jpg" 
                />
            </DrawerAvatarWrapper>
            <DrawerChipWrapper>
                <DrawerChip label='Helvira Goma' />
            </DrawerChipWrapper>
            <SocialMediaWrapper>
                <IconButton component={Link} to={Routes.LINKEDIN}><LinkedInIcon /></IconButton>
                <IconButton component={Link} to={Routes.GITHUB}><GitHubIcon /></IconButton>
                <IconButton component={Link} to={Routes.TWITTER}><TwitterIcon /></IconButton>
            </SocialMediaWrapper>
            <CardBox>
                <CardBoxWrapper>
                    <CardWrapper>
                        <CardContentBox>
                            <CardContentTypography variant="h5">{t('app.menu.profile.about')}</CardContentTypography>
                            <Typography>{t('app.menu.profile.about_text')}</Typography>
                        </CardContentBox>
                        <CardActions></CardActions>
                    </CardWrapper>
                </CardBoxWrapper>
            </CardBox>
        </DrawerWrapper>
    )
}