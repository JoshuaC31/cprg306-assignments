"use client";

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return(
        <div>
            <div className="drop-shadow-md bg-white border-4 border-red-600 rounded-lg p-3 justify-items-center">
                <p className="text-black font-mono">Quantity: {quantity}</p>
                <button onClick={increment}  disabled={quantity === 20} 
                className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200 disabled:border-gray-400 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed" >
                    +</button>
                <button onClick={decrement} disabled={quantity === 0} 
                className="shadow-xl border-2 border-red-600  text-black font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200 disabled:border-gray-400 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed">
                    -</button>
            </div>
        </div>
    );

};