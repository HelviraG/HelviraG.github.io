import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import i18n from '@i18n';

export default function useChangeLangage() {
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
        i18n.changeLanguage(defaultLanguage);
    }, [defaultLanguage]);
    
    return {
        appLang: defaultLanguage,
        changeLang: changeLanguage
    }
}