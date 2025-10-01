import HdrWeakRoundedIcon from "@mui/icons-material/HdrWeakRounded";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { Routes } from "@resources/Enums/Routes";
import { AppHeader } from "@styles/Layout/Header";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AppAvatar } from "../Avatar/Avatar";
import { Menu } from "./Menu/Menu";
import { ScrollText } from "./ScrollText/ScrollText";

const tabletDrawer = 600;
const smartphoneDrawer = 320;

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const location = useLocation();
  const pathname = location.pathname;

  const isSmartphone = useMediaQuery("(max-width: 425px)");

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <AppHeader component="header" isHomePage={pathname === Routes.HOME} data-testid={"app-header"}>
        <Box>
          <AppAvatar />
        </Box>
        <ScrollText />
        <Box>
          <IconButton
            onClick={handleOpenMenu}
            sx={(theme) => ({
              "&:hover": {
                backgroundColor: theme.game.special.dark,

                "& .MuiSvgIcon-root": {
                  color: "background.default",
                },

                ...(pathname === Routes.EXPLORE && {
                  color: "background.default",
                  backgroundColor: "error.dark",
                }),
              },
            })}
          >
            <HdrWeakRoundedIcon
              sx={(theme) => ({
                color: theme.game.special.dark,

                ...(pathname === Routes.EXPLORE && {
                  color: "error.dark",
                }),
              })}
            />
          </IconButton>
        </Box>
      </AppHeader>
      <Menu
        openMenu={openMenu}
        menuWidth={isSmartphone ? smartphoneDrawer : tabletDrawer}
        onClose={handleCloseMenu}
        closeDrawer={handleCloseMenu}
      />
    </>
  );
};
