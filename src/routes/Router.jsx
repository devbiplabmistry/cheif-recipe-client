/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/MainLayout';
import Login from '../pages/login/login/Login';
import Register from '../pages/register/register/Register';
import LoginLayout from '../layouts/loginLayout/LoginLayout';
import Chief from '../pages/Chief/ChiefRecipee';
import ChiefLayout from '../layouts/chiefLayout/ChiefLayout';
import ChiefRecipee from '../pages/Chief/ChiefRecipee';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/main"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "main",
    element: <Main></Main>,
  },
  {
    path: '/chef/:id',
    element: <ChiefLayout></ChiefLayout>,
    loader: ({params}) => fetch(`http://localhost:5000/recipee/${params.id}`)
  }

]);

export default router;