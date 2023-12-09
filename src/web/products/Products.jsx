import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
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
        <div className='col-lg-4'>
        {data.subImages.map((img,index)=>
    <React.Fragment key={index}>
        <ReactImageMagnify {...{
    smallImage: {
        alt: 'product',
        isFluidWidth: true,
        src: img.secure_url
    },
    largeImage: {
        src:img.secure_url ,
        width: 1200,
        height: 1800
    },
    isHintEnabled:true,
    enlargedImagePosition:'over'
}} />
        </React.Fragment>)

    }
    
        <h4>{data.name}</h4>
        <button className='btn btn-outline-info' onClick={()=>AddToCart(data._id)}>Add to Cart</button>
        </div>
    </div>
   
   </div>
  )
}

export default Products
