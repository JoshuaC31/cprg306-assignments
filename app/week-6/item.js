

export default function Item ({name, quantity, category}){
    return(
        <div className="drop-shadow-xl bg-white border-4 border-red-600 rounded-lg p-4 m-3 justify-items-center">
            <h2 className="text-2xl font-bold font-mono text-black uppercase">{name}</h2>
            <h3 className="text-lg font-mono text-red-600 font-semibold">Buy {quantity}</h3>
            <p className="text-sm text-gray-500 italic lowercase">In {category}</p>
        </div>
    );
};
