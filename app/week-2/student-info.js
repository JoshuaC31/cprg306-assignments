import Link from "next/link";

export default function StudentInfo(){
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-emerald-950 p-6">
            <h1 className="text-white text-5xl font-bold font-mono tracking-tight uppercase mb-8">
                Joshua Chavez
            </h1>
            <Link href="https://github.com/JoshuaC31/cprg306-assignments">
                <button className="border-2 border-amber-400 text-amber-400 font-mono py-2 px-6 rounded-lg hover:bg-amber-400 hover:text-white transition-all duration-200">
                    cprg306-assignments Github Repository
                </button>
            </Link>
        </main>
    );
};