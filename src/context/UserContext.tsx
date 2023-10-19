import { createContext, useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import Swal from 'sweetalert2';

export const UserContext = createContext({})

interface userContextInterface {
    children: JSX.Element;
}

const UserProvider = ({ children }: userContextInterface) => {
    const auth = getAuth();
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            user ? setIsUser(true) : setIsUser(false)
        });
    })

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const login = (email: string, pwd: string) => {
        signInWithEmailAndPassword(auth, email, pwd)
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                }).then(() => setIsUser(true))
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'Datos incorrectos'
                })
            })
    }

    const closeSession = () => {
        Swal.fire({
            title: 'Advertencia',
            icon: 'warning',
            html: 'Estas a punto de cerrar la sesión?',
            showCancelButton: true,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((res) => {
            if (res.isConfirmed) {
                signOut(auth)
            }
        })
    }

    return (
        <UserContext.Provider value={{ isUser, login, closeSession }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;