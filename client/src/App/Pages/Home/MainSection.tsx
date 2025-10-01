import React from "react";
import { BuyCoffeeSection } from "./BuyCoffeeSection";
import { HeroSection } from "./HeroSection";
import { MainSectionBox } from "@/App/Styles/Pages/HomeStyle";

export const MainSection = () => {
  return (
    <MainSectionBox data-testid={"home-hero-section"}>
      <HeroSection />

      <BuyCoffeeSection />
    </MainSectionBox>
  );
};
