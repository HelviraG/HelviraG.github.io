import { 
  AppBar, 
  AppBarProps, 
  Box, 
  styled, 
  Switch, 
  Toolbar, 
  Typography 
} from '@mui/material';

export const FooterWrapper = styled(AppBar)<AppBarProps>(({ theme }) => ({
  top: 'auto', 
  bottom: 0, 
  backgroundColor: theme.palette.background.default, 
  minHeight: '50px'
}));

export const FooterToolbar = styled(Toolbar)(({
  display: 'flex', 
  justifyContent: 'space-between'
}));

export const FooterClock = styled(Box)(({
  flex: 1
}));

export const FooterLang = styled(Box)(({ theme }) => ({
  display: 'flex', 
  flex: 1, 
  gap: 10, 
  justifyContent: 'center',

  '& .MuiTypography-root': {
    color: theme.game.special.dark,
    fontWeight: 800,
  }
}));

export const LangSwitch = styled(Switch)(({ theme }) => ({
  width: 47,
  height: 18,
  padding: 0,
  display: 'flex',

  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },

    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },

  '& .MuiSwitch-switchBase': {
    padding: 2,

    '&.Mui-checked': {
      transform: 'translateX(29px)',
      color: theme.palette.background.default,

      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#E74C3C',
        border: `4px solid ${theme.game.special.dark}`,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    border: `1px solid ${theme.game.special.dark}`,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: theme.spacing(6),
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },

  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.game.warning.dark,
    boxSizing: 'border-box',
    border: `4px solid ${theme.game.special.dark}`,
  },
}));

export const FooterTextWrapper = styled(Box)((({ theme }) => ({
  display: 'flex', 
  flex: 1, 
  justifyContent: 'center',

  [theme.breakpoints.down(500)]: {
    gap: '12px'
  }
})));

export const FooterTextTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(500)]: {
    textAlign: 'right'
  },

  [theme.breakpoints.between('xxs', 'xs')]: {
    fontSize: '9px',
  },
}));