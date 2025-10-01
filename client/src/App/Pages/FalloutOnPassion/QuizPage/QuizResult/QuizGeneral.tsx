import { Box, Chip, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { QuizLayout } from "../../Layouts/QuizLayout";
import { useSearchParams } from "react-router-dom";
import { GeneralDashboard } from "./QuizGeneral/GeneralDashboard";
import { CategoryDashboard } from "./QuizGeneral/CategoryDashboard";
import { 
  DashboardButton, 
  DashboardButtonsWrapper, 
  DashboardLeftWrapperBox, 
  DashboardRightBox, 
  DashboardRightWrapperBox, 
  DashboardWrapper 
} from "./QuizGeneral/QuizGeneralStyle";

export const QuizGeneral = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedActivity, setSelectedActivity] = useState<string | null>(searchParams.get("category"));
  
  const handleCategoryClick = (activity: string) => {
    if (selectedActivity === activity) {
      // unselect → remove from URL & state
      searchParams.delete("category");
      setSearchParams(searchParams);
      setSelectedActivity(null);
    } else {
      // select → set new category in URL & state
      setSearchParams({ category: activity });
      setSelectedActivity(activity);
    }
  };

  useEffect(() => {
    setSelectedActivity(searchParams.get("category"));
  }, [searchParams]);

  return (
    <>
      <QuizLayout buttons={<></>} withFooter={false}>
        <DashboardWrapper>
          <DashboardLeftWrapperBox selectedActivity={selectedActivity}>
            {selectedActivity && (
              <CategoryDashboard cat={selectedActivity} />
            )}
            {!selectedActivity && (
              <GeneralDashboard />
            )}
          </DashboardLeftWrapperBox>
          <DashboardRightWrapperBox>
            <DashboardRightBox>
              <Divider textAlign={"right"} variant={"fullWidth"}>
                <Chip label={'All the results'} />
              </Divider>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 300 }}>Pick up your lane!</Typography>
              </Box>
              <DashboardButtonsWrapper>
                {['coding', 'gaming', 'design', 'data'].map((activity: string) => (
                  <DashboardButton 
                    variant="contained" 
                    key={activity} 
                    isSelectedActivity={selectedActivity === activity}
                    onClick={() => handleCategoryClick(activity)}
                  >
                    {activity}
                  </DashboardButton>
                ))}
              </DashboardButtonsWrapper>
            </DashboardRightBox>
          </DashboardRightWrapperBox>
        </DashboardWrapper>
      </QuizLayout>
    </>
  );
};
