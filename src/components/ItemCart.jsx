import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({plants}) => {
  const { removeProduct } = useCartContext();

  
  return (
    
     <div className="card m-3 bg-dark" style={{ maxWidth: "100%", maxHeight:"100px"}}>
       <div className="row g-0">
          <div className="col-md-4">
            <img src={plants.img} className="img-fluid rounded-start p-1" alt="..." style={{height:"80px", width:"80px"}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title text-success">{plants.name}</h5>
              <p className="card-text text-success ">Quantity: {plants.quantity} </p>
              <p className="card-text text-success">Price: {plants.price} €</p>
              <p className="card-text text-success">Subtotal: {plants.quantity * plants.price} €</p>
              <button className="btn-danger btn" onClick={() => removeProduct(plants.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default ItemCart
