import React, { ReactNode } from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { ScrollTopButton } from '../../Components/ScrollTopButton/ScrollTopButton';
import MouseContextProvider from '../../../Context/MouseContextProvider';
import { Cursor } from '../../../Components/Cursor/Cursor';

export const Desktop = ({ children }: { children: ReactNode }) => {
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