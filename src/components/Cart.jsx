import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return(
            <div className='d-flex flex-column justify-content-center align-items-center ' style={{margin:'15%'}}>
                <p className="text-success">THE CART IS EMPTY.</p>
                <Link className="btn btn-success" to='/'>BUY NOW</Link>
            </div>
        )
    }


    return(
        <>
            {
                cart.map(plants => <ItemCart key={plants.id} plants={plants}/>)
            }

            <p className="text-end fs-1 me-5">
                TOTAL: {totalPrice()} €
            </p>
        
        </>
    )
}

export default Cart