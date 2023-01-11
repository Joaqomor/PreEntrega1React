import plants from "../components/mockData";

import {getFirestore, doc, getDoc} from "firebase/firestore";


export default function getItems() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(plants);
		}, 2000);
	});
}

export function getItemsCategory(categoryID) {
	return new Promise((resolve, reject) => {
		let itemsFound = plants.filter((item) => {
			return item.category === categoryID;
		});

		if (itemsFound.length >0){
			resolve(itemsFound);
		} else {
			reject("NO PRODUCTS")
		}
		
	});
}

export function getSingleItem(itemID) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let itemFound = plants.find(
				(itemInArray) => itemInArray.id === parseInt(itemID)
			);
			if (itemFound) {
				resolve(itemFound);
			} else {
				reject("NO ITEM");
			}
		}, 500);
	});
}