import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Header } from '@component/Header/Header';
import { Footer } from '@component/Footer/Footer';
import { ScrollTopButton } from '@component/ScrollTopButton/ScrollTopButton';
import MouseContextProvider from '@context/MouseContextProvider';
import { Cursor } from '@cursor';
import { Box, Slide, useMediaQuery } from '@mui/material';
import { Menu } from '@/App/Components/Header/Menu/Menu';

const tabletDrawer = 600;
const smartphoneDrawer = 320;

export const Mobile = ({ children, withHeader = true, withTopButton = true, withFooter = true }: { children: ReactNode; withHeader?: boolean; withTopButton?: boolean; withFooter?: boolean }) => {
    const containerRef = useRef<HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const isSmartphone = useMediaQuery("(max-width: 425px)");

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <MouseContextProvider>
            <Cursor />
            <Slide direction="left" in={mounted} mountOnEnter unmountOnExit container={containerRef.current}>
                <Box ref={containerRef}>
                    <Box 
                        component="main" 
                        sx={(theme) => ({ 
                            overflowX: 'hidden',
                            ...(openMenu && { 
                                [theme.breakpoints.up(1200)]: {
                                    width: '71%' 
                                } 
                            }) 
                        })}
                    >
                        {withHeader && <Header handleOpenMenu={handleOpenMenu} openMenu={openMenu} />}
                        {children}
                        {withTopButton && <ScrollTopButton />}
                        {withFooter && <Footer openMenu={openMenu} />}
                    </Box>
                    <Menu
                        openMenu={openMenu}
                        menuWidth={isSmartphone ? smartphoneDrawer : tabletDrawer}
                        onClose={handleCloseMenu}
                        closeDrawer={handleCloseMenu}
                    />
                </Box>
            </Slide>
        </MouseContextProvider>
    )
};