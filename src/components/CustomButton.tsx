import React from 'react'
import { Button, Typography } from '@mui/material'

const CustomButton = ({ outline = false, text, bgColor, onClick }: any) => {
    return (
        <Button
            onClick={onClick}
            variant={outline ? 'outlined' : 'contained'}
            sx={{
                margin: { md: '0 20px', xs: '0 40px' },
                padding: '10px 30px',
                backgroundColor: outline ? 'transparent' : bgColor
            }}>
            <Typography
                sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    textTransform: 'capitalize',
                }}>
                {text}
            </Typography>
        </Button>
    )
}

export default CustomButton