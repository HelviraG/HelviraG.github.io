import { Tags } from '../../Resources/Enums/Tags';

export const ChipColor = (type: string, chipBackground?: string, chipColor?: string) => {
    const getChipColor = () => {
        switch(type) {
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