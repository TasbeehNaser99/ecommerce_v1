import React, { useContext } from 'react'
import { OrderContext } from '../context/Order';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function UserOrders() {
 
    let {loader,userOrder}=useContext(OrderContext);
   const cancel=async(id)=>{
    console.log(id);
    const token= localStorage.getItem('userToken');
    const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/order/cancel/${id}`,{},{
headers:{Authorization:`Tariq__${token}`}})
if (data.message == "success") {
  toast.success("order canceld successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}
   }
  return (
   <>
   <div className='user-order'>
  <table className='table'>
    <thead>
    <tr  className='table-warning'>
        <th scope='col'>#</th>
        <th scope='col'>Order Address</th>
        <th scope='col'>Pyment Type</th>
        <th scope='col'>Status</th>
        <th scope='col'>Final Price</th>
        <th scope='col'>Phone Number</th>
        <th scope='col'>Action</th>
    </tr>
    </thead>
   <tbody>
   {userOrder?.orders?(userOrder.orders.map((order,index)=>
   <>   
   {console.log(order)}
    <React.Fragment key={index}>
       <tr>
        <th >{index}</th>
        <td >{order.address}</td>
        <td >{order.paymentType}</td>
        <td className='status'><mark>{order. status}</mark></td>
        <td >{order.finalPrice}</td>
        <td>{order.phoneNumber}</td> 
        <td>{(order.status!='deliverd'&&order.status!='cancelled')&&<a href='#' onClick={()=>cancel(order._id)}><FontAwesomeIcon icon={faXmark} className='xMark'/></a>}</td>
        </tr>
    </React.Fragment>
   </>)):'<h2>no found data</h2>'} 
   </tbody>
   </table>
   </div>
   </>
  )
}

export default UserOrders