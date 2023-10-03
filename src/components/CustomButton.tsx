import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

interface customButtonInterface {
    text: string;
    bgColor?: string;
    onClick: () => {};
    outline?: boolean;
    disabled?: boolean;
}
const CustomButton = ({
    text,
    bgColor,
    onClick,
    outline = true,
    disabled = false }: customButtonInterface) => {
    return (
        <Grid>
            <Button
                onClick={onClick}
                disabled={disabled || false}
                variant={outline ? 'outlined' : 'contained'}
                sx={{
                    width: 150,
                    padding: '10px 30px',
                    margin: { md: '0 20px', xs: '0 40px' },
                    backgroundColor: outline ? 'transparent' : bgColor || '',
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
        </Grid>
    )
}

export default CustomButton