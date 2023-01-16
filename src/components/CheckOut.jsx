import React from 'react'
import { useParams } from 'react-router-dom';

function CheckOut() {
  const { orderId } = useParams();

  return (
    
    <div className="card" style={{margin:'20px auto', width:"600px",}}>
    <div className="card-body">
      <h5 className="card-title fs-1">Thank you for shopping at Planta tu hogar!</h5>
      <p className="card-text fs-5 p-3 ">in a few days you will receive your plants</p>
      <p className="card-text fs-5 p-3">Your order number is : {orderId} </p>
      
    </div>
  </div>
   
  )
}

export default CheckOut