import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/1902.png')] bg-bannerImg bg-repeat bg-cover bg-center w-full min-h-screen bg-fixed">
      <h1 className="flex justify-center text-white text-6xl font-bold font-mono underline decoration-solid tracking-tight uppercase mb-8">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link className="flex justify-center mt-4" href="/week-2">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 2 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-3">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 3 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-4">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 4 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-5">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 5 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-6">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 6 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-7">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 7 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-8">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 8 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-9">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 9 Assignment
        </button>
      </Link>
      <Link className="flex justify-center mt-4" href="/week-10">
        <button className="shadow-xl border-2 border-red-600  text-black bg-white font-mono py-2 px-6 m-3 rounded-lg hover:bg-red-500  hover:text-white transition-all duration-200">
          Week 10 Assignment
        </button>
      </Link>
    </main>
  );
};
