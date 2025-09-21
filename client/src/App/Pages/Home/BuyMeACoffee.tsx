import { Box, Link, Typography } from "@mui/material";
import { Routes } from "@resources/Enums/Routes";
import { Trans } from "react-i18next";

export const BuyMeACoffee = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },

        [theme.breakpoints.between("md", "lg")]: {
          marginTop: theme.spacing(14),
        },

        [theme.breakpoints.up("lg")]: {
          marginTop: "22em",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          padding: "82px 75px 82px 82px",
          borderRight: `2px dashed ${theme.game.warning.light}`,
          textAlign: "center",
          width: "50%",

          [theme.breakpoints.down("md")]: {
            padding: "100px 50px 50px",
            borderBottom: `2px dashed ${theme.game.warning.light}`,
            borderRight: "none",
            width: "80%",
          },

          [theme.breakpoints.between("md", "lg")]: {
            padding: "62px 38px 62px 62px",
          },

          [theme.breakpoints.up("xl")]: {
            padding: "82px 175px 82px 82px",
          },
        })}
      >
        <Typography sx={{ fontWeight: 500 }}>
          <Trans
            i18nKey="app.general.buy_coffee.title"
            components={[
              <Link
                href="https://motivher.fr"
                sx={(theme) => ({
                  color: "#FB0F5A",
                  cursor: "none",
                  textDecoration: "none",
                })}
              />,
            ]}
          />
        </Typography>
      </Box>

      <Box
        sx={(theme) => ({
          background:
            'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTdtcXRsa2x6cG94dDNiODR0Y3hidWJyODJ1dTBwNWg2bmVmbHdtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/513lZvPf6khjIQFibF/giphy.gif") no-repeat right',
          height: "280px",
          width: "65%",

          [theme.breakpoints.down("md")]: {
            backgroundPosition: "center",
            marginTop: "1.5em",
            width: "100%",
          },

          [theme.breakpoints.between("md", "lg")]: {
            padding: "100px",
            width: "100%",
          },
        })}
      >
        <Link
          href={Routes.COFFEE}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        ></Link>
      </Box>
    </Box>
  );
};
