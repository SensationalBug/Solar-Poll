import { Grid } from '@mui/material'
import React from 'react'

const FooterButtons = ({ title }: any) => {
    return (
        <Grid item
            sx={{
                fontSize: 12,
                color: '#fff',
                margin: '0 10px',
                cursor: 'pointer',
            }}
        >
            {title}
        </Grid>
    )
}

export default FooterButtons