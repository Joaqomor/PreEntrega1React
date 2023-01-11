import React from 'react';
import { useCartContext } from '../context/CartContext';


function CartWidget() {

    const {totalProducts} = useCartContext();

    return (

        <div >
            
            <i className="bi bi-cart4 px-2 "></i>
            <span className='fs-5 text-dark'> {totalProducts() || '' }</span>
            
        </div>

    );

}

export default CartWidget;

