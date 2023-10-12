import {
    Box,
    ListItem,
    ListItemIcon,
} from '@mui/material'
import Home from '@mui/icons-material/Home';
import AccountTree from '@mui/icons-material/AccountTree';
import { CustomLink } from './custom-components/CustomLink';
import { CustomListText } from './custom-components/CustomListText';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import { CustomListItemButton } from './custom-components/CustomListItemButton';
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