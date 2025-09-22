import { alpha, Box, Button, styled, Typography } from '@mui/material';

export const AnimatedTextBox = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: theme.spacing(10),

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(8)
    },

    [theme.breakpoints.down('xs')]: {
        padding: `${theme.spacing(8)} ${theme.spacing(4)}`
    },
}));

export const AnimatedTextTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },

    '&:after': {
        content: '""',
        height: '1px',
        width: '206%',
        display: 'block',
        border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        marginLeft: '-3em',
        marginTop: '1em',
        marginBottom: '1em',
    }
}));

export const WelcomeSectionBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4), 
    marginTop: theme.spacing(4), 
    textAlign: 'center'
}));

export const WelcomeTextBox = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    backgroundImage: `linear-gradient(131.83deg, #FFFFFF 0%, #C1EAEA 99.21%)`,
    borderRadius: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    position: 'relative',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
        maxWidth: '100%'
    },

    [theme.breakpoints.up(1440)]: {
        marginTop: theme.spacing(4),
    },

    '&:before': {
        backgroundImage: 'linear-gradient(312.25deg, #66CCCC 0%, rgba(255, 255, 255, 0) 66.19%)',
        borderRadius: '18px',
        bottom: -2,
        content: '""',
        left: -2,
        position: 'absolute',
        right: -2,
        top: -2,
        zIndex: -1
    }
}));

export const WelcomeTextInnerBox = styled(Box)(({ theme }) => ({
    borderRadius: '14px',
    boxShadow: '0 40px 80px #66CCCC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '80%',
    padding: theme.spacing(2)
}));

export const WelcomeText = styled(Typography)(({ theme }) => ({
    color: theme.palette.background.paper,
    fontSize: '4rem',
    textShadow: `-2px 0 ${theme.game.special.blue}, 0 -2px ${theme.game.special.blue}, 2px 0 ${theme.game.special.blue}, 0 2px ${theme.game.special.blue}, 2px 2px ${theme.game.special.blue}, -2px -2px ${theme.game.special.blue}, -2px 2px ${theme.game.special.blue}, 2px -2px ${theme.game.special.blue}, 6px 6px  ${theme.game.special.blue}`,

    [theme.breakpoints.down('lg')]: {
        fontSize: '3rem'
    },
}));

export const HomeCTABox = styled(Box)(({ theme }) => ({
    alignItems: 'center', 
    display: 'flex', 
    justifyContent: 'center', 
    marginTop: theme.spacing(12), 
    marginBottom: theme.spacing(5),
    gap: theme.spacing(2),

    [theme.breakpoints.down('md')]: {
        '& > a': {
            width: '100%',
        }
    },
        
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',

        '& > a': {
            width: '60%',
            '&:not(:last-child)': {
                marginBottom: theme.spacing(2)
            }
        }
    },
}));

export const HomeCTAButton = styled(Button)(({ theme }) => ({
    alignSelf: 'center',
    border: `2px solid ${theme.game.special.blue}`,
    boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
    color: theme.game.special.blue,
    fontWeight: 900,
    lineHeight: '23px',
    outline: 'none',
    padding: '0.75rem',
    textDecoration: 'none',
    transition: 'all 235ms ease-in-out',
    borderBottomLeftRadius: '15px 255px',
    borderBottomRightRadius: '225px 15px',
    borderTopLeftRadius: '255px 15px',
    borderTopRightRadius: '15px 225px',
    userSelect: 'none',
    touchAction: 'manipulation',

    '&:hover': {
        border: `2px solid ${theme.palette.primary.light}`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 8px -5px',
        color: theme.palette.primary.light,
        transform: 'translate3d(0, 2px, 0)'
    }
}));

export const HomeFirstSectionBox = styled(Box)(({ theme }) => ({
    alignItems: 'center', 
    display: 'flex', 
    margin:'0 auto', 
    maxWidth: '90%',    
    
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

export const FirstSectionLeftBox = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("https://od.lk/s/MzRfMzYzMjk4MDJf/Design%20sans%20titre%20%2814%29%20%281%29.png") no-repeat center`,
    width: '60%',
    padding: '10px',
    margin: '30px 5px 30px 0px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '520px',
    justifyContent: 'center',
    backgroundSize: 'cover',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
        '& span': {
            fontSize: '1.525rem'
        }
    },

    [theme.breakpoints.down('lg')]: {
        width: '100%',

        '& span': {
            left: '25%'
        }
    },

    [theme.breakpoints.up(1440)]: {
        height: '720px',
    },

    [theme.breakpoints.up(20000)]: {
        height: '1460px',
    },

    '& > img': {
        position: 'absolute',
        bottom: '0px',
        left: '20px',
        width: '100px'
    }
}));

export const FirstSectionRightBox = styled(Box)(({ theme }) => ({
    height: '520px',
    width: '40%',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '720px',
    },
}));

export const RightSideAboveImageBox = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("https://i.ibb.co/C2fdwMf/1715867194281.jpg?w=248&fit=crop&auto=format") no-repeat center`,

    padding: '10px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '300px',
    justifyContent: 'center',

    filter: 'sepia(1)',
    backgroundSize: 'cover',

    '&:hover': {
        filter: 'none',
    },

    [theme.breakpoints.down('md')]: {
        alignSelf: 'end',
        marginTop: '-100px',
        width: '60%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '445px',
    },
}));

export const RightSideTitleWrapper = styled(Box)(({ theme }) => ({
    zIndex: 2,
    right: '-22px',
    position: 'absolute',
    top: '256px',

    [theme.breakpoints.down('sm')]: {
        left: '4em',
        top: '-18em',
    },

    [theme.breakpoints.between('sm', 'md')]: {
        left: '11em',
        top: '-20em',
        width: 'fit-content',
    }
}));

