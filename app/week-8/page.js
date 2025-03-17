"use client";

import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas.js";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        const replacedName = item.name.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
        const splitName = replacedName.split(",")[0].split(" ")[0];
        setSelectedItemName(splitName);
    };

    return(
        <main className="bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/1902.png')] bg-bannerImg bg-repeat bg-cover bg-center w-full min-h-screen bg-fixed">
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
        </main>
    );
};