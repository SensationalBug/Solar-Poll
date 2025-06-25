import { useContext } from 'react'
import { Grid } from '@mui/material'
import logo from '../assets/logo.png'
import { MediaContext } from '../context/MediaContext'

const Header = () => {
    const { matchDownMD }: any = useContext(MediaContext)
    return (
        <Grid container
            sx={{
                padding: '5px 10px',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt={'...'}
                    width={matchDownMD ? 150 : 200}
                />
            </Grid>
        </Grid>
    )
}

export default Header