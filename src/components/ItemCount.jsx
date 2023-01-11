 import React from "react";
import { useState, useEffect } from "react";

 export const ItemCount = ({initial, stock, onAdd}) => {
    const [count,setCount] = useState(parseInt(initial))

    const deduct = () => {
        setCount(count - 1)
    }

    const add = () => {
        setCount(count + 1)
    }

    useEffect (() =>{
        setCount(parseInt(initial))
    }, [initial] )

    return (
        <div>
            <button disabled={count <= 0} className="btn btn-dark m-2" onClick={deduct}>-</button>
            <span>{count}</span>
            <button disabled ={count >= stock} className="btn btn-dark m-2" onClick={add}>+</button>
            <div>
                <button disabled = {count <= 0} onClick={()=> onAdd(count)} className="btn btn-success">Add to cart</button>
            </div>

        </div>
    );
 }

 