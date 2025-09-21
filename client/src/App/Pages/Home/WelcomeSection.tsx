import React from 'react';
import { Box, Typography } from '@mui/material';
import { WelcomeSectionBox, WelcomeText, WelcomeTextBox, WelcomeTextInnerBox } from '@styles/Pages/HomeStyle';
import { Trans, useTranslation } from 'react-i18next';

export const WelcomeSection = () => {
    const { t } = useTranslation();

    return (
        <WelcomeSectionBox>
            <Box sx={(theme) => ({ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 

                '& > p': { 
                    marginTop: '32px',

                    [theme.breakpoints.down('lg')]: {
                        marginTop: '20px'
                    },
                },
                
                '& img': {
                    [theme.breakpoints.down('lg')]: {
                        width: '100px'
                    },
                }
            })}>
                <img src="https://od.lk/s/MzRfMzYzODIwMTJf/Copie_de_GIT_INIT__7_-removebg-preview.png" alt="laptop icon" />
                <WelcomeText>{t('app.general.hello')}</WelcomeText>
            </Box>
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