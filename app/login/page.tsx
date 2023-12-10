"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle the login logic here
        console.log("Click happened");
        router.push("/");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="p-10 rounded flex justify-center items-center flex-col shadow-md">
                <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        className="mb-3 p-3 rounded text-blue-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        className="mb-5 p-3 rounded text-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;