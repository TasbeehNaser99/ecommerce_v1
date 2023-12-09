import React from 'react'
import { useQuery } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './categories.css'

import { insert } from 'formik';
import { Link } from 'react-router-dom';
function Categories() {
  const getCategories= async()=>{
    const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`)
  return data;

      }
      const {data,isLoading}=useQuery('web_categories',getCategories);
      if(isLoading){
      return <h2>Loading ...</h2>
      }
  return (
  
    <div className='container mt-5'>
      {/* <div className='row'>
        {
          data?.categories.length?data?.categories.map((category)=>
          <div className='col-md-4' key={category._id}>
            <img src={category.image.secure_url}/>
            <h2>{category.name}</h2>
          </div>
          ):'<h2>no category found</h2>'
        }
      </div> */}
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={6.5}
     loop={true}
     autoplay={{
      delay:3000,
     
     }}
     navigation
      pagination={{ 
        clickable: true,
        }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
          data?.categories.length?data?.categories.map((category)=>
      <SwiperSlide key={category._id}> 
      <Link to={`/product/category/${category._id}`}>
      <img src={category.image.secure_url}/>
      </Link>
      </SwiperSlide>
      ):'<h2>no category found</h2>'  
      }
    </Swiper>
    </div>
  )
}

export default Categories