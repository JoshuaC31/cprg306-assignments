import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/1902.png')] bg-bannerImg bg-repeat bg-cover w-full h-screen">
            <div className="justify-items-center pt-6">
                <h1 className="text-white text-7xl font-bold font-mono underline decoration-solid tracking-tight uppercase mb-8">
                    Week 5</h1>
                <NewItem/>
            </div>
        </main> 
    );
};