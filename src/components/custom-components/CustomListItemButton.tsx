import { ReactNode } from 'react'
import { ListItemButton } from '@mui/material'

interface customListItemButtonInterface {
    children: ReactNode;
}
export const CustomListItemButton = ({ children }: customListItemButtonInterface) => {
    return (
        <ListItemButton
            sx={{
                width: '100%',
                transition: '.5s',
                '&:hover':
                {
                    backgroundColor: '#CDE9ED',
                },
            }}>
            {children}
        </ListItemButton>
    )
}
