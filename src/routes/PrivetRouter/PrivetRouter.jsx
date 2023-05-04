/* eslint-disable no-unused-vars */
import React, {  useContext } from 'react';
import { AuthContext } from '../../pages/shared/authProvide/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRouter =({children} )=> {
    const location =useLocation()
    const { user,loading } = useContext(AuthContext)
    console.log(user);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }  
    if (user) {
       return  children 
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivetRouter;