import { Divider, styled, Typography, TypographyProps } from "@mui/material";

interface TitleTypographyProps extends TypographyProps {
  shadowColor?: string;
}

export const TitleWrapper = styled(Divider)(({ theme }) => ({
  display: "flex",
  width: "100%",

  "& span": {
    display: "flex",
  },

  "& img": {
    maxWidth: "15%",
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(2),
    "& span": {
      alignItems: "center",
      fontSize: "1.525rem",
    },

    "& img": {
      maxWidth: "40%",
    },
  },
}));

export const TitleTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "shadowColor",
})<TitleTypographyProps>(({ theme, shadowColor }) => ({
  color: theme.palette.background.default,
  fontSize: "3rem",
  letterSpacing: "0.008em",
  textShadow: `-2px 0 #111827, 0 -2px #111827, 2px 0 #111827, 0 2px #111827, 2px 2px #111827, -2px -2px #111827, -2px 2px #111827, 2px -2px #111827, 6px 6px ${theme.palette.primary.light}`,
  ...(shadowColor && {
    textShadow: `-2px 0 #111827, 0 -2px #111827, 2px 0 #111827, 0 2px #111827, 2px 2px #111827, -2px -2px #111827, -2px 2px #111827, 2px -2px #111827, 6px 6px ${shadowColor}`,
  }),
  width: "50%",

  [theme.breakpoints.down("md")]: {
    textAlign: "end",
    whiteSpace: "break-spaces",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
