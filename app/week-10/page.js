"use client";

import { useUserAuth } from "./_utils/auth-context.js"

    //1 create a context
    //2 create a provider and wrap all the componnents
    //inside the provider
    //use a context

export default function Page()
{
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function signIn(){
        await gitHubSignIn();
    };

    async function signOut(){
        await firebaseSignOut();
    };

    return (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <main className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="px-8 py-6 rounded-lg bg-white w-72 max-w-3xl text-center">
                <h1 className="text-center font-bold text-3xl text-black">Hello!</h1>
                {
                    user?<div> <p className="text-center font-bold text-3xl text-black">Welcome,</p><p className="text-center font-bold text-1xl text-black">{user.displayName} ({user.email})</p>
                    <p className="text-center font-bold text-1xl text-black">To see shopping List click </p> <p className="text-center font-bold text-1xl text-blue-500 "><a href="week-10/shopping-list">Here!!</a></p>
                    <button onClick={signOut} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">Sign Out</button>
                    </div> : 
                    <div> <p className="mt-6 text-center font-bold text-1xl text-black">You are not logged in</p>
                        <button onClick={signIn} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">Log In</button>
                    </div>
                }
                </div>
            </main>
        </div>
    )
}