import {
  Box,
  BoxProps,
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
  backgroundColor: theme.game.special.dark,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(5),
  width: "100%",
}));

export const TitleBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "titleColor",
})<TitleBoxProps>(({ titleColor, theme }) => ({
  position: "relative",

  h2: {
    fontFamily: "'Poppins', sans-serif",
    color: titleColor === 'primary' ? '#0fbcf9' : '#A3FFEA',
    fontSize: "7em",
    position: "absolute",
    top: 0,
    right: 0,
    textAlign: "center",
    width: "-webkit-fill-available",

    "&:nth-of-type(1)": {
      color: "transparent",
      WebkitTextStroke: `2px ${titleColor === 'primary' ? '#0fbcf9' : '#A3FFEA'}`,
    },

    "&:nth-of-type(2)": {
      color: titleColor === 'primary' ? '#0fbcf9' : '#A3FFEA',
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
      fontSize: "3.8em",
    },

    [theme.breakpoints.down(330)]: {
      fontSize: "3em",
    },
  },

  [theme.breakpoints.up("xl")]: {
    h2: {
      fontSize: "10em",
    },
  },
}));

export const HeroTitleWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.game.special.dark, 
  display: 'flex',
  padding: '7em 0 2em 0'
}));

export const HeroTitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  margin: "0 auto",
  maxWidth: "80%",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    flexDirection: "column-reverse",
  },
}));

export const AnimatedTitleBox = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
}));

export const SubTitleBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "noPadding",
})<{ noPadding?: boolean }>(({ noPadding, theme }) => ({
  marginTop: theme.spacing(6),
  padding: theme.spacing(4),

  ...(noPadding && {
    padding: 0
  }),

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: '#A3FFEA',
  fontWeight: 800,
  marginTop: theme.spacing(10),
  textAlign: 'center',
  padding: '0 20px',

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));
