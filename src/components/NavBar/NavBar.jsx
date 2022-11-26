import React from 'react';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {

    return (

        <>
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container-fluid">
                        <h2 class="text-success">PLANTA TU HOGAR</h2>
            
                        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            
                            <a class="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Home</a>
                            <a class="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Shop</a>
                            <a class="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Sobre Nosotros</a>
                            <a class="nav-link active me-3 text-success fs-5" aria-current="page" href="#">Contacto</a>

                            <div class="text-white m-2 px-2 bg-success rounded-5 fs-3">
                                <CartWidget/>
                            </div>
            
                        </div>
                      
                    </div>
                    
                </nav>
        </>

    )

}

export default NavBar





