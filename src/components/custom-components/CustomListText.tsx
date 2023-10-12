import { ListItemText } from '@mui/material'

interface customListTextInterface {
    primary: string;
}

export const CustomListText = ({ primary }: customListTextInterface) => {
    return (
        <ListItemText
            primary={primary}
            primaryTypographyProps={{
                fontSize: 18,
                letterSpacing: 1,
                fontWeight: 'bold',
            }}
        />
    )
}
