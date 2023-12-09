import React, { useContext } from 'react'
import Input from '../../shared/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema } from '../validation/validation.js';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';
function Login() {
  let {userToken,setUserToken}=useContext(UserContext)
    const navigate=useNavigate();
    if(userToken){
      navigate(-1);
    }
    const initialValues={
        email:'',
        password:'',
    }
    
    const onSubmit=async users=>{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,users);

        if(data.message =='success'){
            localStorage.setItem('userToken',data.token);
            setUserToken(data.token)
            toast.success('login successfuly', {
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
        id: "email",
        type: "email",
        name: "email",
        title: "user email",
        value: formik.values.email,
      },
      {
        id: "password",
        type: "password",
        name: "password",
        title: "user password",
        value: formik.values.password,
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
   <div className='container'>
    <h2>login</h2>
    <form onSubmit={formik.handleSubmit}>
    {renderInput}
    <button type='submit' disabled={!formik.isValid}>login</button>
    <Link className='ms-3' to={'/sendCode'}>forgetPassword?</Link>
    </form>
    
   </div>
   </> 
  )
}

export default Login