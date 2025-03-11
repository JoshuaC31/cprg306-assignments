"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }){

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event)=>{
        event.preventDefault();
        const newId = Math.floor(Math.random() * 1000000);
        const newItem = { id: newId, quantity, name, category};
        onAddItem(newItem);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const handleNameChange = (event)=> {
        setName(event.target.value);
    };

    
    const handleCategoryChange = (event)=> {
        setCategory(event.target.value);
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return(
        <div>
            <h2 className="text-white text-3xl font-bold font-mono mb-4"> Add an item to the list</h2>
            <form  className="drop-shadow-md bg-white border-4 border-red-600 rounded-lg p-3 justify-items-center" onSubmit={handleSubmit}>
                <div>
                    <input  required className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-600  hover:text-white transition-all duration-200" type="text" placeholder="Enter Item Name" value={name} onChange={handleNameChange}> 
                    </input>
                </div>
                <p className="text-black font-mono">Quantity: {quantity}</p>
                <div>
                    <button type="button" onClick={increment}  disabled={quantity === 20} 
                    className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-600  hover:text-white transition-all duration-200 disabled:border-gray-400 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed" >
                        +</button>
                    <button type="button" onClick={decrement} disabled={quantity === 1} 
                    className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-600  hover:text-white transition-all duration-200 disabled:border-gray-400 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed">
                        -</button>
                </div>
                <label htmlFor="category" className="font-mono text-black"> Select a Category </label>
                <select id="category"className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-600  hover:text-white transition-all duration-200" value={category} onChange={handleCategoryChange}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                <div>
                <button type="submit" className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-600  hover:text-white transition-all duration-200">Submit</button>
                </div>
            </form>
        </div>
    );

};