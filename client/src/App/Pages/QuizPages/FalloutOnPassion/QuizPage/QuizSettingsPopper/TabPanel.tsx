import { CopyrightPanel } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/CopyrightPanel";
import { InfoPanel } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/InfoPanel";
import { LinksPanel } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/LinksPanel";
import { TabPanelWrapper } from "@/App/Pages/QuizPages/FalloutOnPassion/QuizPage/QuizSettingsPopper/TabPanel/TabsPanelStyle";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`quiz-tab-panel-${index}`}
      aria-labelledby={`quiz-tab-${index}`}
      style={{
        color: '#FFFF',
        ...(value === index && {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "-webkit-fill-available",
        }),
      }}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            color: '#FFFF',
            ...(value === 1 && {
              display: "flex",
              flexDirection: "column",
              height: "-webkit-fill-available",
            }),
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export const TabPanel = ({ value }: { value: number }) => {
  return (
    <TabPanelWrapper value={value}>
      <InfoPanel value={value} />
      <CopyrightPanel value={value} />
      <LinksPanel value={value} />
    </TabPanelWrapper>
  );
};
