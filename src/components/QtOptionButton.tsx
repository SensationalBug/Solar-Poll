import React from 'react'
import { Grid, Typography } from '@mui/material';

interface options {
    title: string;
    icon: any;
    onClick?: any;
}
const QtOptionButton = ({ title, icon, onClick }: options) => {
    return (
        <Grid
            onClick={onClick}
            item
            xs={4}
            md={2}
            m={1}
            sx={{
                borderRadius: 3,
                display: 'flex',
                cursor: 'pointer',
                padding: '10px 0',
                userSelect: 'none',
                transition: '0.5s',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                border: '4px solid rgba(0,0,0,.25)',
                '&:hover': {
                    backgroundColor: '#CDE9ED',
                    border: '3px solid #0A70B1',
                },
            }}
        >
            {icon}
            <Typography
                sx={{
                    padding: '5px 0',
                    fontWeight: 'bold',
                    fontSize: { lg: '14px', xs: '12px' },
                }}
            >
                {title}
            </Typography>
        </Grid>
    )
}

export default QtOptionButton