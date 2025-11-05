import HdrWeakRoundedIcon from "@mui/icons-material/HdrWeakRounded";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { Routes } from "@resources/Enums/Routes";
import { AppHeader } from "@styles/Layout/Header";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AppAvatar } from "../Avatar/Avatar";
import { ScrollText } from "./ScrollText/ScrollText";

export const Header = ({ handleOpenMenu, openMenu }: { handleOpenMenu: () => void; openMenu: boolean }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [headerBackground, setHeaderBackground] = useState<string>(pathname === Routes.BLOG ? "#3C40C6" : "#00C79A");

  return (
    <>
      <AppHeader component="header" isHomePage={pathname === Routes.HOME} data-testid={"app-header"} headerBackground={headerBackground} openMenu={openMenu} drawerWidth={410}>
        <Box>
          <AppAvatar />
          {pathname !== Routes.HOME && 
            <Link href="/" sx={{ textDecoration: 'none' }}>
              <Typography sx={{ display: 'flex' }}>helvira
                <Typography component="span" sx={{ color: pathname === Routes.BLOG ? '#0fbcf9' : '#3B3B98' }}>.dev</Typography>
              </Typography>
            </Link>
          }
        </Box>
        <ScrollText setHeaderBackground={setHeaderBackground} />
        <Box>
          <IconButton
            onClick={handleOpenMenu}
            disableRipple
            sx={(theme) => ({
              "&:hover": {
                backgroundColor: theme.game.special.dark,

                "& .MuiSvgIcon-root": {
                  color: "background.default",
                }
              },
            })}
          >
            {!openMenu && 
              <HdrWeakRoundedIcon
                sx={(theme) => ({
                  color: theme.game.special.dark
                })}
              />
            }
          </IconButton>
        </Box>
      </AppHeader>
    </>
  );
};
