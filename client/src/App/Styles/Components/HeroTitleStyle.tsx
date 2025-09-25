import {
  Box,
  BoxProps,
  Divider,
  Palette,
  PaletteColor,
  styled,
  Typography,
} from "@mui/material";

export type PaletteKey = keyof {
  [Key in keyof Palette as Palette[Key] extends PaletteColor
    ? Key
    : never]: true;
};

interface TitleBoxProps extends BoxProps {
  titleColor?: string;
}

interface HeroTitleBoxProps extends BoxProps {
  imgUrl: string;
}

export const TitleWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#00c79a",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(10),
  width: "100%",
}));

export const TitleBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "titleColor",
})<TitleBoxProps>(({ titleColor, theme }) => ({
  position: "relative",

  h2: {
    color: theme.palette.background.default,
    fontSize: "7em",
    position: "absolute",
    left: "-39px",
    top: 0,
    right: 0,
    textAlign: "center",
    width: "447px",

    "&:nth-of-type(1)": {
      color: "transparent",
      WebkitTextStroke: `2px #1E1E40`,
    },

    "&:nth-of-type(2)": {
      color: '#1E1E40',
      animation: "wave 4s ease-in-out infinite",
    },

    "@keyframes wave": {
      "0%, 100%": {
        clipPath:
          "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
      },
      "50%": {
        clipPath:
          "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
      },
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "6em",
      left: "-1em!important",
    },

    [theme.breakpoints.down("lg")]: {
      left: "-66px",
    },
  },

  [theme.breakpoints.up("xl")]: {
    h2: {
      fontSize: "10em",
    },
  },
}));

export const HeroTitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 auto",
  maxWidth: "80%",

  [theme.breakpoints.down("md")]: {
    maxWidth: "90%",
    flexDirection: "column-reverse",
  },
}));

export const HeroImgBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "imgUrl",
})<HeroTitleBoxProps>(({ imgUrl, theme }) => ({
  background: `${theme.game.special.dark} url(${imgUrl}) no-repeat center`,
  width: "60%",
  padding: "10px",
  margin: "30px 30px 30px 0px",
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    "& span": {
      fontSize: "1.525rem",
    },
  },

  [theme.breakpoints.down("lg")]: {
    margin: "30px 0px 30px 0px",

    width: "100%",
    height: "600px",

    "& span": {
      left: "25%",
    },
  },

  [theme.breakpoints.up(1240)]: {
    maxHeight: "-webkit-fill-available",
  },

  [theme.breakpoints.up(20000)]: {
    height: "1460px",
  },

  "& > img": {
    position: "absolute",
    bottom: "0px",
    left: "20px",
    width: "100px",
  },
}));

export const AnimatedTitleBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const SubTitleBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(20),
  padding: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },
}));

export const SubTiTleDivider = styled(Divider)(({ theme }) => ({
  paddingBottom: theme.spacing(8),
  marginBottom: theme.spacing(4),
  borderColor: "#cbef85",

  [theme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

export const SubTitle = styled(Typography)({
  fontWeight: 800,
  fontStyle: "italic",
});
