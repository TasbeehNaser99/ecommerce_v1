import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import './user.css'
function User() {
    let {userData} = useContext(UserContext);
  return (
    <div className='container mt-5'>
      
       <img  className='userProfile' srcSet={userData.image.secure_url} />
       <div className='username mt-5'>
        <p><span className='name'>Name is :</span> {userData.userName} </p>
        <p><span className='name'>Email is :</span> {userData.email} </p>
        <p><span className='name'>Created At :</span> {userData.createdAt} </p>
       </div>
    </div>
  )
}

export default User