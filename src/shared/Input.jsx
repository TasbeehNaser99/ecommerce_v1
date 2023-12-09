import React from 'react'

function Input({id,name,title,type='text',onChange,errors,onBlur,touched}) {
  return (
   <div className='input-group mb-3'>
    <label htmlFor={id}>{title}</label>
    <input type={type} name={name} className='form-control' id={id} onBlur={onBlur} onChange={onChange}/>
    {touched[name]&&errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
   </div>
  )
}

export default Input