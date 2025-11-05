import { useSearchParams } from 'react-router-dom';
import { Box, Typography, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Mobile } from '../Layout/Mobile/Mobile';
import { Desktop } from '../Layout/Desktop/Desktop';
import ReactPlayer from 'react-player';
import useDocumentTitle from '@/Hooks/useDocumentTitle';
import { useEffect } from 'react';

export const VideoPlayer = ({ isTablet }: { isTablet: boolean }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const videoLink = searchParams.get('link');

  useDocumentTitle('Helvira Goma | ​📺 Video Player');
  

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!videoLink) {
    return <></>;
  }

  const decodedLink = decodeURIComponent(videoLink);

  useEffect(() => {
    if (!videoLink) {
      navigate(-1);
    }
  }, [videoLink]);

  const content = (
    <Box sx={{ backgroundColor: '#1E1E40', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 2, width: '-webkit-fill-available' }}>
        <IconButton onClick={handleGoBack} sx={{ color: '#FFF' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ color: '#FFF' }}>
          Video Player
        </Typography>
      </Box>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2,
        width: '-webkit-fill-available'
      }}>
        <Box sx={{ width: '100%', maxWidth: '1200px', aspectRatio: '16/9' }}>
          <ReactPlayer
            src={decodedLink}
            controls
            width="100%"
            height="100%"
            config={{
              youtube: {
                color: 'white',
                enablejsapi: 1
              },
              vimeo: {
                byline: false
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );

  return isTablet ? <Mobile>{content}</Mobile> : <Desktop>{content}</Desktop>;
};