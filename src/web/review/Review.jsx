import React, { useContext, useEffect, useState } from 'react'
import Input from '../../shared/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema } from '../validation/validation.js';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as notsolid } from "@fortawesome/free-regular-svg-icons";
import './review.css'
import { setSolid } from './review.js';


function Review() {
 let [rating,setRating]=useState(0);
 const {id}=useParams();
   const navigate=useNavigate();
    const initialValues={
      comment:'',
      rating:'',
    }
    
    const onSubmit=async (user)=>{
      user.rating=rating;
      const token=localStorage.getItem('userToken')
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/products/${id}/review`,user,
        {headers:{Authorization:`Tariq__${token}`}});

        if(data.message =='success'){
            toast.success('review added successfuly', {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigate('/')
        }
        
    }
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema: loginSchema,
    });
    
    const inputs = [
      {
        id: "comment",
        type: "text",
        name: "comment",
        title: "comment",
        value: formik.values.comment,
      },
     
    ];
   
const renderInput = inputs.map((input, index) => (
  <Input
    type={input.type}
    id={input.id}
    name={input.name}
    title={input.title}
    touched={formik.touched}
    onBlur={formik.handleBlur}
    key={index}
    onChange={formik.handleChange}
    errors={formik.errors}

  />
));

  return (
   <>
  
   <div className='createReview vh-100'>
   <div className='container login-container review-container   rounded-3 mx-3'>
    <div className='review-input'>
    <h2 className='login-h2 text-center'>Your Review</h2>
    <form onSubmit={formik.handleSubmit}>
    {renderInput}
    <div className="star-review" >
  {Array.from({ length: 5 }).map((_, index) => (
    <React.Fragment key={index}>
      {index < rating ? (
        <FontAwesomeIcon
          icon={faStar}
          className="blue-star"
         
        />
      ) : (
        <FontAwesomeIcon
          icon={notsolid}
          className="blue-star"
          onClick={() => setRating(index+1)}
        />
      )}
    </React.Fragment>
  ))}
  <br />
  </div>
    <button type='submit' className='submit' onClick={()=>onSubmit(formik.values)}>Submit</button>
    
    </form>
    
    </div>
    </div>
   </div>
   
   </> 
  )
}

export default Review