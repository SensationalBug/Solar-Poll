import {
    Box,
    ListItem,
    ListItemIcon,
} from '@mui/material'
import { CustomLink } from './CustomLink';
import Home from '@mui/icons-material/Home';
import { CustomListText } from './CustomListText';
import AccountTree from '@mui/icons-material/AccountTree';
import { CustomListItemButton } from './CustomListItemButton';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
const Item = ({ toggleDrawer }: any) => {
    return (
        <Box onKeyDown={toggleDrawer} sx={{ width: "250px" }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <CustomListItemButton>
                    <CustomLink to={"/dashboard"}>
                        <ListItemIcon>
                            <Home color='info'/>
                        </ListItemIcon>
                        <CustomListText primary="Inicio" />
                    </CustomLink>
                </CustomListItemButton>
                <CustomListItemButton>
                    <CustomLink to={"/surveys"}>
                        <ListItemIcon>
                            <AccountTree color='info'/>
                        </ListItemIcon>
                        <CustomListText primary="Surveys" />
                    </CustomLink>
                </CustomListItemButton>
                <CustomListItemButton>
                    <CustomLink to={"/answers"}>
                        <ListItemIcon>
                            <AccessTimeTwoToneIcon color='info'/>
                        </ListItemIcon>
                        <CustomListText primary="Answers" />
                    </CustomLink>
                </CustomListItemButton>
            </ListItem>
        </Box>
    )
}

export default Item;