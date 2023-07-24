"use client";

import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

export function MobileMenu({isOpen, setOpen}) {

    return (
        <section className={` ${isOpen ? "flex" : "hidden"} absolute top-0 w-full flex-col justify-center bg-[#181719] z-10`}>
            <button className="self-end w-9 h-9 transition absolute top-0 mt-[20px] mr-3">
                <VscChromeClose className="object-cover h-full w-full" onClick={() => setOpen(!isOpen)}/>
            </button>

            <nav className="min-h-screen py-8 flex flex-col justify-center items-center">
                <ul className="flex flex-col items-center gap-8">
                    <li className="text-center cursor-pointer text-lg font-medium relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-white">Home</li>
                    <li className="text-center cursor-pointer text-lg font-medium">Collection</li>
                    <li className="text-center cursor-pointer text-lg font-medium">About</li>
                    <li className="text-center cursor-pointer text-lg font-medium">Contact</li>
                </ul>
            </nav>
        </section>
    )
}