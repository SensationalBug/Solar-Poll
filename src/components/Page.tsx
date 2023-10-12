import { ReactNode } from 'react'
import { Grid } from '@mui/material';
import { AppBarComponent } from './AppBar'

interface pageInterface {
    children: ReactNode;
    overflow?: string;
}

export const Page = ({ children, overflow }: pageInterface) => {
    return (
        <Grid sx={{ height: '100vh', overflow: overflow || 'hidden' }}>
            <AppBarComponent />
            <Grid sx={{
                height: { xs: '90%', xl: '93%' },
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
