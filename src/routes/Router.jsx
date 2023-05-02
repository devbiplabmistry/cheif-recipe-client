/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/MainLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>
    },
  ]);

export default router;