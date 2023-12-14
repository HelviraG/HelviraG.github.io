import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { Types } from '../../../Resources/Enums/Types';

export const MessageSnackbar = ({ type, open, onClose, message }: { type: string; open: boolean; onClose: () => void; message: string }) => {
    return (
        <Snackbar 
            open={open} 
            onClose={onClose} 
            anchorOrigin={{ vertical: "top", horizontal: "right" }} 
        >
            {type === Types.SUCCESS ? (
                <Alert severity='info' sx={(theme) => ({ border: `1px solid ${theme.palette.primary.light}` })}>{message}</Alert>
            ) : (
                <Alert severity='error' sx={(theme) => ({ border: `1px solid ${theme.palette.error.light}` })}>{message}</Alert>
            )}
        </Snackbar>
    )
}