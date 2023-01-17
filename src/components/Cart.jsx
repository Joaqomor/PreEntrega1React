import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { useState } from 'react';
import {sendPurchaseOrder} from "../firebase/config"

const Cart = () => {
    const { cart, totalPrice, clearCart} = useCartContext();
    let navigateToURL = useNavigate();
    const [formError, setFormError] = useState("");
    const [buyerData, setBuyerData] = useState ({
        name:"",
        lastName:"",
        phone:"",
        adress:"",
        email:"",
        email2:"",
    })

    function handlePurchaseOrder(buyerData) {
        const order = {
            buyer: buyerData,
            items: cart.map (plants => ({ id: plants.id, name: plants.name, price: plants.price, quantity: plants.quantity })),
            total: totalPrice(),

    }
    
    sendPurchaseOrder(order)
    .then((orderId) => {
        navigateToURL(`/CheckOut/${orderId}`);
    })
    .then(() =>{
        clearCart(cart)
    })
}

function handleInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    const newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
}

function onSubmit(evt) {
    evt.preventDefault();
    
    if (buyerData.email !== buyerData.email2) {
        return setFormError("Your emails are diferent");
    }
    if (!buyerData.name) {
        return setFormError("Please enter your first name. ");
    }
    if (!buyerData.phone) {
        return setFormError("Please enter your phone number. ");
    }
    if (!buyerData.email) {
        return setFormError("Please enter your email. ");
    }
    if (!buyerData.email2) {
        return setFormError("Please repeat your email. ");
    }
    if (!buyerData.lastName) {
        return setFormError("Please enter your last name. ");
    }
    if (!buyerData.adress) {
        return setFormError("Please enter your adress. ");
    }

    handlePurchaseOrder(buyerData);
    

    setBuyerData({ name: "", email: "", phone: "", adress:"", lastName:"", email2:""});
    setFormError("");
}
    

    
    

    if (cart.length === 0) {
        return(
            <div className='d-flex flex-column justify-content-center align-items-center ' style={{margin:'15%'}}>
                <i className="bi bi-cart4 px-2 fs-1"></i>
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
                <div className='d-flex justify-content-around'>  
                    <p className="text-end fs-2 me-5">
                    TOTAL: {totalPrice()} €
                    </p>

                    <button className="btn-danger btn m-3" onClick={() => clearCart()}>Clear the cart</button>
                </div>  
                <form className="d-flex flex-column" style={{width:"30%", margin : "auto"}}>
                    <div>
                        <input name="name" type="text" value={buyerData.name} onChange={handleInputChange} placeholder="Name" className="form-control m-2" id="validationDefault01" required/>
                    </div>
                    <div>
                        <input name="lastName" type="text" value={buyerData.lastName} onChange={handleInputChange} placeholder="Last name" className="form-control m-2" id="validationDefault02" required/>
                    </div>
                    <div>
                        <input name="adress" type="text" value={buyerData.adress} onChange={handleInputChange} placeholder="Adress" className="form-control m-2" id="validationDefault02" required/>
                    </div>
                    <div>
                        <input name="phone" type="number" value={buyerData.phone} onChange={handleInputChange} placeholder="Phone number" className="form-control m-2" id="validationDefault02" required/>
                    </div>
                    <div>
                        <input name="email" type="email" value={buyerData.email} onChange={handleInputChange} placeholder="Email" className="form-control m-2" id="validationDefault02" required/>
                    </div>
                    <div>
                        <input name="email2" type="email"  value={buyerData.email2} onChange={handleInputChange} placeholder="Repeat your email adress" className="form-control m-2" id="validationDefault02" required/>
                    </div>
                    <button onClick={onSubmit} className='m-2 btn btn-primary fs-3'>Buy Now</button>
                    {formError && (
					<div>
						<span className="text-danger fs-4 m-4">{formError}</span>
					</div>
				)}
                </form>

        </>
    )
}

export default Cart