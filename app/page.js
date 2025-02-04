import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-emerald-950 min-h-screen content-center ">
      <h1 className="flex justify-center text-white text-5xl font-bold font-mono underline decoration-solid tracking-tight uppercase">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link className="flex justify-center mt-4" href="/week-2">
        <button className="border-2 border-amber-400 text-amber-400 font-mono py-2 px-6 rounded-lg hover:bg-amber-400 hover:text-white transition-all duration-200">
          Week 2 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-3">
        <button className="border-2 border-amber-400 text-amber-400 font-mono py-2 px-6 rounded-lg hover:bg-amber-400 hover:text-white transition-all duration-200">
          Week 3 Assignment
        </button>
      </Link>
    </main>
  );
};
