import React from 'react';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { useTranslation } from 'react-i18next';
import { HomeCTABox, HomeCTAButton } from '../../Styles/Pages/HomeStyle';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import { Routes } from '../../Resources/Enums/Routes';

export const HomeCTA = () => {
    const { t } = useTranslation();

    return (
        <HomeCTABox>
            <HomeCTAButton startIcon={<PlayCircleOutlineRoundedIcon />} href={`/#${Routes.CONFS}`}>
                {t('app.home.welcome.actions.confs')}
            </HomeCTAButton>
            <HomeCTAButton startIcon={<ForwardToInboxRoundedIcon />} href={`/#${Routes.CONTACT}`}>
                {t('app.home.welcome.actions.contact')}
            </HomeCTAButton>
        </HomeCTABox>
    )
}