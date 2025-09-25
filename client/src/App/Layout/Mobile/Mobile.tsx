import React, { ReactNode } from 'react';
import { Header } from '@component/Header/Header';
import { Footer } from '@component/Footer/Footer';
import { ScrollTopButton } from '@component/ScrollTopButton/ScrollTopButton';
import MouseContextProvider from '@context/MouseContextProvider';
import { Cursor } from '@cursor';

export const Mobile = ({ children }: { children: ReactNode }) => {
    return (
        <MouseContextProvider>
            <Cursor />
            <Header />
            {children}
            <ScrollTopButton />
            <Footer />
        </MouseContextProvider>
    )
};