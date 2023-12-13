// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export let OrderContext=createContext;
// export default function  OrderContextProvider({children}){
//     let [orderUser,setOrderUser]=useState();
//     let [loader,setLoader]=useState(true);
    
//     const getUserOrder=async()=>{
//         const token=localStorage.getItem('userToken');
//         const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/order`,
//         {headers:{Authorization:`Tariq__${token}`}})
//         setOrderUser(data.orders)
//         setLoader(false)
//     }
//     useEffect(()=>
//     getUserOrder()
//     ,[])
//     return <OrderContext.Provider value={{loader,orderUser}}>
//     {children}
//    </OrderContext.Provider>
// }
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let OrderContext=createContext();

export default function OrderContextProvider({children}){
    const[userOrder,setUserOrder]=useState(null);
    let[loader,setLoader]=useState(true);
    const getUserOrder= async()=>{
       try{
        const token =localStorage.getItem('userToken');
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/order`,
        {headers:{Authorization:`Tariq__${token}`}})
        setUserOrder(data);
        setLoader(false);
       }catch(error){
        console.log(error)
       }
           
          

        
    }
    useEffect(()=>{
        getUserOrder();
    },[])
    return <OrderContext.Provider value={{loader,userOrder}}>
     {children}
    </OrderContext.Provider>
}