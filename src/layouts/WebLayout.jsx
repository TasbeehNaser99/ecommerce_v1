import React from 'react'
import Navbar from '../web/navbar/Navbar'
import Footer from '../web/footer/Footer'
import { Outlet } from 'react-router-dom'
import Products from '../web/products/Products'

function WebLayout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default WebLayout