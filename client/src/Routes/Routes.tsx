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
import { QuizStepsPage } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizStepper/QuizStepsPage";
import { InitStepsPage } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizStepper/InitStepPage";
import { QuizStartPage } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizStartPage";
import { QuizLandScape } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizLandscape";
import { BurnoutQuiz } from "@/App/Pages/BurnoutQuiz";
import { BurnoutQuizSteps } from "@/App/Pages/QuizPages/BatteryLevel/BurnoutQuizSteps";
import { BurnoutQuizResult } from "@/App/Pages/QuizPages/BatteryLevel/BurnoutQuizResult";
import { TechSkillsQuiz } from "@/App/Pages/TechSkillsQuiz";
import { TechSkillsQuizSteps } from "@/App/Pages/QuizPages/TechSkills/TechSkillsQuizSteps";
import { TechSkillsQuizResult } from "@/App/Pages/QuizPages/TechSkills/TechSkillsQuizResult";
import { VideoPlayer } from "@/App/Pages/VideoPlayer";
import { NotFoundPage } from "@/App/Pages/NotFound/NotFoundPage";

export const AppRoutes = () => {
  const location = useLocation();
  const isPassionRoute = location.pathname.includes("/passion");
  const isBurnoutRoute = location.pathname.includes("/burnout");
  const isTechSkillsRoute = location.pathname.includes("/skills");
  const isPlayerRoute = location.pathname.includes("/player");
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div style={{ 
      backgroundColor: isPassionRoute ? "#FFF" : "transparent", 
      minHeight: "100vh", 
      ...((isPassionRoute || isBurnoutRoute || isTechSkillsRoute || isPlayerRoute) && {     
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
        <Route path={Links.BATTERY} element={<BurnoutQuiz isTablet={isTablet} />} />
        <Route path={Links.BATTERY_QUIZ_STEP} element={<BurnoutQuizSteps isTablet={isTablet} />} />
        <Route path={Links.BATTER_QUIZ_RESULT} element={<BurnoutQuizResult isTablet={isTablet} />} />
        <Route path={Links.SKILLS} element={<TechSkillsQuiz isTablet={isTablet} />} />
        <Route path={Links.SKILLS_QUIZ_STEP} element={<TechSkillsQuizSteps isTablet={isTablet} />} />
        <Route path={Links.SKILLS_QUIZ_RESULT} element={<TechSkillsQuizResult isTablet={isTablet} />} />
        <Route 
          path={Links.PLAYER} 
          element={<VideoPlayer isTablet={isTablet} />} 
        />
        <Route path="*" element={<NotFoundPage isTablet={isTablet} />} />
      </Routes>
    </div>
  );
};
