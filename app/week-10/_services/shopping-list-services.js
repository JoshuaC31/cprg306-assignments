import {db} from "../_utils/firebase";
import {collection, getDocs, addDoc, query, doc} from "firebase/firestore";

export async function getItems(userID){
    const itemsCollection = collection(doc(db, "users", userID), "items");
    const itemsQuery = query(itemsCollection);
    const itemsSnapshot = await getDocs(itemsQuery);

    const items = [];
    itemsSnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return items;
};

export async function addItem(userID, item) {
    const docRef = await addDoc(collection(db, "users", userID, "items"), item);
};