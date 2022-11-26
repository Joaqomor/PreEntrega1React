import React from 'react';

function Item (props) {
    const {img, title, par, link} = props

    return ( 

            <div class="card m-2" style={{width: '18rem'}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{par}</p>
                <a href={link} class="btn btn-primary">Agregar al Carrito</a>
            </div>
            </div> 
    )
}

export default Item;


