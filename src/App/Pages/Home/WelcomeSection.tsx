import React from 'react';
import { Typography } from '@mui/material';
import { WelcomeSectionBox, WelcomeText, WelcomeTextBox, WelcomeTextInnerBox } from '../../Styles/Pages/HomeStyle';
import { Trans, useTranslation } from 'react-i18next';

export const WelcomeSection = () => {
    const { t } = useTranslation();

    return (
        <WelcomeSectionBox>
            <WelcomeText>{t('app.general.hello')}</WelcomeText>
            <WelcomeTextBox>
                <WelcomeTextInnerBox>
                    <Typography sx={{ fontWeight: 500 }}>
                        <Trans 
                            i18nKey="app.general.welcome.p1"
                            components={{ bold: <strong /> }}
                        />
                    </Typography>
                    <Typography sx={{ fontWeight: 500, marginBottom: 1, marginTop: 1 }}>
                        <Trans 
                            i18nKey="app.general.welcome.p2"
                            components={{ bold: <strong /> }}
                        />
                    </Typography>
                    <Typography sx={{ fontWeight: 500 }}>
                        <Trans 
                            i18nKey="app.general.welcome.p3"
                            components={{ bold: <strong /> }}
                        />
                    </Typography>
                </WelcomeTextInnerBox>
            </WelcomeTextBox>
        </WelcomeSectionBox>
    )
}