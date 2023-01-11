import React from "react"
import {Link} from "react-router-dom"

export const Item = ({item}) => {
    return (
        <div>
            <div className="card m-2 bg-dark" style={{width: '18rem'}}>
                <img style={{width: '18rem', height:'17rem' }} src={item.img} className="card-img-top p-3" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-success text-center">{item.name}</h5>
                <p className="card-text text-success">{item.desc}</p>
                <button className="btn btn-success"><Link className="link text-decoration-none text-dark" to ={`/detail/${item.id}`}>View more</Link></button>
                
            </div>
            </div>

          </div>
    )
}