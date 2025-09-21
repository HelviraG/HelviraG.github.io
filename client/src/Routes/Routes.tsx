import { useMediaQuery } from "@mui/material";
import { Career } from "@pages/Career";
import { Conferences } from "@pages/Conferences";
import { Contact } from "@pages/Contact";
import { Explorer } from "@pages/Explorer";
import { Home } from "@pages/Home";
import { Press } from "@pages/Press";
import { Videos } from "@pages/Videos";
import { Routes as Links } from "@resources/Enums/Routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Routes>
        <Route path={Links.CAREER} element={<Career isTablet={isTablet} />} />
        <Route
          path={Links.CONFS}
          element={<Conferences isTablet={isTablet} />}
        />
        <Route path={Links.CONTACT} element={<Contact isTablet={isTablet} />} />
        <Route path={Links.HOME} element={<Home isTablet={isTablet} />} />
        <Route path={Links.LIVE} element={<Videos isTablet={isTablet} />} />
        <Route path={Links.PRESS} element={<Press isTablet={isTablet} />} />
        <Route
          path={Links.EXPLORE}
          element={<Explorer isTablet={isTablet} />}
        />
      </Routes>
    </>
  );
};
