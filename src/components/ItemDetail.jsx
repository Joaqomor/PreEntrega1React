import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { useCartContext } from "../context/CartContext";

export default function ItemDetail({plants}) {

    const [goToCart,SetGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        SetGoToCart(true);
        addProduct(plants,quantity);
    }
	return (

		    <div className="card my-3 mx-auto" style={{width: '25rem'}}>
            <img src={plants.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{plants.name}</h2>
                <p className="card-text">{plants.detail}</p>
                <h5>PRECIO:  {plants.price} €</h5>
                <div className="text-center">
                    {
                        goToCart
                        ? <Link className="btn btn-danger text-decoration-none text-dark" to='/cart'>Go to cart</Link>
                        
                        : <ItemCount initial={0} stock={plants.stock} onAdd ={onAdd} />
                    }
                    
                </div>
                
            </div>
        </div> 
	
);
}