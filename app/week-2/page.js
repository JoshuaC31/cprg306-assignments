import StudentInfo from "./student-info";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-emerald-950 p-6">
            <h1 className="text-white text-5xl font-bold font-mono underline decoration-solid tracking-tight uppercase mb-8">Shopping List</h1>
            <StudentInfo/>
        </main>
    );
};