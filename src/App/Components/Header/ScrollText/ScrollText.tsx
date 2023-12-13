import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import useScrollText from '../../../../Hooks/useScrollText';

export const ScrollText = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [text, setText] = useState<string>('');

    const { pageScrollText } = useScrollText(); 

    const handleScrollText = () => {
        const offsetHeight = document.documentElement.offsetHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

        setScrollY(window.scrollY);
        
        if (pageScrollText && pageScrollText[0]) {
            if (hasReachedBottom) {
                setText(pageScrollText[0].last_section);
            } else if (window.scrollY < 2) {
                setText(pageScrollText[0].first_section);
            } else if (window.scrollY >= 2 && window.scrollY <= 230) {
                setText(pageScrollText[0].second_section);
            } else {
                setText(pageScrollText[0].third_section);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollText);
    });

    return (
        <Box sx={{ textAlign: 'center', width: '50%' }}>
            <Typography variant="body1">{scrollY ? text : pageScrollText[0].first_section}</Typography>
        </Box>
    )
}