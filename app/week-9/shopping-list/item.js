"use client";

export default function Item ({name, quantity, category, onSelect}){
    return(
        <div className="group drop-shadow-xl bg-white border-4 border-red-600 rounded-lg p-4 m-3 justify-items-center hover:bg-red-600 transition-all duration-200" onClick={onSelect}>
            <h2 className="text-2xl font-bold font-mono text-black uppercase group-hover:text-white">{name}</h2>
            <h3 className="text-lg font-mono text-red-600 font-semibold group-hover:text-white">Buy {quantity}</h3>
            <p className="text-sm text-gray-500 italic lowercase group-hover:text-white">In {category}</p>
        </div>
    );
};
