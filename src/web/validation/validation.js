import * as yup from 'yup'
export const registerSchema=yup.object({
    userName:yup.string().required("email is reqierd").min(3,"must be 3 character").max(30,"must be 30 character"),
    email:yup.string().required("email is reqierd").email(),
    password:yup.string().required("password is requierd").min(3,"must be 3 character").max(30,"must be 30 character"),
})
export const loginSchema=yup.object({
    email:yup.string().required("email is reqierd").email(),
    password:yup.string().required("password is requierd").min(3,"must be 3 character").max(30,"must be 30 character"),
})
export const sendCodeSchema=yup.object({
    email:yup.string().required("email is reqierd").email(),
})
export const forgetSchema=yup.object({
    email:yup.string().required("email is reqierd").email(),
    password:yup.string().required("password is requierd").min(3,"must be 3 character").max(30,"must be 30 character"),
    code:yup.string().required("email is reqierd").min(4,"must be 3 character").max(4,"must be 3 character"),
})