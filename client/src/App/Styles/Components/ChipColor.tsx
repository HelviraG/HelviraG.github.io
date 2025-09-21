import { useTheme } from '@mui/material';
import { Tags } from '../../Resources/Enums/Tags';

export const ChipColor = (type: string, chipBackground?: string, chipColor?: string) => {
    const theme = useTheme();

    const getChipColor = () => {
        switch(type) {
            case Tags.PUB:
                return {
                    background: 'background.default',
                    border: `1px solid ${theme.palette.error.light}`,
                    color: theme.palette.error.main
                };
            case Tags.VIDEO:
                return {
                    background: 'background.default',
                    border: '1px solid #E0C2FF',
                    color: '#9C87B2'
                };
            case Tags.INTERVIEW:
                return {
                    background: 'background.default',
                    border: `1px solid ${theme.palette.warning.main}`,
                    color: theme.palette.warning.main
                };
            case Tags.LIVE:
            case Tags.REPLAY:
                return {
                    background: 'background.default',
                    border: '1px solid #FF4757',
                    color: '#FF4757'
                };
            case Tags.YEAR:
                return {
                    background: 'background.default',
                    border: '1px solid #2F3542',
                    color: '#2F3542'
                };
            default:
                return {
                    background: 'background.default',
                    border: `1px solid ${chipColor}`,
                    color: chipColor
                };
        }
    }

    return { colorChip: getChipColor() }
}