import '../App.css'
import React from 'react'
import { FcCommandLine } from "react-icons/fc";
import { Grid, Typography } from '@mui/material';

function Options() {
    return (
        <Grid item xs={4} md={2} m={1}
            className='option-card'
            sx={{
                borderRadius: 3,
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                border: '4px solid rgba(0,0,0,.25)',
            }}
        >
            <FcCommandLine size={'70%'} />
            <Typography
                sx={{
                    padding: '10px 0',
                    fontWeight: 'bold',
                    fontSize: { lg: '18px', md: '16px', xs: '14px' },
                }}
            >
                Homeowner
            </Typography>
        </Grid>
    )
}

export default Options