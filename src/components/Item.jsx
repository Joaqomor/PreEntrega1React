import React from "react"
import {Link} from "react-router-dom"

export const Item = ({item}) => {
    return (
        <div>
            <div className="card m-2" style={{width: '18rem'}}>
            <Link to ={`/detail/${item.id}`}>
                <img style={{width: '18rem', height:'17rem' }} src={item.img} className="card-img-top" alt="..."/>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
                <span className="m-3  p-2 text-success bg-dark">{item.price} </span>
            </div>
            </div>

          </div>
    )
}