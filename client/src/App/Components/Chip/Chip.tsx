import React from 'react';
import { Chip, ChipProps } from '@mui/material';
import { ChipResource } from '@resources/ChipResource';
import { ChipColor } from '@styles/Components/ChipColor';
import { Tags } from '@resources/Enums/Tags';

interface AppChipProps extends ChipProps {
    chipBackground?: string;
    chipBorder?: string;
    chipColor?: string;
    type: string;
}

export const AppChip = ({ 
    chipBackground, 
    chipBorder, 
    chipColor, 
    type, 
    ...rest 
}: AppChipProps) => {
    const colorChip = ChipColor(type, chipBackground, chipColor).colorChip;
    
    return (
        <>
            {type !== Tags.ALL && (
                <Chip 
                    sx={{ 
                        backgroundColor: colorChip.background,
                        border: colorChip.border,
                        color: colorChip.color, 
                        fontWeight: 100, 
                        textTransform: 'capitalize', 
                        padding: 1,

                        ...(type === Tags.YEAR && {
                            fontWeight: 600
                        })
                    }} 
                    variant='filled'
                    {...rest} 
                    icon={<ChipResource type={type} />} 
                />
            )}
        </>
    )
}