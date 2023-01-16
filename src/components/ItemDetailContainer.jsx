import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getSingleItem } from "../firebase/config";

export default function ItemDetailContainer() {
	const [content, setContent] = useState([]);
    

	let { itemID } = useParams();

	useEffect(() => {
		getSingleItem(itemID)
			.then((respuesta) => {
				setContent(respuesta);
			})
			.catch((error) =>
				console.error(error)
			);
	}, [itemID]);

	return <ItemDetail plants={content} />;
}