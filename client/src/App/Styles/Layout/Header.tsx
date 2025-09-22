import { alpha, Badge, BadgeProps, Box, styled } from '@mui/material';

interface StyledBadgeProps extends BadgeProps {
  isRedDot?: boolean;
}

export const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'isRedDot',
})<StyledBadgeProps>(({ theme, isRedDot }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#E74C3C',
    color: '#E74C3C',

    ...(isRedDot && {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.dark,
    }),

    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

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

export const AppHeader = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  display: 'flex', 
  justifyContent: 'space-around', 
  padding: theme.spacing(4),
  position: 'sticky',
  top: 0,
  zIndex: 1000
}));