import React from 'react'
import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
function Input({id,name,title,type='text',onChange,errors,onBlur,touched,placeholder,icon,customClass}) {
  {console.log(icon)}
  return (
   
   <div className='form mb-3 mt-5 '>
    <label htmlFor={id} className='form-label'>{title}</label>
    <FontAwesomeIcon icon={icon}/>
    <input type={type} name={name} className={`form-control ${customClass}`} id={id} onBlur={onBlur} onChange={onChange} placeholder={placeholder}/>
    {touched[name]&&errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
   </div>
  )
}

export default Input