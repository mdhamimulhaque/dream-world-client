import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

type RouteProps = {
    children: JSX.Element;
}



const PrivateRoute = ({ children }: RouteProps) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    // if (loading) {
    //     return <Loading />
    // }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/author/login' state={{ from: location }} replace />
};

export default PrivateRoute;