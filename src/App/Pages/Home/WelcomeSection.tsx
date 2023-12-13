import React from 'react';
import { Typography } from '@mui/material';
import { WelcomeSectionBox, WelcomeText, WelcomeTextBox, WelcomeTextInnerBox } from '../../Styles/Pages/HomeStyle';

export const WelcomeSection = () => {
    return (
        <WelcomeSectionBox>
            <WelcomeText>Welcome</WelcomeText>
            <WelcomeTextBox>
                <WelcomeTextInnerBox>
                    <Typography sx={{ fontWeight: 500 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </WelcomeTextInnerBox>
            </WelcomeTextBox>
        </WelcomeSectionBox>
    )
}