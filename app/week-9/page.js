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
        <div>
            <main>
                <h1>Hello! Please Log In</h1>
                {
                    user?<div>Welcome, {user.displayName} ({user.email})
                    <p>To see shopping List click <a href="week-9/shopping-list">here</a>!!</p>
                    <button onClick={signOut} className="rounded-lg bg-blue-400 p-2">Sign Out</button>
                    </div> : 
                    <div>You are not logged in
                        <button onClick={signIn} className="rounded-lg bg-blue-400 p-2">Log In</button>
                    </div>
                }
            </main>
        </div>
    )
}