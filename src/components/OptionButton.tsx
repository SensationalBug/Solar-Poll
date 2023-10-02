import '../App.css'
import React from 'react'
import { Grid, Typography } from '@mui/material';

interface options {
    title: string;
    icon: any;
}
const OptionButton = ({ title, icon }: options) => {
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
            {icon}
            <Typography
                sx={{
                    padding: '10px 0',
                    fontWeight: 'bold',
                    fontSize: { lg: '18px', md: '16px', xs: '14px' },
                }}
            >
                {title}
            </Typography>
        </Grid>
    )
}

export default OptionButton