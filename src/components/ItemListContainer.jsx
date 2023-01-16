import { useEffect, useState } from "react"
import {List} from "./ItemList"
import { useParams } from "react-router-dom"
import { getItems,getItemsCategory } from "../firebase/config"



export default function ItemContainer () {
    const [content,setContent] = useState([])
    const {categoryId} =useParams();


    useEffect(() => {
      if (categoryId === undefined) {

        getItems()
          .then((respuesta) => {
            setContent(respuesta);
          })
          .catch((error) => console.error("ItemListContainer Non Category error:",error));
      } else {
        getItemsCategory(categoryId)
          .then((respuestaFiltrada) => setContent(respuestaFiltrada))
          .catch((errorMsg) => console.error("ItemListContainer Category error:",errorMsg));
      }
    }, [categoryId]);

    
    return content.length ? <List items ={content} /> : 
    
    <div className="d-flex justify-content-center mt-3">
    <h2>Cargando...</h2>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span> 
    </div>
  </div>
};  

