import React from "react";

export default function ItemDetail({plants}) {
	return (

		    <div className="card my-3 mx-auto" style={{width: '25rem'}}>
            <img src={plants.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{plants.name}</h2>
                <p className="card-text">{plants.detail}</p>
                <h5>PRECIO:  {plants.price}</h5>
            </div>
        </div> 
	
);
}