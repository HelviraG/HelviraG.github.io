import { alpha, createTheme, getContrastRatio } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Routes } from '../Resources/Enums/Routes';

const primaryBase = '#E74C3C';
const primaryMain = alpha(primaryBase, 0.7);

const secondaryBase = '#9499DD';
const secondaryMain = alpha(secondaryBase, 0.7);

const errorBase = '#FF207A';
const errorMain = alpha(errorBase, 0.7);

const background = '#FFF';
const pathname = window.location.pathname;

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
        game: {
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
            },
            success: {
                light: string;
                dark: string;
            },
            purple: {
                light: string;
                dark: string;
            },
            special: {
                grey: string;
                dark: string;
                blue: string;
                greeny: string;
                magenta: string;
                yellow: string;
                orange: string;
                violet: string;
                red: string;
                iceBlue: {
                    light: string;
                    medium: string;
                    dark: string;
                };
            }
        }
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
        game: {
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
            },
            success: {
                light: string;
                dark: string;
            },
            purple: {
                light: string;
                dark: string;
            },
            special: {
                grey: string;
                dark: string;
                blue: string;
                greeny: string;
                magenta: string;
                yellow: string;
                orange: string;
                violet: string;
                red: string;
                iceBlue: {
                    light: string;
                    medium: string;
                    dark: string;
                };
            }
        }
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
        error: {
            main: errorMain,
            light: alpha(errorBase, 0.5),
            dark: alpha(errorBase, 0.9),
            contrastText: getContrastRatio(errorMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        background: {
            paper: background,
        },
        text: {
            primary: '#000333'
        },
        warning: {
            main: '#F57A17'
        }
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
    game: {
        primary: {
            light: '#F03986',
            dark: '#BD2D69'
        },
        warning: {
            light: '#F2CA3C',
            dark: '#FFD600'
        },
        info: {
            light: '#3C9BF2',
            dark: '#2F7ABF'
        },
        success: {
            light: '#43DD65',
            dark: '#34AB4E'
        },
        purple: {
            light: '#F2E7FF',
            dark: '#607FFF',
        },
        special: {
            grey: '#E9E9E9',
            dark: '#1E1E40',
            blue: '#49DBC8',
            greeny: '#0CD5AC',
            magenta: '#FD9FDD',
            yellow: '#FFF172',
            orange: '#FC427B',
            violet: '#AF96FB',
            red: '#DF1443',
            iceBlue: {
                light: '#CBEF85',
                medium: '#00C79A',
                dark: '#130F40'
            },
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                * {
                    scrollbar-color: ${alpha('#1E1E40', 0.9)} rgb(255 255 255 / 10%);
                }
                
                *::-webkit-scrollbar {
                    border-radius: 9999px;
                    width: 2px;
                }

                *::-webkit-scrollbar-track {
                    background: rgb(255 255 255 / 10%);
                }

                *::-webkit-scrollbar-thumb {
                    background: ${alpha('#1E1E40', 0.7)};
                    border-radius: 9999px;
                }
                
                body {
                    background-color: ${background};
                    margin: 0 auto;
                    color: #000333;
                    cursor: none;
                }
                
                @media (min-width: 1300px) {
                    body {
                        max-width: 100%;
                    }
                }
                
                @media (max-width: 800px) {
                    body {
                        width: fit-content;
                    }
                }
            `
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
