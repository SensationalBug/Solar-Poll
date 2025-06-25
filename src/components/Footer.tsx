import logo from '../assets/logo.png'
import { Grid, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Grid container
            sx={{
                padding: '5px 0',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#0A70B1',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'space-between' },
            }}>
            <Grid item
                sx={{
                    display: 'flex',
                    margin: '0 20px',
                    marginTop: { xs: '10px', md: 0 },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img
                    src={logo}
                    alt={'...'}
                    width={100}
                />
            </Grid>
            <Grid item>
                <Typography
                    sx={{
                        fontSize: 12,
                        color: '#fff',
                        margin: '0 20px',
                        textAlign: 'center',
                    }}
                >
                    © 2023 EasySolar.us   All rights reserved
                </Typography>
            </Grid>
        </Grid >
    )
}

export default Footer