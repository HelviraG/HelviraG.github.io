import React from "react";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Desktop } from "../Layout/Desktop/Desktop";
import { Mobile } from "../Layout/Mobile/Mobile";
import { BuyMeACoffee } from "./Home/BuyMeACoffee";
import { FalloutPassion } from "./FalloutOnPassion/FalloutOnPassion";
import { Box } from "@mui/material";

export const FalloutPassionPage = ({ isTablet }: { isTablet: boolean }) => {
  const { t } = useTranslation();
  
    useDocumentTitle(`Helvira Goma | 🕹️ ${t("app.menu.explorer")}`);
  
    return (
      <>
        {isTablet ? (
          <Mobile>
            <Box sx={{ backgroundColor: 'hotpink' }}>
              <FalloutPassion />
            </Box>
            
            <BuyMeACoffee />
          </Mobile>
        ) : (
          <Desktop>
            <FalloutPassion />
            
            <BuyMeACoffee />
          </Desktop>
        )}
      </>
    );
};

