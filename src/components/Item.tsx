import {
    Box,
    ListItem,
    ListItemIcon,
} from '@mui/material'
import Home from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PollIcon from '@mui/icons-material/Poll';import { CustomLink } from './custom-components/CustomLink';
import { CustomListText } from './custom-components/CustomListText';
import { CustomListItemButton } from './custom-components/CustomListItemButton';
const Item = ({ toggleDrawer }: any) => {
    return (
        <Box onKeyDown={toggleDrawer} sx={{ width: "250px" }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <CustomListItemButton>
                    <CustomLink to={"/dashboard"}>
                        <ListItemIcon>
                            <Home color='info' />
                        </ListItemIcon>
                        <CustomListText primary="Inicio" />
                    </CustomLink>
                </CustomListItemButton>
                <CustomListItemButton>
                    <CustomLink to={"/surveys"}>
                        <ListItemIcon>
                            <PollIcon color='info' />
                        </ListItemIcon>
                        <CustomListText primary="Surveys" />
                    </CustomLink>
                </CustomListItemButton>
                <CustomListItemButton>
                    <CustomLink to={"/seen"}>
                        <ListItemIcon>
                            <VisibilityIcon color='info' />
                        </ListItemIcon>
                        <CustomListText primary="Leido" />
                    </CustomLink>
                </CustomListItemButton>
            </ListItem>
        </Box>
    )
}

export default Item;