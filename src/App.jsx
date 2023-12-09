import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { CartContextProvider } from './web/context/Cart.jsx';
import UserContextProvider, { UserContext } from './web/context/User.jsx';
import {router} from './web/routes.jsx'

function App() {
const {setUserToken}=useContext(UserContext)
  useEffect(()=>{
    if(localStorage.getItem('userToken')!=null){
setUserToken(localStorage.getItem('userToken'))
    }
  },[])

  return (
    <>
    <CartContextProvider>
     <RouterProvider router={router} />  
     </CartContextProvider> 
    </>
  )
}

export default App
