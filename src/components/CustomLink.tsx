import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface customLinkInterface {
    to: string;
    children: ReactNode;
}
export const CustomLink = ({ to, children }: customLinkInterface) => {
    return (
        <Link
            to={to}
            style={{
                color: '#000',
                display: 'flex',
                padding: '10px 0',
                textDecoration: 'none',
                alignItems: 'center',
                width: '100%',
                margin:'auto'
            }}
        >
            {children}
        </Link>
    )
}
