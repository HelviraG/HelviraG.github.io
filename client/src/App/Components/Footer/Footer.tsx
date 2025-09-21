import  React, { useState , useEffect } from 'react';
import i18n from '../../../i18n';
import { Typography } from '@mui/material';
import useLocalStorage from '../../../Hooks/useLocalStorage';
import { FooterClock, FooterLang, FooterTextTypography, FooterTextWrapper, FooterToolbar, FooterWrapper, LangSwitch } from '../../Styles/Layout/Footer';

export const Footer = () => {
  var [date, setDate] = useState(new Date());
  
  const lang = i18n.language;

  const [defaultLanguage, setDefaultLanguage] = useLocalStorage(
    "lang",
    lang
  );

  const changeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      i18n.changeLanguage('en');
      setDefaultLanguage('en');
    }

    if (!event.target.checked) {
      i18n.changeLanguage('fr');
      setDefaultLanguage('fr');
    }
  }
    
  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    }
  });

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
  }, [defaultLanguage]);

  return (
    <FooterWrapper component="footer" position="fixed" color="primary">
      <FooterToolbar>
        <FooterClock>
          <Typography variant="caption">{date.toLocaleTimeString()}</Typography>
        </FooterClock>
        <FooterLang>
          <Typography variant="caption">FR</Typography>
          <LangSwitch checked={lang === 'en'} onChange={changeLanguage} />
          <Typography variant="caption">EN</Typography>
        </FooterLang>
        <FooterTextWrapper>
          <FooterTextTypography variant="caption">Made with ❤️ & code lines 👩‍💻 by helvira_g</FooterTextTypography>
        </FooterTextWrapper>
      </FooterToolbar>
    </FooterWrapper>
  )
}