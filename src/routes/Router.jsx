/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/MainLayout';
import Login from '../pages/login/login/Login';
import Register from '../pages/register/register/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element:<Register></Register>
    }
  ]);

export default router;