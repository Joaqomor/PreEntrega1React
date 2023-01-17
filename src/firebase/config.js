// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc, query, where, addDoc  } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA2LZIbt2s45nB2bgeSYQHZcZMjmf-IKk",
    authDomain: "plantatuhogar-4c41d.firebaseapp.com",
    projectId: "plantatuhogar-4c41d",
    storageBucket: "plantatuhogar-4c41d.appspot.com",
    messagingSenderId: "512824753329",
    appId: "1:512824753329:web:0ed210dd452f9d18beb690"
  };

// Initialize Firebase
const app= initializeApp(firebaseConfig);

const db= getFirestore(app);



export async function getSingleItem(id) {
	const plantRef = doc(db, "Plants", id);

	const plantSnapshot = await getDoc(plantRef);
	const plant = plantSnapshot.data();
	plant.id = plantSnapshot.id;



	return plant;

    
}

export async function getItems() {
	const plantsRef = collection(db, "Plants");
    const plantsSnapshot = await getDocs(plantsRef);
    const plantsArray = plantsSnapshot.docs;
    const dataPlants = plantsArray.map((plant) =>{
        return { ...plant.data(), id: plant.id}
    } );

    return dataPlants;


}


export async function getItemsCategory(categoryID) {
    
	const plantsRef = collection(db, "Plants");

	const queryCategorySnapshot = query(
		plantsRef,
		where("category", "==", categoryID)
	);

	const plantsSnapshot = await getDocs(queryCategorySnapshot);
	const plantsArray = plantsSnapshot.docs;

	const plantsDocs = plantsArray.map((plant) => {
		return { ...plant.data(), id: plant.id };
	});

	return plantsDocs;
}


export async function sendPurchaseOrder(order) {
	const ordersCollection = collection (db, 'orders');
	let newPurchaseOrder = await addDoc (ordersCollection, order)

	return newPurchaseOrder.id;
   
	
}