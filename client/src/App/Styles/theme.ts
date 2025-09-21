import { alpha, createTheme, getContrastRatio } from '@mui/material';
import { grey } from '@mui/material/colors';

const primaryBase = '#2E33DB';
const primaryMain = alpha(primaryBase, 0.7);

const secondaryBase = '#9499DD';
const secondaryMain = alpha(secondaryBase, 0.7);

const background = '#FFF';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxs: true;
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }

    interface Theme {
        event: {
            primary: {
                light: string;
                dark: string;
            },
            warning: {
                light: string;
                dark: string;
            },
            info: {
                light: string;
                dark: string;
            }
        };
    }

    interface ThemeOptions {
        event: {
            primary: {
                light: string;
                dark: string;
            },
            warning: {
                light: string;
                dark: string;
            },
            info: {
                light: string;
                dark: string;
            }
        };
    }
}

const theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 400,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1200,
            xxl: 1536,
        }
    },
    typography: {
        body1: {
            color: '#000333',
            fontWeight: 900,
        },
        h4: {
            fontWeight: 600,
        },
        caption: {
            color: grey[700],
        }
    },
    palette: {
        primary: {
            main: primaryMain,
            light: alpha(primaryBase, 0.5),
            dark: '#2E33DB',
            contrastText: getContrastRatio(primaryMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        secondary: {
            main: secondaryMain,
            light: alpha(secondaryBase, 0.5),
            dark: alpha(secondaryBase, 0.9),
            contrastText: getContrastRatio(secondaryMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        info: {
            main: '#6D74DB'
        },
        background: {
            paper: background,
        },
        text: {
            primary: '#000333'
        },
    },
    event: {
        primary: {
            light: '#EDF1FC',
            dark: '#4E73E5'
        },
        warning: {
            light: 'floralwhite',
            dark: '#FFC868'
        },
        info: {
            light: '#E8FAF8',
            dark: '#17D1BD'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: background,
                    margin: '0 auto',
                    maxWidth: '100%',
                    color: '#000333',
                    cursor: 'none',

                    '&::-webkit-scrollbar': {
                        borderRadius: '10px',
                        width: '4px',
                    },
                      
                    '&::-webkit-scrollbar-track': {
                        background: 'rgb(255 255 255 / 10%)',
                    },
                      
                    '&::-webkit-scrollbar-thumb': {
                        background: alpha(primaryBase, 0.3),
                        borderRadius: '50px'
                    }
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    cursor: 'none'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    cursor: 'none'
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    cursor: 'none'
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    cursor: 'none'
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    cursor: 'none'
                }
            }
        }
    }
});

export default theme;
