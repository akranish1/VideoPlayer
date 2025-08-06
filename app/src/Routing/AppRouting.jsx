import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

import Home from '../Pages/Home';
import Sidebar from '../Components/Sidebar';
import Searchres from '../Pages/Searchres';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/search",
    element: <Searchres />,
  },
  
]);

const AppRouting = () => {
    return <>
    <RouterProvider router={router} />
    <ToastContainer/>
    </>
}

export default AppRouting
