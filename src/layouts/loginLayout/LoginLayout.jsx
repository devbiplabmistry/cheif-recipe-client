/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../../pages/shared/navbar/Navigation';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;