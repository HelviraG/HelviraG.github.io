import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { MasonryImagesTop, MasonryImagesBottom } from '../../Resources/MasonryImages';
import { Types } from '../../Resources/Enums/Types';

export const Masonry = ({ anchor }: { anchor: string }) => {
  return (
    <Box>
      <ImageList variant="masonry" cols={2} gap={22} sx={(theme) => ({
        overflow: 'hidden',
        
        [theme.breakpoints.up(700)]: {
          margin: '0 auto',
          maxWidth: '60%'
        },

        [theme.breakpoints.up(1240)]: {
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '100%'
        }
      })}>
        {anchor === Types.TOP && MasonryImagesTop().map((Masonry) => (
          <ImageListItem 
            key={Masonry.img} 
            sx={(theme) => ({ 
              marginBottom: 4,
              maxHeight: '300px',
              maxWidth: '300px',

              '.MuiImageListItem-img': {
                filter: 'grayscale(1)',
                '&:hover': {
                  filter: 'none',
                },
              },

              [theme.breakpoints.up(1240)]: {
                maxHeight: 'max-content',
              }
            })}>
            <img
              srcSet={`${Masonry.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${Masonry.img}?w=248&fit=crop&auto=format`}
              alt={Masonry.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}

        {anchor === Types.BOTTOM && MasonryImagesBottom().map((Masonry) => (
          <ImageListItem 
            key={Masonry.img} 
            sx={(theme) => ({ 
              marginBottom: 4,
              maxHeight: '300px',
              maxWidth: '300px',

              '.MuiImageListItem-img': {
                filter: 'grayscale(1)',
                '&:hover': {
                  filter: 'none',
                },
              },

              [theme.breakpoints.up(900)]: {                
                '&:first-of-type': {
                  marginBottom: `${theme.spacing(6)}!important`
                }
              },

              [theme.breakpoints.up(1240)]: {
                maxHeight: 'max-content',
              }
            })}
          >
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