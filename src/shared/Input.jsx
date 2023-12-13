import React from 'react'
import './input.css'
function Input({id,name,title,type='text',onChange,errors,onBlur,touched}) {
  return (
   <div className='form mb-3 mt-5 '>
    <label htmlFor={id} className='form-label'>{title}</label>
    <input type={type} name={name} className='form-control' id={id} onBlur={onBlur} onChange={onChange}/>
    {touched[name]&&errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
   </div>
  )
}

export default Input