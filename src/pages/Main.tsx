import { Grid } from '@mui/material'

const Main = () => {
    return (
        <Grid container sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
        }}>
            <Grid>Aqui va el login, para ver la app ve a <strong>/dashboard</strong></Grid>
        </Grid>
    )
}

export default Main