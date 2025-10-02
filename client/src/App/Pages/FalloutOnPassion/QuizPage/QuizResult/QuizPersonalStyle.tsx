import { Box, BoxProps, styled, Tabs, TabsProps } from "@mui/material";
import React from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface QuizPersonalImgBoxProps extends BoxProps {
  imgUrl: string;
}

interface QuizPersonalTabsProps extends TabsProps {
  isMobile: boolean;
  tabValue: number;
}

export const QuizPersonalWrapperBox = styled(Box)(({ theme }) => ({
  position: 'relative', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  flex: 1,

  [theme.breakpoints.down(800)]: {
    flexDirection: 'column',
    flex: 0,
    maxHeight: '718px !important',
    overflowY: 'scroll',
    justifyContent: 'flex-start',
  },

  [theme.breakpoints.down(500)]: {
    maxHeight: '620px !important',
  },

  [theme.breakpoints.down(400)]: {
    maxHeight: '600px !important',
  },
}));

export const QuizPersonalHeaderWrapper = styled(Box)(({ theme }) => ({
  padding: '2em', 
  width: '60%',  

  [theme.breakpoints.down(800)]: { 
    width: '100%', 
  },

  [theme.breakpoints.down(500)]: {
    padding: '0em 10px',
  },
}));

export const QuizPersonalImgBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "imgUrl",
})<QuizPersonalImgBoxProps>(({ theme, imgUrl }) => ({
  background: `url(${imgUrl}) center no-repeat`,
  backgroundSize: "cover",
  padding: "196px",
  marginTop: "-33px",
  borderRadius: "24px 24px 0px 0px",
  width: "100%",

  [theme.breakpoints.down(800)]: {
    backgroundSize: "contain",
  },

  [theme.breakpoints.down(500)]: {
    backgroundSize: "cover",
    padding: "170px",
  },

  [theme.breakpoints.down(350)]: {
    padding: "150px",
  },
}));

export const QuizPersonalHeader = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,

  "& .MuiTypography-root": {
    color: "#341F97",
    fontStyle: "italic",
    fontWeight: 900,
  },
}));

export const QuiPersonalContentWrapper = styled(Box)(({ theme }) => ({
  padding: "24px",
  overflowY: "auto",
  backgroundColor: '#F2E7FF', 
  display: 'flex', 
  height: '-webkit-fill-available', 
  alignItems: 'center', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  width: '50%',

  [theme.breakpoints.down(800)]: {
    width: '100%',
    padding: theme.spacing(2),
    height: 'auto',
    overflowY: 'visible',
  },
}));

export const QuizPersonalContentHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: `${theme.spacing(0)} ${theme.spacing(4)}`,

  "& .MuiTypography-root": {
    textAlign: "justify",
  },
}));

export const QuizPersonalContentBody = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(0.5),
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(6),

  [theme.breakpoints.down(767)]: {
    flexDirection: "column",
  },

  "& #full-width-tabpanel-0": {
    "& .MuiTypography-root:first-of-type": {
      color: '#5352ed',
    },
  },

  "& #full-width-tabpanel-1": {
    "& .MuiTypography-root:first-of-type": {
      color: theme.game.special.orange,
    },
  },

  "& #full-width-tabpanel-2": {
    "& .MuiTypography-root:first-of-type": {
      color: "#5f27CD",
    },
  },

  "& #full-width-tabpanel-3": {
    "& .MuiTypography-root:first-of-type": {
      color: "#be2edd",
    },
  },

  "& #full-width-tabpanel-4": {
    "& .MuiTypography-root:first-of-type": {
      color: "#0652DD",
    },
  },
}));

export const QuizPersonalContentTabs = styled(Tabs, {
  shouldForwardProp: (prop) => prop !== "isMobile" && prop !== "tabValue",
})<QuizPersonalTabsProps>(({ tabValue, isMobile, theme }) => ({
  borderRight: "none",
  borderColor: "divider",
  borderBottom: "none",
  width: "100%",

  ...(isMobile && {
    borderRight: "none",
  }),

  ...(tabValue === 0 && {
    "& .MuiTabs-indicator": {
      backgroundColor: '#5352ed',
    },

    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      color: '#5352ed',
    },
  }),

  ...(tabValue === 1 && {
    "& .MuiTabs-indicator": {
      backgroundColor: theme.game.special.orange,
    },

    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      color: theme.game.special.orange,
    },
  }),

  ...(tabValue === 2 && {
    "& .MuiTabs-indicator": {
      backgroundColor: "#5f27CD",
    },

    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      color: "#5f27CD",
    },
  }),

  ...(tabValue === 3 && {
    "& .MuiTabs-indicator": {
      backgroundColor: "#be2edd",
    },

    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      color: "#be2edd",
    },
  }),

  ...(tabValue === 4 && {
    "& .MuiTabs-indicator": {
      backgroundColor: "#0652DD",
    },

    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      color: "#0652DD",
    },
  }),

  "& .MuiTabs-flexContainer": {
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const QuizPersonalContentFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const TabPanelWrapper = styled(Box)(({ theme }) => ({
  marginTop: '2em', 
  borderRadius: '32px', 
  padding: '2em', 
  backgroundColor: '#F2E7FF', 
  height: '280px',

  [theme.breakpoints.down(500)]: { 
    height: 'auto', 
    padding: 0,
  },
}));
