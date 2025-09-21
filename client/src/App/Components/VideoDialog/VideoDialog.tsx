import React from 'react';
import { 
    Box,
    Dialog, 
    DialogContent, 
    DialogTitle, 
    IconButton, 
    useMediaQuery, 
    useTheme 
} from '@mui/material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

export const VideoDialog = ({ open, title, src, close }: { open: boolean; title: string; src: string; close: () => void }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog 
            open={open} 
            fullScreen={fullScreen} 
            fullWidth
            sx={{
                backgroundColor: '#000',
                '.MuiPaper-root': {
                    backgroundColor: '#000',
                    margin: 0,
                }
            }}
        >
            <DialogTitle sx={{ color: 'background.default', display: 'flex' }}>
                {title}
                <IconButton onClick={close}>
                    <HighlightOffRoundedIcon fontSize='large' sx={{ color: 'background.default' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box sx={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    paddingTop: 25,
                    height: 0
                }}>
                    <iframe 
                        style={{
                            border: "1px solid #000",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`${src}`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </Box>
            </DialogContent>
        </Dialog>
    )
}