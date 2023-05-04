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
import BlogPage from '../pages/blog/BlogPage';
import WrongPages from '../pages/shared/404Page/WrongPages';
import PrivetRouter from './PrivetRouter/PrivetRouter';



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
    element:<PrivetRouter><ChiefLayout></ChiefLayout></PrivetRouter>,
    loader: ({params}) => fetch(`https://chef-hunter-devbiplabmistry.vercel.app/recipee/${params.id}`)
  },
  {
    path:"/blog",
    element:<BlogPage></BlogPage>
  },
{
  path:'*',
  element:<WrongPages></WrongPages>

}
]);

export default router;