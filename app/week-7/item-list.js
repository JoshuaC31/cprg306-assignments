"use client";
import { useState} from "react";
import Item from "./item.js";


export default function ItemList({items}){

    const [sortBy, setSortBy] = useState("name");
    const sortedItemList = [...items].sort((firstItem, secondItem) =>{
        if(sortBy === "name"){
            if (firstItem.name > secondItem.name) return 1;
            if (firstItem.name < secondItem.name) return -1;
        };
        if(sortBy === "category"){
            if (firstItem.category > secondItem.category) return 1;
            if (firstItem.category < secondItem.category) return -1;
        };
        return 0;
    });

    return(
        <div>
            <main className="items-center">
                <div className="flex items-center mb-4">
                    <h2 className="text-white text-3xl font-mono font-bold mb-4"> Sort By: </h2>
                    <button className= {`shadow-xl border-2 border-red-600  text-black bg-red font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200 ${sortBy === "name" ? "bg-red-600 text-white" : "bg-white text-black"}`}
                    onClick={() => setSortBy("name")}>Name</button>
                    <button className= {`shadow-xl border-2 border-red-600  text-black bg-red font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200 ${sortBy === "category" ? "bg-red-600 text-white" : "bg-white text-black"}`} 
                    onClick={() => setSortBy("category")}>Category</button>
                </div>

                {
                    sortedItemList.map((item)=> {
                        return(
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}></Item>
                        )
                    })
                }
            </main>
        </div>
    );
};