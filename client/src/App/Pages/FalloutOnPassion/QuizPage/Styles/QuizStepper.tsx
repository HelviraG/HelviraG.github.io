import {
  Box,
  BoxProps,
  CardContent,
  Dialog,
  MobileStepper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

interface QuizContentBoxProps extends BoxProps {
  isQuizResult: boolean;
}

export const DialogStyle = styled(Box)(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: "100%",
    position: "relative",
  },

  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

export const LoadDialogStyle = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: "74%",
  },

  [theme.breakpoints.down(767)]: {
    maxWidth: "100%",
  },
}));

// QuizStepper Part
export const DialogPaper = (isMobile: boolean, isFirstStep: boolean) => {
  const theme = useTheme();

  return {
    dialogProps: {
      borderRadius: "23px",
      display: "flex",
      margin: "0 auto",
      overflow: "hidden",

      ...(isFirstStep && {
        maxWidth: "70%",
      }),

      ...(isMobile && {
        maxWidth: "100%",
      }),

      maxWidth: "70%",

      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
      },

      [theme.breakpoints.between(600, 1030)]: {
        maxWidth: "70%",
      },
    },
  };
};

export const DialogBox = styled(Box)({
  padding: 0,
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

export const CardContentStyle = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0!important",
});

export const CardContentBody = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isQuizResult",
})<QuizContentBoxProps>(({ isQuizResult, theme }) => ({
  backgroundColor: theme.game.purple.dark,
  zIndex: 3,
  padding: "10px 33px 0px",
  width: "100%",

  ...(isQuizResult && {
    padding: "14px 32px 0px",
  }),

  ...(!isQuizResult && {
    [theme.breakpoints.down("lg")]: {
      padding: "10px 14px 0px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 2px 0px",
    },
  }),
}));

export const QuizContentBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isQuizResult",
})<QuizContentBoxProps>(({ isQuizResult, theme }) => ({
  backgroundColor: theme.game.purple.light,
  borderRadius: "24px 24px 0px 0px",
  marginTop: theme.spacing(1),
  position: "relative",

  ...(isQuizResult && {
    borderRadius: "24px",
    marginBottom: theme.spacing(3),
  }),

  [theme.breakpoints.down(500)]: {
    paddingBottom: theme.spacing(6),
  },
}));

export const QuizContentTitleBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(0)} ${theme.spacing(4)}`,

  [theme.breakpoints.down("lg")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(0)} ${theme.spacing(2)}`,
  },
}));

export const QuizContentTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: 1.4,
  textAlign: "center",

  [theme.breakpoints.down("lg")]: {
    fontSize: "15px",
  },
}));

// Stepper Part
export const StepperBox = styled(MobileStepper)(({ theme }) => ({
  backgroundColor: theme.game.purple.dark,
  margin: "0 auto",
  width: "100%",
  display: "flex",

  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
  },

  "& .MuiMobileStepper-dots": {
    justifyContent: "center",
    width: "100%",

    "& .MuiMobileStepper-dot": {
      backgroundColor: "#1F2429",
      borderRadius: "4px",
      height: "3px",
      flex: 1,

      [theme.breakpoints.down("lg")]: {
        borderRadius: "50%",
        flex: "none",
        height: "8px",
        width: "8px",
      },

      "&.MuiMobileStepper-dotActive": {
        backgroundColor: theme.game.purple.light,
      },
    },
  },
}));

// Step Part
export const StepBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "194px",
  justifyContent: "space-around",
  padding: `0px ${theme.spacing(4)}`,
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    padding: `0px ${theme.spacing(1)}`,
  },

  [theme.breakpoints.down("md")]: {
    padding: "0px",
  },
}));

export const StepButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  marginTop: "15px",
  gap: theme.spacing(2),
  flexWrap: "wrap",

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1.6),
  },

  [theme.breakpoints.between(376, 426)]: {
    gap: theme.spacing(2.5),
  },

  [theme.breakpoints.between(427, 1044)]: {
    gap: theme.spacing(1),
  },

  [theme.breakpoints.up("xl")]: {
    gap: theme.spacing(2),
  },
}));
