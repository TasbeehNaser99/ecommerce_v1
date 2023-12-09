import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/Cart';
function Products() {
    const{productId}=useParams();
    const {addToCartContext}=useContext(CartContext);
  const AddToCart= async(productId)=>{
      const res= await addToCartContext(productId);
       return res;
  }
     

    const getProduct = async()=>{
     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    return data.product ;
    }
 const {data,isLoading}=useQuery('category_details',getProduct);

if (isLoading){
  return(
    <h1>Loading...</h1>
  )
}
  return (
   <div className='product container my-5 '>
    <div className='row'>
        
       
        {data.subImages.map((img,index)=>
        <div className='col-lg-4'>
        <img src={img.secure_url}/>
        </div>
    )

    }
    
        <h4>{data.name}</h4>
       
        
    </div>
    <button className='btn btn-outline-info' onClick={()=>AddToCart(data._id)}>Add to Cart</button>
   </div>
  )
}

export default Products
