"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import {getItems, addItem} from "../_services/shopping-list-services.js"

export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function signIn(){
        await gitHubSignIn();
    };

    async function signOut(){
        await firebaseSignOut();
    };

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

    async function showData() {
        if(user) {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems)
        };
    };

    useEffect(() => {
        showData();
    },[user]);

    async function handleAddItem(newItem) {
        const newItemID = await addItem(user.uid, newItem);
        const newItems = [...items,{id:newItemID, ...newItem}]
        setItems(newItems);
    }

    const handleItemSelect = (item) => {
        const replacedName = item.name.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
        const splitName = replacedName.split(",")[0].split(" ")[0];
        setSelectedItemName(splitName);
    };

    return(
        <main className="bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/1902.png')] bg-bannerImg bg-repeat bg-cover bg-center w-full min-h-screen bg-fixed">
        {user?<div> <button onClick={signOut} className="rounded-lg bg-blue-400 p-2">Sign Out</button>
        <div className="justify-items-center pt-6">
            <h1 className="text-white text-7xl font-bold font-mono underline decoration-solid tracking-tight uppercase mb-8">Shopping List</h1>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col w-1/2">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </div>
        </div>: 
        <div>
            <p>You Do Not Have Access! Please Log In</p>
            <button onClick={signIn}className="rounded-lg bg-blue-400 p-2">Log In</button>
        </div>}
        </main>
    );
};