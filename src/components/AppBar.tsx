import {
    Grid,
    styled,
    Drawer,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material'
import Item from './Item';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const AppBarComponent = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => setOpen(!open);
    return (
        <>
            <AppBar position="relative" open={open} sx={{ backgroundColor: '#0A70B1' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer}
                        aria-label="open drawer"
                        sx={{ marginRight: '30px' }}
                    >
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography
                        noWrap
                        variant="h6"
                        component="h1"
                        color="inherit"
                        sx={{ flexGrow: 1, fontWeight: 'bold' }}
                    >
                        Dashboard
                    </Typography>
                    <Link to={'/'}>
                        <IconButton>
                            <Logout style={{ color: '#fff' }} />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            <Grid>
                <React.Fragment >
                    <Drawer
                        open={open}
                        anchor={'left'}
                        onClose={toggleDrawer}
                    >
                        <Item toggleDrawer={toggleDrawer} />
                    </Drawer>
                </React.Fragment>
            </Grid>
        </>
    )
}
