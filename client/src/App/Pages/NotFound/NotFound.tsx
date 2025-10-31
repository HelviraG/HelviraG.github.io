import { ArrowBack } from "@mui/icons-material"
import { Box, Button, CardMedia, styled, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const BackHomeButton = styled(Button)(({ theme }) => ({
    textTransform: 'none', 
    fontWeight: 600, 
    fontSize: '16px', 
    backgroundColor: theme.game.special.greeny, 
    color: theme.palette.background.paper,
    borderRadius: '32px', 
    padding: '6px 32px',

    '&:hover': {
        backgroundColor: theme.game.special.dark,
        border: `1px solid ${theme.game.special.greeny}`, 
        color: theme.game.special.greeny
    }
}));

export const NotFound = () => {
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    
    const goBackHome = () => {
        navigate('/');
    }

    return (
        <Box 
            sx={(theme) => ({ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh', 
                maxWidth: '60%', 
                margin: '0 auto', 
                gap: 4,

                [theme.breakpoints.down(1080)]: {
                    flexDirection: 'column-reverse',
                    textAlign: 'center'
                }
            })}
        >
            <Box 
                sx={(theme) => ({ 
                    flex: 1, 
                    textAlign: 'left',

                    [theme.breakpoints.down(1080)]: {
                        flex: 'unset',
                        h1: { textAlign: 'center' }
                    }
                })}
            >
                <Box>
                    <Typography variant="h1" sx={{ marginBottom: 2 }}>{t('not_found.title')}</Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'break-spaces' }}>{t('not_found.message')}</Typography>
                </Box>
                <Box sx={{ marginTop: 4 }}>
                    <BackHomeButton variant="contained" onClick={goBackHome}>
                        <ArrowBack />
                        {t('not_found.button')}
                    </BackHomeButton>
                </Box>
            </Box>
            <Box>
                <CardMedia component='img' image="https://i.ibb.co/vCwqZqz3/Frame-1.png" />
            </Box>
        </Box>
    )
}