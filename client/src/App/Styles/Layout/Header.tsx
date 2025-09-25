import { alpha, Badge, BadgeProps, Box, styled } from '@mui/material';

interface StyledBadgeProps extends BadgeProps {
  isRedDot?: boolean;
  isHomePage?: boolean;
}

export const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'isRedDot' && prop !== 'isHomePage',
})<StyledBadgeProps>(({ theme, isRedDot, isHomePage }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#ff477e',
    color: '#ff477e',

    ...(isRedDot && {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.dark,
    }),

    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },

  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const AppHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isHomePage',
})<{ isHomePage: boolean }>(({ theme, isHomePage }) => ({
  alignItems: 'center',
  backgroundColor: isHomePage ? "#00c79a" : theme.palette.background.default,
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,

  ...(isHomePage && {
    border: 'none',
  }),

  display: 'flex', 
  justifyContent: 'space-around', 
  padding: theme.spacing(4),
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000
}));