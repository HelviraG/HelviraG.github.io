import {
  Card,
  CardContent,
  CardMedia,
  DialogContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export const PageLoader = (displayLoader: boolean) => {
  const isMobile = useMediaQuery("(max-width: 500px)");

  if (!displayLoader) return null;

  return (
    <Card
      sx={(theme) => ({
        backgroundColor: "#000000",
        width: "100%",
      })}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{ width: "72%" }}
          component="img"
          image={"https://i.ibb.co/kQHrxtk/t-l-chargement.gif"}
          alt={"game helvira g loader"}
        />
        <Typography
          variant="h6"
          align="center"
          sx={(theme) => ({
            color: theme.game.warning.light,
            textAlign: "center",
            textTransform: "uppercase",
            animation: "blink 4s infinite",
            padding: theme.spacing(2),
            width: "100%",

            "@keyframes blink": {
              "0%": {
                opacity: 0,
              },
              "30%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0,
              },
              "70%": {
                opacity: 1,
              },
              "100%": {
                opacity: 0,
              },
            },

            [theme.breakpoints.down("md")]: {
              fontSize: "1rem",
              padding: 0,
            },
          })}
        >
          Loading
        </Typography>
      </CardContent>
    </Card>
  );
};
