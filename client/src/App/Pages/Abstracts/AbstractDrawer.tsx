import { Tags } from "@/App/Resources/Enums/Tags";
import { useShowAbstractQuery } from "@/Redux/Services/ConferencesApi";
import { AddRounded, Close } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const AbstractDrawer = ({
  id,
  isDrawerOpen,
  handleCloseDrawer,
}: { id: number, isDrawerOpen: boolean; handleCloseDrawer: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void }) => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();

  const { data: abstract, error } = useShowAbstractQuery(id);

   const handleGoToConference = (confId?: number) => {
    if (!confId) return;

    navigate(`/confs?conference=${confId}`);
  };

  if (!abstract || error) return <></>;

    return (
        <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={(event, reason) => handleCloseDrawer?.(event, reason)}
            sx={{
                zIndex: 2000000000,

                '& .MuiDrawer-paper': {
                    borderRadius: '8px 0 0 8px',
                    width: { xs: '100%', sm: '400px', md: '600px' },
                }
            }}
        >
            <Box sx={{ position: 'fixed', right: 10, top: 10, color: '#FFF' }}>
                <IconButton sx={(theme) => ({ backgroundColor: '#000', color: '#A3FFEA' })} onClick={handleCloseDrawer}>
                    <Close />
                </IconButton>
            </Box>

            {/* Cover Image */}
            {abstract && (
                <Box sx={{ mb: 1 }}>
                    <img 
                        src={'https://i.ibb.co/99dvkKw8/Copie-de-GIT-INIT-26.png'} 
                        alt={'Abstract Cover'}
                        style={{ width: '100%', borderRadius: '8px 0 0 0' }}
                    />
                </Box>
            )}

            <Box sx={{ padding: '24px' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                    <Chip label={abstract.lang} sx={(theme) => ({ backgroundColor: theme.game.special.dark, color: '#A3FFEA', textTransform: 'uppercase' })} />

                    {abstract.isNew.toString() === 'true' && <Chip label={Tags.NEW} sx={(theme) => ({ backgroundColor: theme.game.special.dark, color: '#FC427B', textTransform: 'uppercase' })} />}
                        
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                        {abstract.title}
                    </Typography>
                </Box>

                {abstract.content && <Box>
                    <Typography variant="h6">Abstract</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography sx={{ fontWeight: 100, fontStyle: 'italic', whiteSpace: 'break-spaces' }} variant="body1">{abstract.content}</Typography>
                </Box>}

                {/* To Conference Redirection */}
                {abstract.isNew.toString() === 'false' && (
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6">More</Typography>
                        <Divider sx={{ mb: 3 }} />
                        <Box sx={(theme) => ({ borderRadius: theme.spacing(2), mb: 3, padding: '12px 24px' })}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: 'end' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="error"
                                        sx={{ color: '#FFF' }}
                                        startIcon={<AddRounded />}
                                        onClick={() => handleGoToConference(abstract.confId)}
                                    >
                                        {t("app.abstracts.buttons.more")}
                                    </Button>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                )}
            </Box>
        </Drawer>
    );
};