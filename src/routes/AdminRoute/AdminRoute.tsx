import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

type RouteProps = {
    children: JSX.Element | any;
}
const AdminRoute = ({ children }: RouteProps) => {
    const { user, isAdmin } = useContext(AuthContext);
    const location = useLocation();

    // // ---> loader
    // if (isAdminLoading) {
    //     return <h2>loading</h2>
    // }
    // ---> user redirect
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/author/login' state={{ from: location }} replace />

};

export default AdminRoute;