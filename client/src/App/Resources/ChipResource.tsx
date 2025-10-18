import React from 'react';
import { Tags } from './Enums/Tags';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import SatelliteAltRoundedIcon from '@mui/icons-material/SatelliteAltRounded';
import SensorsIcon from '@mui/icons-material/Sensors';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
import FlashOffIcon from '@mui/icons-material/FlashOff';

export const ChipResource = ({ type }: { type: string }) => {
    const renderIcon = () => {
        switch (type) {
            case Tags.DISCOVERY:
                return <SatelliteAltRoundedIcon fontSize='small' />;
            case Tags.INTERVIEW:
                return <KeyboardVoiceRoundedIcon fontSize='small' />;
            case Tags.LIVE:
                return <CenterFocusStrongRoundedIcon fontSize='small' />;
            case Tags.PUB:
                    return <TheatersRoundedIcon fontSize='small' />;
            case Tags.QUICKY:
                return <ElectricBoltRoundedIcon fontSize='small' />;
            case Tags.REPLAY:
                return <SensorsIcon fontSize='small' />;
            case Tags.TECH:
            case Tags.TECH_NOCODE:
                return <LanguageRoundedIcon fontSize='small' />;
            case Tags.HUMAN_TECH:
                return <PublicRoundedIcon fontSize='small' />;
            case Tags.VIDEO:
                return <MovieRoundedIcon fontSize='small' />;
            case Tags.BURNOUT:
                return <FlashOffIcon fontSize='small' />;
            default:
                return <></>;
        }
    }

    return <>{renderIcon()}</>
}