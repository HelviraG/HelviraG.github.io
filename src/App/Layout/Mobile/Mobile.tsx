import React, { ReactNode } from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { ScrollTopButton } from '../../Components/ScrollTopButton/ScrollTopButton';

export const Mobile = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <ScrollTopButton />
            <Footer />
        </>
    )
};