import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { MasonryImages } from '../../Resources/MasonryImages';

export const Masonry = () => {
  return (
    <Box>
      <ImageList variant="masonry" cols={2} gap={22} sx={(theme) => ({
        [theme.breakpoints.up(700)]: {
          margin: '0 auto',
          maxWidth: '60%'
        },
      })}>
        {MasonryImages().map((Masonry) => (
          <ImageListItem 
            key={Masonry.img} 
            sx={{ 
              marginBottom: 4,
              maxHeight: '300px!important',
              maxWidth: '300px',
              '.MuiImageListItem-img': {
                filter: 'grayscale(1)',
                '&:hover': {
                  filter: 'none',
                },
              }
            }}>
            <img
              srcSet={`${Masonry.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${Masonry.img}?w=248&fit=crop&auto=format`}
              alt={Masonry.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}