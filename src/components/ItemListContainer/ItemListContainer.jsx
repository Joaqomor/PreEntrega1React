import React from 'react';

const item = {
  img: "...",
  title: "Esta planta",
  par: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor! Vero maxime suscipit aliquid quibusdam quo tempora doloribus",
  link: "#",
  precio:"$$$"
};


function ItemListContainer (props) {
  const {img, title, par, link, precio } = props

  return ( 

          <div className="card m-2" style={{width: '18rem'}}>
          <img src={item.img} class="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.par}</p>
              <a href={item.link} class="btn btn-primary">Agregar al Carrito</a>
              <span className="m-3  p-2 text-success bg-dark">{item.precio} </span>
          </div>
          </div> 
  )
}


export default ItemListContainer


