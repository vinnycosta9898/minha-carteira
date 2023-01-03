import { createContext, ReactNode, useContext, useState } from "react";

import { toast } from 'react-toastify';

interface IAuthContext {
    logged: boolean
    signIn(email: string, password: string): void
    signOut(): void
}

interface IProps {
    children?: ReactNode
}

const INITIAL_STATE: IAuthContext = {
    logged: false,
    signIn() {},
    signOut() {},
}

const authKey = "minha-carteira:logged"

const AuthContent = createContext<IAuthContext>(INITIAL_STATE)

export function useAuth() {
    return useContext(AuthContent)
}

export function AuthProvider({ children }: IProps) {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = (localStorage.getItem(authKey) || false) as boolean
        return !!isLogged
    })

    function signIn(email: string, password: string) {
        if(email === "teste@teste.com" && password === "123123"){
            localStorage.setItem(authKey, "true")
            setLogged(true)   
        }else{
            alert("Email ou senhas incorretos")
        }
        
    }

    function signOut() {
        localStorage.removeItem(authKey)
        setLogged(false);
    }

    return (
        <AuthContent.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContent.Provider>
    )
}