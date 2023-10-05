import {
    Box,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from '@mui/material'
import Home from '@mui/icons-material/Home';

const Item = ({ toggleDrawer }: any) => {
    return (
        <Box
            sx={{ width: 150 }}
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemButton>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItemButton>
            </ListItem>

        </Box>
    )
}

export default Item;