import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { faStar as notsolid } from "@fortawesome/free-regular-svg-icons";
function CategoriesDetails() {
     const{id}=useParams();
    
    const getCategoryDetails = async()=>{
     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${id}`);
     console.log(data.products)
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
    <div className='row'>
    {
      data.length?data.map((product,index)=>
      <div className="col-md-3 cards" key={index}>
              <div className="card" >
                <img
                  src={product.mainImage.secure_url}
                  className="card-img-top"
                  alt="product"
                />
                <div className="card-body">
                  <h6 className="card-title text-center">{product.name}</h6>
                  <div className='text-center'><span className='text-danger fw-bold'>${product.finalPrice}</span> <del className='text-muted'>${product.price}</del></div>
                  <div className="text-center">
              {Array.from({ length: product.ratingNumbers }).map((_, index) => (
                <FontAwesomeIcon icon={faStar} className="star" />
              ))}
              {Array.from({ length: 5 - product.ratingNumbers }).map(
                (_, index) => (
                  <FontAwesomeIcon icon={notsolid} className="star" />
                )
              )}
            </div>
                  <a href="#" className="btn btn-primary">
                <Link to={`/product/${product._id}`} className='text-white'>  details</Link>
                  </a>
                </div>
              </div>
            </div>
      // <div className='col-md-4 pece' key={product._id}>
      //   {/* <img src={product.mainImage.secure_url}  alt='product'className='productCategory'/>
      //   <h3 className='productName'>{product.name}</h3>
      //  <span className='pe-7'>${product.finalPrice}</span>
      //  <span>
      //  {Array.from({length:product.ratingNumbers}).map((_,index)=>(
      //       <FontAwesomeIcon icon={faStar} className='star'/>
      //   ))}</span><br/>
      //   <p></p>
      //  <button className=' m-auto detail mt-3'><Link to={`/product/${product._id}`}>  details</Link></button>  */}
        
      // </div>
      ):<h2>page not found</h2>
    }
    </div>
   </div>
  )
}

export default CategoriesDetails