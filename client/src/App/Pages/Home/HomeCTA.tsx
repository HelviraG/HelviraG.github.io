import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useTranslation } from 'react-i18next';
import { Routes } from '@resources/Enums/Routes';
import { HomeCTABox, HomeCTAButton } from '@styles/Pages/HomeStyle';

export const HomeCTA = () => {
    const { t } = useTranslation();

    return (
        <HomeCTABox>
            <HomeCTAButton startIcon={<PlayCircleOutlineRoundedIcon />} href={`${Routes.CONFS}`}>
                {t('app.home.welcome.actions.confs')}
            </HomeCTAButton>
            <HomeCTAButton startIcon={<ForwardToInboxRoundedIcon />} href={`${Routes.CONTACT}`}>
                {t('app.home.welcome.actions.contact')}
            </HomeCTAButton>
            <HomeCTAButton startIcon={<VideogameAssetIcon />} href={`${Routes.EXPLORE}`}>
                {t('app.home.welcome.actions.explore')}
            </HomeCTAButton>
        </HomeCTABox>
    )
}