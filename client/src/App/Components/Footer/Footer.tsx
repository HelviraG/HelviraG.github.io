import { Typography } from '@mui/material';
import useLocalStorage from '@hooks/useLocalStorage';
import i18n from '@i18n';
import { FooterLang, FooterTextTypography, FooterTextWrapper, FooterToolbar, FooterWrapper, LangSwitch } from '@styles/Layout/Footer';
import { DigitalClock } from '../DigitalClock/DigitalClock';
import useChangeLangage from "@hooks/useChangeLangage";

export const Footer = () => {
  const { appLang: lang, changeLang: changeLanguage } = useChangeLangage();

  return (
    <FooterWrapper component="footer" position="fixed" color="primary">
      <FooterToolbar>
        <DigitalClock />
        <FooterLang>
          <Typography variant="caption">🇫🇷 FR</Typography>
          <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
          <Typography variant="caption">🇺🇸 EN</Typography>
        </FooterLang>
        <FooterTextWrapper>
          <FooterTextTypography variant="caption">Made with ❤️ & code lines 👩‍💻 by helvira_g</FooterTextTypography>
        </FooterTextWrapper>
      </FooterToolbar>
    </FooterWrapper>
  )
} 