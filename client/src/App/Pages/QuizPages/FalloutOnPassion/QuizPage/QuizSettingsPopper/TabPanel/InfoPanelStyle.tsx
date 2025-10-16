import { Box, Link, styled } from "@mui/material";

export const InfoPanelContentBox = styled(Box)(({ theme }) => ({
  p: theme.spacing(1),

  "& .MuiTypography-root": {
    "&:first-of-type": {
      marginTop: theme.spacing(0),
    },
    "&:last-of-type": {
      marginBottom: theme.spacing(4),
    },
    marginTop: theme.spacing(2),
  },
}));

export const InfoPanelContentLink = styled(Link)(({ theme }) => ({
  color: theme.game.special.red,
  cursor: "none",
  fontWeight: 900,
}));
