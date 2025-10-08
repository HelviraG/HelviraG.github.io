import { Typography, useMediaQuery } from '@mui/material';
import { FooterLang, FooterTextTypography, FooterTextWrapper, FooterToolbar, FooterWrapper, LangSwitch } from '@styles/Layout/Footer';
import { DigitalClock } from '../DigitalClock/DigitalClock';
import useChangeLangage from "@hooks/useChangeLangage";

export const Footer = () => {
  const { appLang: lang, changeLang: changeLanguage } = useChangeLangage();
  const isTablet = useMediaQuery("(max-width: 800px");

  return (
    <FooterWrapper component="footer" position="fixed" color="primary">
      <FooterToolbar>
        <DigitalClock />
        <FooterLang>
          <Typography variant="caption">🇫🇷{isTablet ? '' : ' FR'}</Typography>
          <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
          <Typography variant="caption">🇺🇸{isTablet ? '' : ' EN'}</Typography>
        </FooterLang>
        <FooterTextWrapper>
          <FooterTextTypography variant="caption">Made with ❤️ & code lines 👩‍💻 by helvira_g</FooterTextTypography>
        </FooterTextWrapper>
      </FooterToolbar>
    </FooterWrapper>
  )
} 
