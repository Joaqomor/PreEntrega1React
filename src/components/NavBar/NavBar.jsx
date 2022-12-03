import React from 'react';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {

    return (

        <>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <h2 className="text-success">PLANTA TU HOGAR</h2>
            
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            
                            <a className="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Home</a>
                            <a className="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Shop</a>
                            <a className="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Sobre Nosotros</a>
                            <a className="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Contacto</a>

                            <div className="text-white m-2 px-2 bg-success rounded-5 fs-3">
                                <CartWidget/>
                            </div>
            
                        </div>
                      
                    </div>
                    
                </nav>
        </>

    )

}

export default NavBar