export const RightSideTitleBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.game.warning.light,
    border: `4px solid ${theme.game.special.dark}`,
    borderRadius: '23px',
    boxShadow: `4px 6px 0px 0px ${theme.game.special.dark}`,
    padding: '10px 30px',

    '&:hover': {
        backgroundColor: theme.game.special.greeny,
    },

    [theme.breakpoints.down('sm')]: {
        width: 'fit-content',
        padding: '4px 10px'
    },

    [theme.breakpoints.between('sm', 'md')]: {
        width: 'fit-content',
        padding:  '4px'
    },

    [theme.breakpoints.between('md', 'lg')]: {
        padding: '7px'
    }
}));

export const RightSideBelowImageBox = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("https://i.ibb.co/kgPGWDv/pub-gouv-large.jpg?w=248&fit=crop&auto=format") no-repeat center`,

    padding: '10px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '200px',
    justifyContent: 'center',

    filter: 'sepia(1)',
    backgroundSize: 'cover',
    marginTop: '10px',

    '&:hover': {
        filter: 'none',
    },

    [theme.breakpoints.down('md')]: {
        marginTop: '-2em',
        width: '60%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '266px',
    },
}));

export const HomeSecondSectionBox = styled(Box)(({ theme }) => ({
    marginTop: '-24px!important', 
    alignItems: 'center', 
    display: 'flex', 
    margin:'0 auto', 
    maxWidth: '90%',

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        marginTop: '-13em!important'
    }
}));

export const SecondSectionLeftBox = styled(Box)(({ theme }) => ({
    maxHeight: '720px',
    width: '40%',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '6em'
    },
    
    [theme.breakpoints.up(1440)]: {
        height: '920px',
    },
}));

export const SecondSectionAboveBox = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("https://i.ibb.co/17Dg9Qn/bilan-8.jpg?w=248&fit=crop&auto=format") no-repeat center`,

    padding: '10px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '220px',
    justifyContent: 'center',

    filter: 'sepia(1)',
    backgroundSize: 'cover',

    '&:hover': {
        filter: 'none',
    },

    [theme.breakpoints.down('sm')]: {
        marginTop: '14em',
    },

    [theme.breakpoints.down('md')]: {
        alignSelf: 'start',
        width: '70%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '320px',
    },
}));

export const SecondSectionMiddleBox = styled(Box)(({ theme }) => ({
    zIndex: 2,
    left: '-22px',
    position: 'absolute',
    top: '256px',

    [theme.breakpoints.down('sm')]: {
        marginTop: '12em',
        left: '145px',
        top: '45px',
    },

    [theme.breakpoints.between('sm', 'md')]: {
        left: '190px',
        top: '14px',
        width: 'fit-content',
    },
}));

export const InnerMiddleBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.game.special.blue,
    border: `4px solid ${theme.game.special.dark}`,
    borderRadius: '23px',
    boxShadow: `4px 6px 0px 0px ${theme.game.special.dark}`,
    padding: '10px 30px',

    '&:hover': {
        backgroundColor: theme.game.special.greeny,
    },

    '& .MuiTypography-root': {
        fontWeight: 900
    },

    [theme.breakpoints.down('sm')]: {
        padding: '7px'
    }
}));

export const SecondSectionBelowBox = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("https://od.lk/s/MzRfMzc1NDk3Njdf/WhatsApp%20Image%202024-06-14%20%C3%A0%2016.22.40_503b4eaf.jpg") no-repeat center`,

    padding: '120px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '500px',
    justifyContent: 'center',

    filter: 'sepia(1)',
    backgroundSize: 'cover',
    marginTop: '10px',

    '&:hover': {
        filter: 'none',
    },

    [theme.breakpoints.down('md')]: {
        alignSelf: 'end',
        width: '70%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '720px',
    },
}));

export const SecondSectionRightBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    height: '720px',
    margin: '30px 0px 30px 5px',
    padding: '30px',
    width: '60%',

    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}));

export const SecondSectionRightBelowBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    marginTop: theme.spacing(8), 
    gap: 4,

    [theme.breakpoints.down('lg')]: {
        display: 'none'
    },

    [theme.breakpoints.between('md', 'lg')]: {
        marginTop: theme.spacing(4)
    }
}));

export const BelowBoxFirstSection = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("https://i.ibb.co/d7FJhKm/20230531-200845.jpg?w=248&fit=crop&auto=format") no-repeat center`,

    padding: '10px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '220px',
    justifyContent: 'center',

    filter: 'sepia(1)',
    backgroundSize: 'cover',
    width: '50%',

    '&:hover': {
        filter: 'none',
    },

    [theme.breakpoints.down('md')]: {
        alignSelf: 'start',
        width: '70%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '320px',
    },
}));

export const BelowBoxSecondSection = styled(Box)(({ theme }) => ({
    background: `${theme.game.special.dark} url("	https://i.ibb.co/2cntgRT/square-media-img-2.png?w=248&fit=crop&auto=format") no-repeat center`,

    padding: '10px',
    borderRadius: '20px',
    alignItems: 'center',
    height: '220px',
    justifyContent: 'center',

    filter: 'sepia(1)',
    backgroundSize: 'cover',
    width: '50%',

    '&:hover': {
        filter: 'none',
    },

    [theme.breakpoints.down('md')]: {
        alignSelf: 'start',
        width: '70%'
    },

    [theme.breakpoints.up(1440)]: {
        height: '320px',
    },
}));