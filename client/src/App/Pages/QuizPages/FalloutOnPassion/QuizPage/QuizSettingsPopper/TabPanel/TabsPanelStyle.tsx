import {
  alpha,
  Box,
  BoxProps,
  Chip,
  ListItem,
  styled,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";

interface TabPanelWrapperProps extends BoxProps {
  value: number;
}

export const TabsNavigationWrapper = styled(Box)(() => ({
  width: "100%",
}));

export const TabsNavigation = styled(Tabs)(({ theme }) => ({
  width: "100%",

  "& .MuiButtonBase-root": {
    [theme.breakpoints.down("md")]: {
      minWidth: "auto",
      width: "25%",
    },
  },

  "& .MuiTabs-indicator": {
    borderRadius: "8px",
    backgroundColor: alpha(theme.palette.background.paper, 0.2),
    border: "none",
    height: "50%",
    top: "21px",
  },
}));

export const TabNavigation = styled(Tab)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  margin: `${theme.spacing(2)}`,
  minHeight: "50px",
  fontWeight: 900,
  color: theme.palette.background.paper,
  border: "none",

  "&.Mui-selected": {
    color: theme.game.special.iceBlue.medium,
    borderBottom: 0,

    "& .MuiSvgIcon-root": {
      color: theme.game.special.iceBlue.medium,
      fontSize: "24px",
      fontWeight: 900,
    },
  },
}));

export const TabPanelWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "value",
})<TabPanelWrapperProps>(({ value, theme }) => ({
  padding: "10px 58px 58px 58px",
  backgroundColor: theme.game.special.dark,
  borderBottomLeftRadius: "23px",
  borderBottomRightRadius: "23px",
  flex: 1,
  overflowY: "auto",
  color: theme.palette.background.paper,

  "::-webkit-scrollbar-track": {
    webkitBoxShadow: "inset 0 0 2px rgba(0,0,0,0.3)",
    borderRadius: "10px",
    backgroundColor: "transparent",
  },

  "::-webkit-scrollbar": {
    backgroundColor: "transparent",
    width: "4px",
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    backgroundColor: theme.game.special.iceBlue.light,
    webkitBoxShadow: "inset 0 0 2px rgba(0,0,0,0.3)",
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },

  ...(value === 0 && {
    background: `${theme.game.special.dark} url("/assets/img/game_settings_orange.png")`,
  }),
}));

export const TabsPanelChip = styled(Chip)(({ theme }) => ({
  color: theme.game.special.dark,
  backgroundColor: theme.game.special.greeny,
  padding: `${theme.spacing(0)} ${theme.spacing(1)}`,

  "& .MuiChip-icon": {
    color: theme.game.special.dark,
  },
}));

export const TabsListItem = styled(ListItem)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  textAlign: "left",
  width: "-webkit-fill-available",

  "& .MuiButtonBase-root": {
    width: "-webkit-fill-available",
  },
}));

export const TabsListItemButton = () => {
  const theme = useTheme();

  return {
    listItemButtonProps: {
      "& .MuiListItemButton-root": {
        color: '#FFF'
      },

      "& .MuiSvgIcon-root": {
        display: "none",
        transition: "all 700ms",
        color: '#FFF'
      },

      "& .MuiListItemText-root": {
        transition: "all 700ms",

        "& .MuiTypography-root": {
          color: '#FFF'
        },
      },

      "&:hover": {
        "& .MuiSvgIcon-root": {
          display: "block",
        },

        "& .MuiListItemText-root": {
          marginLeft: theme.spacing(2),
        },
      },
    },
  };
};

export const LangPanelSwitchWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "-webkit-fill-available",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export const TabsPanelSubTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  fontWeight: 900,
}));
