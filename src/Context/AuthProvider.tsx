import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { app } from '../Firebase/FirebaseConfig';

type ContextProps = {
    children: React.ReactNode;
}

export interface ContextValueInterface {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user: any | null;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;

}

export const AuthContext = createContext<ContextValueInterface>({} as ContextValueInterface)
const auth = getAuth(app)
const AuthProvider = ({ children }: ContextProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any | null>(null);


    // ---> track current user || isLogin
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unSubscribe()
    }, [])


    const authInfo: ContextValueInterface = {
        loading,
        setLoading,
        user,
        setUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;