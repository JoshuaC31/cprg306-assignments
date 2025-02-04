export default function Item ({name, quantity, category}){
    return(
        <div className="bg-emerald-900 border-2 border-amber-400 text-white p-4 rounded-xl shadow-lg w-64 mb-6">
            <h2 className="text-xl font-bold font-mono">{name}</h2>
            <h3 className="text-lg font-mono text-amber-300">{quantity}</h3>
            <p className="text-sm text-gray-300 italic">{category}</p>
        </div>
    );
};