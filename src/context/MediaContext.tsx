import { createContext } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'

export const MediaContext = createContext({});

interface mediaProviderInterface {
    children: JSX.Element;
}

const MediaProvider = ({ children }: mediaProviderInterface) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <MediaContext.Provider value={{ matchDownMD }}>
            {children}
        </MediaContext.Provider>
    )
}

export default MediaProvider;
