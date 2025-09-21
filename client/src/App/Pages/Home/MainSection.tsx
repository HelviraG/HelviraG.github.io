import { Box } from "@mui/material";
import React from "react";
import { BuyMeACoffee } from "./BuyMeACoffee";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";

export const MainSection = () => {
  return (
    <Box sx={{ marginBottom: "8em" }} data-testid={"home-hero-section"}>
      <FirstSection />
      <SecondSection />

      <Box
        sx={(theme) => ({
          display: "flex",
          marginTop: `${theme.spacing(14)}!important`,
          gap: 4,
          maxWidth: "90%",
          margin: "0 auto",

          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            marginTop: `${theme.spacing(6)}!important`,
          },

          [theme.breakpoints.up("lg")]: {
            display: "none",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            background: `${theme.game.special.dark} url("https://i.ibb.co/d7FJhKm/20230531-200845.jpg?w=248&fit=crop&auto=format") no-repeat center`,

            padding: "10px",
            borderRadius: "20px",
            alignItems: "center",
            height: "220px",
            justifyContent: "center",

            filter: "sepia(1)",
            backgroundSize: "cover",
            width: "50%",

            "&:hover": {
              filter: "none",
            },

            [theme.breakpoints.down("md")]: {
              alignSelf: "start",
              width: "70%",
            },

            [theme.breakpoints.up(1240)]: {
              maxHeight: "max-content",
            },

            [theme.breakpoints.up(1440)]: {
              height: "320px",
            },
          })}
        ></Box>
        <Box
          sx={(theme) => ({
            background: `${theme.game.special.dark} url("https://od.lk/s/MzRfMzc3OTkyNjFf/1715867189847%20%281%29.jpeg") no-repeat center`,

            padding: "10px",
            borderRadius: "20px",
            alignItems: "center",
            height: "220px",
            justifyContent: "center",

            filter: "sepia(1)",
            backgroundSize: "cover",
            width: "50%",

            "&:hover": {
              filter: "none",
            },

            [theme.breakpoints.down("md")]: {
              alignSelf: "end",
              width: "70%",
            },

            [theme.breakpoints.up(1240)]: {
              maxHeight: "max-content",
            },

            [theme.breakpoints.up(1440)]: {
              height: "320px",
            },
          })}
        ></Box>
      </Box>

      <BuyMeACoffee />
    </Box>
  );
};
