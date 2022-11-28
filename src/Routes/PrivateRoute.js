import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        </div>
    }
    if(user){
       return children
    }
    return <Navigate to="/genius-car/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;