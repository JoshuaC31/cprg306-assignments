"use client";

import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./item.json";

export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return(
        <main className="bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/1902.png')] bg-bannerImg bg-repeat bg-cover bg-center w-full min-h-screen bg-fixed">
        <div className="justify-items-center pt-6">
            <h1 className="text-white text-7xl font-bold font-mono underline decoration-solid tracking-tight uppercase mb-8">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </div>
        </main>
    );
};