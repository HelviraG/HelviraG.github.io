import {
  alpha,
  Box,
  BoxProps,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardMediaProps,
  CardProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

interface CardWrapperProps extends CardProps {
  imgUrl?: string;
  isPlayground?: boolean;
  isConference?: boolean;
}

interface CardContentWrapperProps extends TypographyProps {
  isConference?: boolean;
}

interface CardContentTitleProps extends TypographyProps {
  isConference?: boolean;
}

interface CardContentMediaProps extends CardMediaProps {
  imgUrl?: string;
}

interface CardContentActionProps extends BoxProps {
  flexRight?: boolean;
  isExplorerList?: boolean;
}

interface CardContentButtonProps extends BoxProps {
  isPlayground?: boolean;
}

export const CardWrapper = styled(Card, {
  shouldForwardProp: (prop) =>
    prop !== "hidden" && prop !== "isPlayground" && prop !== "isConference",
})<CardWrapperProps>(({ hidden, isPlayground, isConference, theme }) => ({
  alignItems: "center",
  border: `1px solid ${alpha('#2e33db', 0.12)}`,
  borderRadius: theme.spacing(2),
  boxShadow: `0px 20px 20px -17px ${alpha('#2e33db', 0.5)}`,
  display: "flex",
  overflow: "initial",
  margin: "auto",
  marginBottom: theme.spacing(6),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  position: "relative",
  transition: ".3s",
  width: "600px",

  ...(isPlayground && {
    border: `1px solid ${alpha(theme.palette.error.light, 0.12)}`,
    boxShadow: `0px 20px 20px -17px ${alpha(theme.palette.error.main, 0.5)}`,
    display: "flex",
    flexDirection: "row",
    borderRadius: "15px",
    marginTop: "4em",
    padding: 0,
    width: "900px",

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      width: "100%",
      marginTop: "2em",
    },
  }),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },

  [theme.breakpoints.between("lg", 1356)]: {
    "&:nth-of-type(even)": {
      marginRight: "initial",
    },
  },

  ...(isConference && {
    [theme.breakpoints.up(1440)]: { width: "800px" },
    [theme.breakpoints.down(450)]: { marginBottom: "100px!important" },
  }),

  ...(hidden && {
    display: "none",
  }),
}));

export const CardContentMedia = styled(CardMedia, {
  shouldForwardProp: (prop) => prop !== "imgUrl",
})<CardContentMediaProps>(({ imgUrl, theme }) => ({
  backgroundColor: "background.default",
  backgroundImage: `url(${imgUrl})`,
  backgroundSize: "contain",
  borderRadius: theme.spacing(1),
  height: 0,
  marginLeft: "-24px",
  marginRight: "auto",
  marginTop: "-24px",
  paddingBottom: "48%",
  position: "relative",
  transform: "translateX(-8px)",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    marginLeft: "26px",
    marginRight: "auto",
    marginTop: "-74px",
    width: "90%",
  },

  "&:after": {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    content: '""',
    opacity: "0.4",
    position: "absolute",
    borderRadius: theme.spacing(1),
    backgroundImage: "linear-gradient(90deg, #f783ac 5%, #7950f2 95%)",
  },
}));

export const CardContentWrapper = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "isConference",
})<CardContentWrapperProps>(({ isConference }) => ({
  width: "100%",

  ...(isConference && {
    padding: "0 16px 0 0",
  }),
}));

export const CardContentSubtitle = styled(Typography)(() => ({
  display: "inline-block",
  fontSize: "12px",
  letterSpacing: "1px",
  marginBottom: "0.875em",
  textTransform: "uppercase",
}));

export const CardContentTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isConference",
})<CardContentTitleProps>(({ isConference, theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "0.35em",

  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },

  ...(isConference && {
    color: "#1E1E40",
  }),
}));

export const CardContentCaption = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: 100,
  letterSpacing: "0.00938em",
  marginBottom: theme.spacing(1),
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
}));

export const CardContentAction = styled(Box, {
  shouldForwardProp: (prop) => prop !== "flexRight" && prop !== 'isExplorerList',
})<CardContentActionProps>(({ flexRight, isExplorerList, theme }) => ({
  display: "flex",
  justifyContent: "end",
  marginTop: theme.spacing(1),

  ...(flexRight && {
    justifyContent: "start",
  }),

  ...(isExplorerList && {
    gap: '10px'
  })
}));

export const CardContentButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isPlayground",
})<CardContentButtonProps>(({ isPlayground }) => ({
  color: "#ffffff",
  boxShadow: "0px 4px 32px rgba(247, 131, 172, 0.4)",
  paddingLeft: "24px",
  borderRadius: "100px",
  paddingRight: "24px",
  backgroundImage: "linear-gradient(90deg, #f783ac 5%, #7950f2 95%)",

  ...(isPlayground && {
    backgroundImage:
      "linear-gradient(90deg, rgba(233,57,24,1) 0%, rgba(236,69,98,1) 55%)",
  }),

  lineHeight: "1.75",
  letterSpacing: "0.02857em",
  marginTop: "20px",
  textTransform: "uppercase",
  transition: "transform ease 300ms",

  "&:hover": {
    transform: "translate(0, -10px)",
  },
}));
