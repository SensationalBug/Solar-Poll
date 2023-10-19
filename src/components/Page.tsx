import { useContext } from 'react'
import { ReactNode } from 'react'
import { Grid } from '@mui/material';
import { AppBarComponent } from './AppBar'
import { UserContext } from '../context/UserContext';
import { Login } from '../pages/Login';

interface pageInterface {
    children: ReactNode;
    overflow?: string;
}

export const Page = ({ children, overflow }: pageInterface) => {
    const { isUser }: any = useContext(UserContext)
    console.log(isUser)
    return (
        <Grid sx={{ height: '100vh', overflow: overflow || 'hidden' }}>
            {isUser ? (
                <>
                    <AppBarComponent />
                    <Grid sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: { xs: '90%', xl: '93%' },
                        display: { md: 'flex', xs: 'unset' },
                    }}>
                        {children}
                    </Grid>
                </>
            ) : <Login />}
        </Grid>
    )
}
