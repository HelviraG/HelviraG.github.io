import '@fontsource/orbitron';
import { Box, styled } from '@mui/material';
import dayjs from 'dayjs';

const AlarmClock = styled(Box)({
    borderRadius: '10px',
    position: 'relative',
    width: '100px',
    display: 'flex',
    flex: 1
});

const TimeWrapper = styled(Box)({
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
        color: '#00c79a',
        lineHeight: '1.75',
        textShadow: '0 0 15px rgba(60, 231, 97, 0.4)',
    }
});

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
    return (
        <AlarmClock>
            <TimeWrapper>
                <Box component="span">{dayjs().format('HH')}</Box>
                <Colon component="span">:</Colon>
                <Box component="span">{dayjs().format('mm')}</Box>        
            </TimeWrapper>
        </AlarmClock>
    )
}