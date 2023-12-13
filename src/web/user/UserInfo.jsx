import React, { useContext } from 'react'
import { UserContext } from '../context/User';

function UserInfo() {
    let {userData,loader} = useContext(UserContext);
    
    if(loader){
        return (
            <h2>Loading...</h2>
          )
    }
  return (
     <div className='user-info'>
        <img  className='userProfile' src={userData.image.secure_url} alt='profileImg'/>
        <h2>{userData.userName}</h2>
      </div> 
  )
}

export default UserInfo