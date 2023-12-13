import React, { useContext } from 'react'
import { UserContext } from '../context/User';

function UserContact() {
    let {userData,loader} = useContext(UserContext);
    if(loader){
        return (
            <h2>Loading...</h2>
          )
    }
  return (
      <div className='user-contact'>
         <a>{userData.email}</a>
         <p>{userData.phone}</p>
      </div>
  )
}

export default UserContact