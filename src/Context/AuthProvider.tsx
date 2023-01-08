import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { app } from '../Firebase/FirebaseConfig';

type ContextProps = {
    children: React.ReactNode;
}

export interface ContextValueInterface {
    loading?: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user?: any | null;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;
    isAdmin: boolean | undefined
}

export const AuthContext = createContext<ContextValueInterface>({} as ContextValueInterface)
export const auth = getAuth(app)
const AuthProvider = ({ children }: ContextProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any | null>(null);
    const [isAdmin, setIsAdmin] = useState();
    const [isAdminLoading, setIsAdminLoading] = useState(true)


    // ---> track current user || isLogin
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true)
            setUser(currentUser);
        })
        return () => unSubscribe()
    }, [])

    // ---> admin check
    useEffect(() => {
        fetch(`https://knowledge-tunes-server.vercel.app/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data?.isAdmin);
                setIsAdminLoading(false)
            })
    }, [user?.email])


    const authInfo: ContextValueInterface = {
        loading,
        setLoading,
        user,
        setUser,
        isAdmin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;