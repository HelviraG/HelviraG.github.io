import { FalloutPassionPage } from "@/App/Pages/FalloutPassion";
import { useMediaQuery } from "@mui/material";
import { Career } from "@pages/Career";
import { Conferences } from "@pages/Conferences";
import { Explorer } from "@pages/Explorer";
import { Home } from "@pages/Home";
import { Press } from "@pages/Press";
import { Videos } from "@pages/Videos";
import { Routes as Links } from "@resources/Enums/Routes";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { QuizStepsPage } from "@/App/Pages/FalloutOnPassion/QuizPage/QuizStepper/QuizStepsPage";
import { InitStepsPage } from "@/App/Pages/FalloutOnPassion/QuizPage/QuizStepper/InitStepPage";
import { QuizStartPage } from "@/App/Pages/FalloutOnPassion/QuizPage/QuizStartPage";
import { QuizLandScape } from "@/App/Pages/FalloutOnPassion/QuizPage/QuizLandscape";

export const AppRoutes = () => {
  const location = useLocation();
  const isPassionRoute = location.pathname.includes("/passion");
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div style={{ 
      backgroundColor: isPassionRoute ? "#FFF" : "transparent", 
      minHeight: "100vh", 
      ...(isPassionRoute && {     
        flex: 1,
        display: "flex",
        flexDirection: "column" 
      }) 
    }}>
      <Routes>
        <Route path={Links.CAREER} element={<Career isTablet={isTablet} />} />
        <Route
          path={Links.CONFS}
          element={<Conferences isTablet={isTablet} />}
        />
        <Route path={Links.HOME} element={<Home isTablet={isTablet} />} />
        <Route path={Links.LIVE} element={<Videos isTablet={isTablet} />} />
        <Route path={Links.PRESS} element={<Press isTablet={isTablet} />} />
        <Route
          path={Links.EXPLORE}
          element={<Explorer isTablet={isTablet} />}
        />
        <Route path={Links.PASSION} element={<FalloutPassionPage isTablet={isTablet} />} />
        <Route path={Links.QUIZ} element={<QuizStartPage isTablet={isTablet} />} />
        <Route path={Links.QUIZ_STEP} element={<QuizStepsPage isTablet={isTablet} />} />
        <Route path={Links.QUIZ_INIT} element={<InitStepsPage isTablet={isTablet} />} />
        <Route path={Links.QUIZ_RESULT} element={<QuizLandScape isTablet={isTablet} />} />
      </Routes>
    </div>
  );
};
