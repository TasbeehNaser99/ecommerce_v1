import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/Cart';
import { useQuery } from 'react-query';
import { UserContext } from '../context/User';
import './navbar.css'

function Navbar() {
  let { userToken, setUserToken ,setUserData,userData} = useContext(UserContext);
  let {cartNum } = useContext(CartContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    setUserData(null)
    setUserToken(null);
    navigate("/");
  };
  const { getCartContext } = useContext(CartContext);
  const getCart = async () => {
    const res = await getCartContext();
    return res;
  };
  const { data, isLoading } = useQuery("getCart", getCart);
  
  
 

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <a className="navbar-brand" href="#">T-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="#">Categories</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#" onClick={getCart}>Products<p></p></a>
      </li>
      {userToken?
       <li className="nav-item">
        <Link className="nav-link position-relative" to={'/cart'}>Cart<span className='cardNum'>{cartNum}</span></Link>
      </li>:null}
    

      </ul>
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {userData!=null&& <img className='navbarProfile' srcSet={userData.image.secure_url} />} 
       {userData!=null ? userData.userName :'Account'}
      </a>
      <ul className="dropdown-menu ">
      {userToken==null?
       <> <li><Link className="dropdown-item" to="/register">register</Link></li>
       <li><hr className="dropdown-divider" /></li>
       <li><Link className="dropdown-item" to="login">login</Link></li></>
       :
        
       <> <li><Link className="dropdown-item" to="/profile">profile</Link></li>
       <li><hr className="dropdown-divider" /></li>
       <li><Link className="dropdown-item" onClick={logout}>logout</Link></li></>
      }
    
       
       
      </ul>
    </li>
      </ul>
   
    </div>
  </div>
</nav>

  )
}

export default Navbar