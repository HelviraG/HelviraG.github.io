import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Header } from '@component/Header/Header';
import { Footer } from '@component/Footer/Footer';
import { ScrollTopButton } from '@component/ScrollTopButton/ScrollTopButton';
import MouseContextProvider from '@context/MouseContextProvider';
import { Cursor } from '@cursor';
import { Box, Slide } from '@mui/material';

export const Mobile = ({ children, withHeader = true, withTopButton = true, withFooter = true }: { children: ReactNode; withHeader?: boolean; withTopButton?: boolean; withFooter?: boolean }) => {
    const containerRef = useRef<HTMLElement>(null);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <MouseContextProvider>
            <Cursor />
            <Slide direction="left" in={mounted} mountOnEnter unmountOnExit container={containerRef.current}>
                <Box ref={containerRef} component="main" sx={{ overflowX: 'hidden' }}>
                    {withHeader && <Header />}
                    {children}
                    {withTopButton && <ScrollTopButton />}
                    {withFooter && <Footer />}
                </Box>
            </Slide>
        </MouseContextProvider>
    )
};