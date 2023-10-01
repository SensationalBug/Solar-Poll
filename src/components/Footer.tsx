import { MdSunny } from 'react-icons/md'
import FooterButtons from './FooterButtons'
import { Grid, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Grid container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0A70B1',
            }}>
            <Grid container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <MdSunny size={80} color='#F9CD15' />
                <Typography
                    sx={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        position: 'relative',
                    }}
                >
                    <b style={{ color: '#fff' }}>Easy</b>
                    Solar
                </Typography>
            </Grid>
            <Grid>
                <Typography
                    sx={{
                        fontSize: 12,
                        color: '#fff',
                        textAlign: 'center'
                    }}
                >
                    © 2023 EasySolar.us   All rights reserved
                </Typography>
                <Grid
                    sx={{
                        display: 'flex',
                        margin: '10px 0',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <FooterButtons title='Terminos' />
                    <FooterButtons title='Politicas' />
                    <FooterButtons title='Contact Us' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer