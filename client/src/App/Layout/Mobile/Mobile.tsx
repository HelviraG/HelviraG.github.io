import React, { ReactNode } from 'react';
import { Header } from '@component/Header/Header';
import { Footer } from '@component/Footer/Footer';
import { ScrollTopButton } from '@component/ScrollTopButton/ScrollTopButton';
import MouseContextProvider from '@context/MouseContextProvider';
import { Cursor } from '@cursor';

export const Mobile = ({ children, withHeader = true, withTopButton = true, withFooter = true }: { children: ReactNode; withHeader?: boolean; withTopButton?: boolean; withFooter?: boolean }) => {
    return (
        <MouseContextProvider>
            <Cursor />
            {withHeader && <Header />}
            {children}
            {withTopButton && <ScrollTopButton />}
            {withFooter && <Footer />}
        </MouseContextProvider>
    )
};