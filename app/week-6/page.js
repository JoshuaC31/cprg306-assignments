import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/1902.png')] bg-bannerImg bg-repeat bg-cover bg-center w-full min-h-screen bg-fixed">
        <div className="justify-items-center pt-6">
            <h1 className="text-white text-7xl font-bold font-mono underline decoration-solid tracking-tight uppercase mb-8">Shopping List</h1>
            <ItemList/>
        </div>
        </main>
    );
};