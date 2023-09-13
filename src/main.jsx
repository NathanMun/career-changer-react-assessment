import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Homenormal from './components/homenormal/Homenormal';
import Homeuser from './components/homeuser/Homeuser';
import Homeadmin from './components/homeadmin/Homeadmin';
import Owner from './components/owner/Owner';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Homenormal />,
  },
  {
    path: '/homeuser',
    element: <Homeuser />,
  },
  {
    path: '/homeadmin',
    element: <Homeadmin />,
  },
  {
    path: '/owner',
    element: <Owner />,
  }

]) 






ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)
