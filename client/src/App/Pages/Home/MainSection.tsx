import { Box, CardMedia, Divider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { BuyMeACoffee } from "./BuyMeACoffee";
import { InnerMiddleBox, RightSideTitleBox, SecondSectionMiddleBox } from "@/App/Styles/Pages/HomeStyle";
import { TypeAnimation } from 'react-type-animation';
import { Trans, useTranslation } from "react-i18next";
import { HomeCTA } from "./HomeCTA";

export const MainSection = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 425px)');
  const isScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <Box sx={{  backgroundColor: "#00c79a" }} data-testid={"home-hero-section"}>
      <Box sx={(theme) => ({ 
        display: "flex", 
        justifyContent: "space-between", 
        maxWidth: "90%", 
        margin: "0 auto", 
        flexDirection: isMobile ? 'column' : 'row', 
        paddingTop: isScreen ? '14em' : '5em', 
        gap: isMobile ? 4 : 2,

        [theme.breakpoints.down('lg')]: {
          gap: 0,
        }
      })}>
        <Box sx={(theme) => ({ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'start', 
          justifyContent: 'center', 
          fontSize: '2em', 
          fontWeight: 'bold', 
          padding: '0 2em',

          [theme.breakpoints.down('lg')]: {
            padding: "0 16px",
          },
        })}>
          <Box sx={{ position: "relative" }}>
             <SecondSectionMiddleBox>
                <InnerMiddleBox sx={(theme) => ({ backgroundColor: theme.game.special.greeny })}>
                    <Typography variant="h6">Hello ✌️</Typography>
                </InnerMiddleBox>
            </SecondSectionMiddleBox>
            <TypeAnimation 
              sequence={[
                  t('app.home.main.animated.computer'),
                  1000,
                  t('app.home.main.animated.web'),
                  1000,
                  t('app.home.main.animated.speaker'),
                  1000,
                  t('app.home.main.animated.motivher'),
                  1000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ 
                fontSize: isScreen ? '0.7em' : '1.2em',
                background: 'linear-gradient(120deg, rgb(0 0 0), rgb(0 0 0))',
                WebkitBackgroundClip: 'text',
                textAlign: 'left',
              }} 
            />
            <Divider sx={{ margin: "0 0 1em 0", borderColor: "#cbef85", width: "50px", height: "4px", borderRadius: "2px" }} />
            <Typography sx={(theme) => ({ 
              fontSize: isScreen ? "0.7em" : "0.8em", 
              padding: "0 40px 0 0", 
              textAlign: "justify",
              marginBottom: "10px",

              [theme.breakpoints.down('lg')]: {
                fontSize: "0.6em",
                padding: "0 32px 0 0",
              },

              [theme.breakpoints.down(500)]: {
                padding: "0",
              }
            })}>
              <Trans i18nKey="app.home.main.subtext.part_1" components={{ span: <span style={{ backgroundColor: "#cbef85", padding: "4px", borderRadius: "8px" }} /> }} />
            </Typography>
            <Typography sx={(theme) => ({ 
              fontSize: isScreen ? "0.7em" : "0.8em", 
              padding: "0 40px 0 0",

              [theme.breakpoints.down('lg')]: {
                fontSize: "0.6em",
                padding: "0 32px 0 0",
              },

              [theme.breakpoints.down(500)]: {
                padding: "0",
              }
            })}>
              <Trans i18nKey="app.home.main.subtext.part_2" components={{ span: <span style={{ backgroundColor: "#cbef85", padding: "4px", borderRadius: "8px" }} /> }} />
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'start' : 'center', width: '100%' }}>
            <HomeCTA />
          </Box>
        </Box>
        <Box sx={(theme) => ({ 
          flex: 1, 
          position: 'relative',

          [theme.breakpoints.down('lg')]: {
            display: 'flex',
            flexDirection: 'column-reverse'
          },

          [theme.breakpoints.down(500)]: {
            marginTop: '-4em'
          }
        })}>
          <RightSideTitleBox sx={{ width: "fit-content", position: "absolute", right: "2em", bottom: "5em", backgroundColor: "#ff477e" }}>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>🦄 Helvira GOMA 🖲️</Typography>
          </RightSideTitleBox>
          <Box>
            <CardMedia component="img" src="https://i.ibb.co/Psm5TnfS/Design-sans-titre-19-removebg-preview.png" />
          </Box>
        </Box>
      </Box>

      <BuyMeACoffee />
    </Box>
  );
};
