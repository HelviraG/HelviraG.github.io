import React, { ReactNode, Ref, RefObject, useEffect, useRef, useState } from 'react';
import { Header } from '@component/Header/Header';
import { Footer } from '@component/Footer/Footer';
import { ScrollTopButton } from '@component/ScrollTopButton/ScrollTopButton';
import MouseContextProvider from '@context/MouseContextProvider';
import { Cursor } from '@cursor';
import { Box, Slide, useMediaQuery } from '@mui/material';
import { Menu } from '@/App/Components/Header/Menu/Menu';
import { useSearchParams } from 'react-router-dom';

const tabletDrawer = 410;
const smartphoneDrawer = 320;

export const Desktop = ({ children, withHeader = true, withTopButton = true, withFooter = true }: { children: ReactNode; withHeader?: boolean; withTopButton?: boolean; withFooter?: boolean }) => {
    const containerRef = useRef<HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const isSmartphone = useMediaQuery("(max-width: 425px)");
    const [searchParams, setSearchParams] = useSearchParams();

    const handleOpenMenu = () => {
        setOpenMenu(true);

        const params: Record<string, string> = {};
        const search = searchParams.get('search');
        const lang = searchParams.get('lang');
        
        if (search) params.search = search;
        if (lang) params.lang = lang;
        params.menu = 'open';

        setSearchParams(params);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);

        const params: Record<string, string> = {};
        const search = searchParams.get('search');
        const lang = searchParams.get('lang');
        
        if (search) params.search = search;
        if (lang) params.lang = lang;

        setSearchParams(params);
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
                                    width: `calc(100% - ${tabletDrawer}px)`,
                                    marginRight: tabletDrawer
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