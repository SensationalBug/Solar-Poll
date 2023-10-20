import { useContext } from 'react'
import Dashboard from './Dashboard'
import { UserContext } from '../context/UserContext'
import { LoginCard } from '../components/cards/LoginCard'


export const Login = () => {
    const { login, isUser }: any = useContext(UserContext)

    return (
        <>
            {isUser ? <Dashboard /> : <LoginCard login={login} />}
        </>
    )
}
