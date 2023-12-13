import React, { useContext } from 'react'
import Input from '../../shared/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema, sendCodeSchema } from '../validation/validation.js';
import { toast } from 'react-toastify';
import axios from 'axios';
import './sendCode.css'
import { Link, useNavigate} from 'react-router-dom';

function SendCode() {
    const navigata=useNavigate();
    const initialValues={
        email:'',
    }
    
    const onSubmit=async (email)=>{
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,{email});
        navigata('/forgetpasswoed')
        
    }
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema: sendCodeSchema,
    });
    
    const inputs = [
      {
        id: "email",
        type: "email",
        name: "email",
        title: "user email",
        value: formik.values.email,
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
   <div className='bg-cover'>
   <div className='container sendCode-container  w-50  rounded-3 mx-3'>
   <div className='sendcode-cart'>
    <h2 className='login-h2 text-center'>Send Code</h2>
    <form onSubmit={formik.handleSubmit}>
    {renderInput}
    <button type='submit' className='submit' onClick={()=>onSubmit(formik.values.email)} >Send Code</button>
    
    </form>
    </div>
    </div>
   </div>
   </> 
  )
}

export default SendCode