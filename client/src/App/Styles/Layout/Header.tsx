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
  shouldForwardProp: (prop) => prop !== 'isHomePage' && prop !== 'headerBackground' && prop !== 'openMenu' && prop !== 'drawerWidth',
})<{ isHomePage: boolean, headerBackground?: string; openMenu?: boolean; drawerWidth: number }>(({ theme, isHomePage, headerBackground, openMenu, drawerWidth }) => ({
  alignItems: 'center',
  backgroundColor: isHomePage ? theme.game.special.iceBlue.medium : theme.palette.background.default,
  borderBottom: `1px solid ${alpha(theme.palette.info.main, 0.1)}`,

  ...(isHomePage && {
    border: 'none',
  }),

  ...(headerBackground && {
    backgroundColor: headerBackground,
  }),

  display: 'flex', 
  height: '81px',
  justifyContent: 'space-between', 
  padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 100000000,

  transition: 'bawkground-color .6s linear',

  ...(openMenu && {
    [theme.breakpoints.up(1200)]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),

      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth
    }
  })
}));