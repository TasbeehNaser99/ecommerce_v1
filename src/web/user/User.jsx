import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import './user.css'
import { Link, Outlet } from 'react-router-dom';
function User() {
    let {userData,loader} = useContext(UserContext);
    if(loader){
      return (
        <h2>Loading...</h2>
      )
    }
  return (
    <aside className='profile'>
      
      <div className='profileLinks'>
      <nav>
        <Link to={'info'}><img src='profile/project.png' alt='info'className='imgBar'/>Information</Link>
        <Link to={'contact'}><img src='profile/email.png' alt='contact'className='imgBar'/>Contact</Link>
        <Link to={'getorder'}><img src='profile/booking.png' alt='order' className='imgBar'/>Orders</Link>
      </nav>
      </div>
      <div className='userData w-100'>
        <Outlet/>
      </div>
    </aside>
  )
}

export default User