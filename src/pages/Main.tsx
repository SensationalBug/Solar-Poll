import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid, Typography } from '@mui/material'

const Main = () => {
    return (
        <Grid container sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#F9F9F9',
        }}>
            <Header />
            <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1.5em', lg: '2em' }, textAlign: 'center' }}>
                Actualmente no hay encuestas activas.
            </Typography>
            <Footer />
        </Grid>
    )
}

export default Main