import { useEffect, useState } from 'react'
import Home from './home/Home.jsx';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Categories from './categories/Categories';

import DashboardHome from './../dashboard/home/Home.jsx'
import DashboardCategories from './../dashboard/categories/Categories.jsx'
import Register from './register/Register.jsx';
import Login from './login/Login.jsx';
import { jwtDecode } from 'jwt-decode';
import CategoriesDetails from './categories/CategoriesDetails.jsx';
import Products from './products/Products.jsx';
import Cart from './cart/Cart.jsx';
import WebLayout from './../layouts/WebLayout.jsx';
import ProtectedRoute from './protectedRoute/ProtectedRoute.jsx';
import User from './user/User.jsx';
import ForgetPassword from './forgetpassword/ForgetPassword.jsx';
import SendCode from './sendCode/SendCode.jsx';
import DashboardLayout from './../layouts/DashboardLayout.jsx';




export const router = createBrowserRouter([
    {
      path: "/",
      element: <WebLayout/>,
      children:[
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"login",
          element:
          <Login/>
        },
        {
            path:"profile",
            element:
            <User/>
          },
          {
            path:"forgetpasswoed",
            element:
            <ForgetPassword/>
          },
          {
            path:"sendCode",
            element:
            <SendCode/>
          },
      {
         path:"/",
        index:true,
        element:<Home/>
      },
      {
        path:"categories",
        element:<Categories/>
      },
      {
        path:"product/category/:id",
        element:<CategoriesDetails/>
      },
      {
        path:"product/:productId",
        element:<Products/>
      },
      {
        path:"cart",
        element:
        <ProtectedRoute>
          <Cart/>
        </ProtectedRoute>
      },
    ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout/>,
      children:[{
        path:"home",
        element:<DashboardHome/>
      },
      {
        path:"categories",
        element:<DashboardCategories/>
      },
    ]
    },
  ]);