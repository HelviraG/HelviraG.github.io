import {
  Box,
  BoxProps,
  MobileStepper,
  styled,
  Typography,
} from "@mui/material";

interface QuizContentBoxProps extends BoxProps {
  isQuizResult: boolean;
}

// QuizStepper Part
export const CardContentBody = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isQuizResult",
})<QuizContentBoxProps>(({ isQuizResult, theme }) => ({
  backgroundColor: '#B8E986', 
  borderRadius: '32px',
  padding: '4em 2em',
  width: '80%',
  margin: '0 auto',

  ...(isQuizResult && {
    padding: "14px 32px 0px",
  }),

  ...(!isQuizResult && {
    [theme.breakpoints.down(601)]: {
      margin: '2em 0',
    },

    [theme.breakpoints.down(800)]: {
      maxWidth: '90%',
      width: '90%'
    },

    [theme.breakpoints.down("lg")]: {
      padding: "10px 2em 0px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 2px 0px",
    },
  }),
}));

export const QuizContentBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isQuizResult",
})<QuizContentBoxProps>(({ isQuizResult, theme }) => ({
  marginTop: theme.spacing(1),
  position: "relative",

  ...(isQuizResult && {
    marginBottom: theme.spacing(3),
  }),

  ...(!isQuizResult && {
    [theme.breakpoints.down(601)]: {
      marginBottom: theme.spacing(1),
    },
  }),

  [theme.breakpoints.down(500)]: {
    paddingBottom: theme.spacing(6),
  },
}));

export const QuizContentTitleBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(4)} ${theme.spacing(0)}`,

  [theme.breakpoints.down("lg")]: {
    padding: `${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(0)} ${theme.spacing(2)}`,
  },
}));

export const QuizContentTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: 1.4,
  textAlign: "left",
  textTransform: "capitalize",

  [theme.breakpoints.down("lg")]: {
    fontSize: "15px",
  },
}));

// Stepper Part
export const StepperBox = styled(MobileStepper)(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  display: "flex",
  padding: 0,

  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
  },

  "& .MuiLinearProgress-root": {
    backgroundColor: "#B8E986",
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
  justifyContent: "space-around",
  padding: `0px ${theme.spacing(4)}`,
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    padding: `0px ${theme.spacing(1)}`,
  },

  [theme.breakpoints.down("md")]: {
    padding: "0px",
  },

  [theme.breakpoints.up(601)]: {
    height: "194px",
  }
}));

export const StepButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "40px",
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
    gap: theme.spacing(3),
  },
}));
