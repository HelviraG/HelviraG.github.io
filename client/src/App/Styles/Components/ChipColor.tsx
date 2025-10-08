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
            case Tags.DISCOVERY:
            case Tags.TALK:
            case Tags.VIDEO:
                return {
                    background: 'background.default',
                    border: '1px solid #E0C2FF',
                    color: '#9C87B2'
                };
            case Tags.BEGINNER:
            case Tags.QUICKY:
            case Tags.INTERVIEW:
                return {
                    background: 'background.default',
                    border: `1px solid ${theme.palette.warning.main}`,
                    color: theme.palette.warning.main
                };
            case Tags.HUMAN_TECH:
                return {
                    background: 'background.default',
                    border: `1px solid ${theme.palette.success.main}`,
                    color: theme.palette.success.main
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
            case Tags.PASSION:
                return {
                    background: 'background.default',
                    border: '1px solid #E93918',
                    color: '#E93918'
                };
            case Tags.QUIZ:
                return {
                    background: 'background.default',
                    border: '1px solid #F1931D',
                    color: '#F1931D'
                };
            case Tags.TECH:
            case Tags.TECH_NOCODE:
            case Tags.FALLOUT:
                return {
                    background: 'background.default',
                    border: '1px solid #7d5fff',
                    color: '#7d5fff'
                };
            case Tags.QUIZ_PASSION:
                return {
                    background: 'background.default',
                    border: '1px solid #3c40c6',
                    color: '#3c40c6'
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