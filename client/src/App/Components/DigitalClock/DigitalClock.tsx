import '@fontsource/orbitron';
import { Box, styled } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react'; 

const AlarmClock = styled(Box)({
    borderRadius: '10px',
    position: 'relative',
    width: '100px',
    display: 'flex',
    flex: 1
});

const TimeWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Orbitron',
    fontSize: '12px',

    '& > span': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.game.special.iceBlue.medium,
        lineHeight: '1.75',
        textShadow: '0 0 15px rgba(60, 231, 97, 0.4)',
    }
}));

const Colon = styled(Box)({
    width: '12px',
    textAlign: 'center',
    animation: 'blink 2s infinite',

    '@keyframes blink': {
        '0%': {
            opacity: 0
        },
        '30%': {
            opacity: 1
        },
        '50%': {
            opacity: 0
        },
        '70%': {
            opacity: 1
        },
        '100%': {
            opacity: 0
        }
    }
});

export const DigitalClock = ()=> {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AlarmClock>
            <TimeWrapper>
                <Box component="span">{time.format('HH')}</Box>
                <Colon component="span">:</Colon>
                <Box component="span">{time.format('mm')}</Box>        
            </TimeWrapper>
        </AlarmClock>
    )
}