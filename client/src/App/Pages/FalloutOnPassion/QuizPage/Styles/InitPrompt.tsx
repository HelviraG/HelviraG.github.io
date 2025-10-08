import {
  alpha,
  Box,
  CardMedia,
  Chip,
  ChipOwnProps,
  InputBaseProps,
  styled,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";

interface InputProps extends InputBaseProps {
  hasError?: boolean;
}

interface ChipProps extends ChipOwnProps {
  hasEnterName: boolean;
}

interface InitPromptIndicatorProps extends TypographyProps {
  isError?: boolean;
  isSuccess?: boolean;
  hasUsername?: boolean;
}

export const InitPromptWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
  backgroundColor: alpha(theme.game.special.dark, 0.8),
  borderRadius: "23px",

  [theme.breakpoints.down("lg")]: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
  },

  [theme.breakpoints.up(767)]: {
    marginTop: theme.spacing(5),
    padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(4)}`,
  },

  [theme.breakpoints.up(1440)]: {
    maxWidth: "90%",
    padding: theme.spacing(5),
  },

  [theme.breakpoints.up(2040)]: {
    width: "76%",
  },
}));

export const InitPromptBox = styled(Box)(({ theme }) => ({
  color: theme.palette.background.paper,
  display: "flex",
  margin: `${theme.spacing(6)} ${theme.spacing(2)}`,
  width: "100%",
  flexDirection: "column",
}));

export const InitPromptAbove = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column-reverse",

  "& .MuiDivider-root": {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

export const InitPromptCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  marginTop: theme.spacing(-2),
}));

export const InitPromptAboveWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "1em",
  marginTop: "-1em",
  padding: `${theme.spacing(0)} ${theme.spacing(3)}`,
  zIndex: 1,
}));

export const InitPromptAboveWrapperChildren = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "hasEnterName",
})<ChipProps>(({ hasEnterName, theme }) => ({
  backgroundColor: theme.game.special.dark,
  color: theme.palette.background.paper,
}));

export const InitPromptIndicator = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "isSuccess" && prop !== "isError" && prop !== "hasUsername",
})<InitPromptIndicatorProps>(({ isSuccess, isError, hasUsername, theme }) => ({
  textTransform: "capitalize",
  ...((isSuccess || hasUsername) && {
    color: theme.game.special.dark,
  }),
  
  ...(isError && {
    color: theme.game.special.red,
  }),
}));

export const InitPromptBelow = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width: "100%",
}));

export const InitPromptBelowTypoWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  marginTop: theme.spacing(4),

  [theme.breakpoints.down(500)]: {
    marginBottom: theme.spacing(6)
  }
}));

export const InitPromptBelowTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope Variable",
  textAlign: "left",
}));

export const InitPromptBelowButtonBox = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  gap: "12px",
  alignContent: "center",
  justifyContent: "center",
  display: "flex",

  [theme.breakpoints.down(500)]: {
    flexWrap: 'wrap'
  }
}));

export const InitNameWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1.5),
}));

export const EnterNameInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "hasError",
})<InputProps>(({ hasError, theme }) => ({
  border: "none",
  padding: 0,
  width: "30px",
  height: "30px",

  "& input": {
    borderBottom: "5px solid #1F2429",
    color: "#8cbfd9",
    fontFamily: '"Rubik Mono One", sans-serif',
    fontSize: "30px",
    padding: 0,
    textTransform: "uppercase",
    textAlign: "center",

    ...(hasError && {
      borderBottom: "5px solid #FF4757",
      color: "#FF6B81",
    }),
  },

  "& input:focus": {
    outline: "none!important",
    borderBottom: "5px solid #8cbfd9",

    ...(hasError && {
      borderBottom: "5px solid #FF6B81",
    }),
  },

  "& input:selection": {
    backgroundColor: "rgba(13, 30, 38, 0)",
    color: "rgba(140, 191, 217, 0.2)",
  },

  "& input:focus-visible": {
    outline: "none!important",
  },

  "& fieldset": { border: "none" },
}));

export const EnterNameErrorWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "70%",
  left: "0",
}));

export const EnterNameError = styled(Box)(({ theme }) => ({
  backgroundColor: theme.game.special.red,
  borderRadius: "23px",
  display: "flex",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));
