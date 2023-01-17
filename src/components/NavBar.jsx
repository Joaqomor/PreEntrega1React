import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';



function NavBar() {

    return (

        
                <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-between">
                    <Link to = {"/"}> <img  className="ms-3 rounded-5" src="../Images/Logo.jpg" style={{width: '7rem', height:'5rem' }} alt="..."/> </Link>
                    <ul className="d-flex ">
                        <li ><Link className="link text-decoration-none me-5 text-success fs-5" to = {"home"}>Home</Link></li>
                        <li ><Link className="link text-decoration-none me-5 text-success fs-5" to = {"/category/int"}>Plantas de Interior</Link></li>
                        <li ><Link className="link text-decoration-none me-5 text-success fs-5" to = {"/category/ext"}>Plantas de Exterior</Link></li>
                        <li ><Link className="link text-decoration-none me-5 text-success fs-5" to = {"/aboutUs"}>About Us</Link></li>
                    </ul>
                    <div className="text-white bg-success rounded-5 fs-3 p-2 me-4"> <Link className="link text-decoration-none text-white" to = {"/cart"}>
                       <CartWidget/> 
                       </Link>
                    </div>
                    
                </nav>
        

    );

}

export default NavBar;





 