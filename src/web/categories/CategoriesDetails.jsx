import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

function CategoriesDetails() {
     const{id}=useParams();
    
    const getCategoryDetails = async()=>{
     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${id}`);
    return data.products ;
    }
 const {data,isLoading}=useQuery('category_details',getCategoryDetails);
if (isLoading){
  return(
    <h1>Loading...</h1>
  )
}
  return (
   <div className='products container my-5'>
    {
      data.length?data.map((product)=>
      <div className='product' key={product._id}>
       
        <img src={product.mainImage.secure_url} alt='product'/>
        <h3>{product.name}</h3>
       
        <Link to={`/product/${product._id}`} className='me-5'>details</Link>
       
      </div>
      ):<h2>page not found</h2>
    }
   </div>
  )
}

export default CategoriesDetails