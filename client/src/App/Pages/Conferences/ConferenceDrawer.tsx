import { AppChip } from "@/App/Components/Chip/Chip";
import { Tags } from "@/App/Resources/Enums/Tags";
import { IEvent } from "@/App/Resources/Pages/General/ConferencesResource";
import { convertTags } from "@/Hooks/useConverters";
import { useShowConferenceQuery } from "@/Redux/Services/ConferencesApi";
import { Close, MenuBook, VisibilityRounded } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from "react-router-dom";

export const ConferenceDrawer = ({
  id,
  isDrawerOpen,
  handleCloseDrawer,
}: { id: number, isDrawerOpen: boolean; handleCloseDrawer: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void }) => {
  const { t } = useTranslation(['translation', 'common']);
  const navigate = useNavigate();

  const { data: conference, error } = useShowConferenceQuery(id);

   const handleShowVideo = (videoLink?: string) => {
    if (!videoLink) return;

    // Encode the video URL to safely pass it as a query parameter
    const encodedLink = encodeURIComponent(videoLink);
    navigate(`/player?link=${encodedLink}`);
  };

  const handleViewResources = (url: string | undefined) => {
    window.open(`${url}`, "_blank", "rel=noopener noreferrer");
  };

  if (!conference || error) return <></>;

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
            {conference.cover && (
                <Box sx={{ mb: 1 }}>
                    <img 
                        src={conference.cover} 
                        alt={conference.title}
                        style={{ width: '100%', borderRadius: '8px 0 0 0' }}
                    />
                </Box>
            )}

            <Box sx={{ padding: '24px' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                    <Chip label={conference.lang} sx={(theme) => ({ backgroundColor: theme.game.special.dark, color: '#A3FFEA' })} />
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                        {conference.title}
                    </Typography>
                </Box>

                {conference.abstract && <Box>
                    <Typography variant="h6">Abstract</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography sx={{ fontWeight: 100, fontStyle: 'italic', whiteSpace: 'break-spaces' }} variant="body1">{conference.abstract}</Typography>
                </Box>}

                {/* Events List */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">{t('app.confs.given_at')}</Typography>
                    <Divider sx={{ mb: 3 }} />
                    {conference.events && conference.events.map((event: IEvent) => (
                        <Box key={event.event} sx={(theme) => ({ borderRadius: theme.spacing(2), mb: 3, padding: '12px 24px', boxShadow: '0 2px 2px 0 rgba(68,74,255,0.14),0 3px 1px -2px rgba(68,74,255,0.12),0 1px 5px 0 rgba(68,74,255,0.2)' })}>
                            <Box sx={{ display: 'flex', justifyContent: 'end', gap: 1, mb: 2 }}>
                                <AppChip
                                    chipBackground=""
                                    chipBorder=""
                                    chipColor=""
                                    size="small"
                                    label={event.year}
                                    type={Tags.YEAR}
                                />
                                {event.tags.map((tag) => (
                                    <AppChip
                                        chipBackground={event.lightColor}
                                        chipBorder={event.darkColor}
                                        chipColor={event.darkColor}
                                        size="small"
                                        label={convertTags(tag)}
                                        type={convertTags(tag) ?? ""}
                                        key={tag}
                                    />
                                ))}
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6">
                                        {event.event}
                                    </Typography>
                                    
                                    <Box sx={{ display: 'flex', gap: .5, fontStyle: 'italic' }}>
                                        <PublicIcon fontSize="small" />
                                        <Typography variant="body2" color="text.primary">
                                            {event.location}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {event.link && (
                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="error"
                                            sx={{ color: '#FFF' }}
                                            startIcon={<VisibilityRounded />}
                                            onClick={() => handleShowVideo(event.link)}
                                        >
                                            {t("common:actions.watch")}
                                        </Button>
                                    )}
                                    {event.githubLink && (
                                        <Button
                                            variant={event.link ? "outlined" : "contained"}
                                            size="small"
                                            color="error"
                                            sx={(theme) => ({
                                                color: event.link ? theme.palette.error.main : '#FFF',
                                            })}
                                            startIcon={<MenuBook />}
                                            onClick={() => handleViewResources(event.githubLink)}
                                        >
                                            {t("common:actions.resources")}
                                        </Button>
                                    )}
                                </Box>
                            </Box>

                        </Box>
                    ))}
                </Box>
            </Box>
        </Drawer>
    );
};