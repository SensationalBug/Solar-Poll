import { Grid } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'

const Main = () => {
    return (
        <Grid container sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F9F9F9',
            justifyContent: 'space-between',
        }}>
            <Header />
            <Home />
            <Footer />
        </Grid>
    )
}

export default Main