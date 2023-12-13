import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';

export const ScrollTopButton = () => {
    const [showUpButton, setShowUpButton] = useState<boolean>(false);
        
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleUpButton = () => {
        if (window.scrollY > 10) {
            setShowUpButton(true);
        } else {
            setShowUpButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleUpButton);
    });

    return (
        <>
            {showUpButton && (
                <Fab 
                    size="small" 
                    color="primary" 
                    sx={{
                        bottom: '10%',
                        boxShadow: '0px 4px 32px rgba(46, 51, 219, 0.4)',
                        position: 'sticky',
                        left: '5%'
                    }}
                    onClick={scrollToTop}
                >
                    <KeyboardDoubleArrowUpRoundedIcon />
                </Fab>
            )}
        </>
    )
}