import { ReactNode } from 'react'
import { Grid } from '@mui/material';
import { AppBarComponent } from './AppBar'

interface pageInterface {
    children: ReactNode;
}

export const Page = ({ children }: pageInterface) => {
    return (
        <Grid sx={{ height: '100vh', overflow: 'hidden' }}>
            <AppBarComponent />
            <Grid sx={{
                height: '95%',
                alignItems: 'center',
                justifyContent: 'center',
                display: { md: 'flex', xs: 'unset' },
                backgroundColor: (theme) => theme.palette.grey[300],
            }}>
                {children}
            </Grid>
        </Grid>
    )
}
