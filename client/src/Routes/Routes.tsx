import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import { Conferences } from '../App/Pages/Conferences';
import { Contact } from '../App/Pages/Contact';
import { Home } from '../App/Pages/Home';
import { Videos } from '../App/Pages/Videos';
import { Press } from '../App/Pages/Press';
import { Routes as Links } from '../App/Resources/Enums/Routes';
import { Career } from '../App/Pages/Career';

export const AppRoutes = () => {
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Routes>
            <Route path={Links.CAREER} element={<Career isTablet={isTablet} />} />
            <Route path={Links.CONFS} element={<Conferences isTablet={isTablet} />} />
            <Route path={Links.CONTACT} element={<Contact isTablet={isTablet} />} />
            <Route path={Links.HOME} element={<Home isTablet={isTablet} />} />
            <Route path={Links.LIVE} element={<Videos isTablet={isTablet} />} />
            <Route path={Links.PRESS} element={<Press isTablet={isTablet} />} />
        </Routes>
    )
}