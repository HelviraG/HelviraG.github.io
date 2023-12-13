import { Avatar, Box, styled, Tabs } from '@mui/material';

export const VideoTabs = styled(Tabs)(({ theme }) => ({
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(8),
    },

    [theme.breakpoints.up('md')]: {
        '.MuiTabs-scroller': {
            display: 'flex',
            justifyContent: 'center'
        }
    },
}));

export const VideoMediaWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    gap: theme.spacing(2), 
    marginTop: theme.spacing(1),
    
    [theme.breakpoints.not('md')]: {
        flexWrap: 'wrap-reverse', 
    },
}));

export const MediaWrapper = styled(Box)(({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%'
}));

export const MediaAvatar = styled(Avatar)(({
    bottom: '-8%',
    left: 0,
    position: 'absolute',
    width: 70, 
    height: 70 
}));

export const WatchMediaWrapper = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
}));