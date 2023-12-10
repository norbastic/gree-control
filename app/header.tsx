"use client";
import React, { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="p-2 rounded focus:outline-none focus:ring"
                >
                    <AdjustmentsHorizontalIcon className="h-6 w-6 text-blue-500"/>
                </button>

                {/* Menu Items */}
                {isOpen && (
                    <div className="absolute top-16 left-0 bg-white rounded shadow-md p-2 mt-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Scan devices</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item 3</a>
                    </div>
                )}
                {/* Login Button */}
                <button className="border border-transparent hover:border-gray-300 text-white hover:text-gray-300 rounded py-2 px-4">
                 
                    <div className="flex justify-center gap-2">
                        <UserCircleIcon className="h-6 w-6 text-blue-500" />
                        <Link href="/login">Login</Link>
                    </div>

                </button>
            </div>
        </nav>
        </>
    )
}