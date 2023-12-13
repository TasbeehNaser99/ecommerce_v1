import React, { useContext } from 'react'
import { OrderContext } from '../context/Order';


function UserOrders() {
 
    let {loader,userOrder}=useContext(OrderContext);
    console.log(userOrder);

  return (
   <>
  <table className='table'>
    <thead>
    <tr  className='table-info'>
        <th scope='col'>#</th>
        <th scope='col'>Order Address</th>
        <th scope='col'>Pyment Type</th>
        <th scope='col'>Status</th>
        <th scope='col'>Final Price</th>
        <th scope='col' >Phone Number</th>
    </tr>
    </thead>
   <tbody>
   {userOrder?.orders?(userOrder.orders.map((order,index)=>
   <>
   
   
    <React.Fragment key={index}>
       <tr>
        <th >{index}</th>
        <td >{order.address}</td>
        <td >{order. paymentType}</td>
        <td >{order. status}</td>
        <td >{order.finalPrice}</td>
        <td>{order. phoneNumber}</td> 
        </tr>
    </React.Fragment>
   </>)):'<h2>no found data</h2>'} 
   </tbody>
   </table>
   </>
  )
}

export default UserOrders