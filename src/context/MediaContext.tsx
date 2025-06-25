import { createContext } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'

export const MediaContext = createContext({});

interface mediaProviderInterface {
    children: JSX.Element;
}

const MediaProvider = ({ children }: mediaProviderInterface) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <MediaContext.Provider value={{ matchDownMD, matchDownLG }}>
            {children}
        </MediaContext.Provider>
    )
}

export default MediaProvider;
