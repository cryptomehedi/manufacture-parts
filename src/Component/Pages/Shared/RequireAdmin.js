import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from './Spinner';

const RequireAdmin = ({children}) => {
    const [user , loading] = useAuthState(auth);
    const [admin, adminLoading] =useAdmin(user)
    let location = useLocation();
    if(loading || adminLoading){
        return <div className='my-48'><div className="flex justify-center "><Spinner/></div></div>
    }
    if (!user || !admin) {
        signOut(auth)
        localStorage.removeItem('accessToken')
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children
};

export default RequireAdmin;