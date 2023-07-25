"use client";

import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { MobileMenu } from "@/components/MobileMenu.jsx";

export function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="px-3 py-[20px] sm:px-[77px] sm:pt-[42px] flex justify-between">

                <div className="w-[102px] h-[32px] flex justify-center items-center border-[1px]">
                    <p className="font-crimson-pro uppercase font-extralight text-sm">This interior</p>
                </div>

                <button className="w-9 h-9 cursor-pointer md:hidden block transition" onClick={() => setOpen((prev) => !prev)}>
                    <HiBars3 className="object-cover h-full w-full"/>
                </button>

                <nav className={`w-1/2 min-w-[537px] max-w-[537px] md:block hidden`}>
                    <ul className="flex justify-between items-center">
                        <li className="relative text-center cursor-pointer after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-white">
                            <button>Home</button>
                        </li>
                        <li className="text-center cursor-pointer">
                            <button>Collection</button>
                        </li>
                        <li className="text-center cursor-pointer">
                            <button>About</button>
                        </li>
                        <li className="text-center cursor-pointer">
                            <button>Contact</button>
                        </li>
                    </ul>

                </nav>

            </header>

            <MobileMenu isOpen={open} setOpen={setOpen}/>
        </>
    )
}