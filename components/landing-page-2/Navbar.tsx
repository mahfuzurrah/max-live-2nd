"use client";

import { useState, useEffect } from 'react';
import logo from "@/public/images/landing-page-2/logo-light.svg"
import logoDark from "@/public/images/landing-page-2/logo-dark.svg"
import Image from 'next/image';

export default function Navbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',
                handleScroll);
        };
    }, []);

    const handleWindowResize = () => {
        if (window.innerWidth >= 960) setOpenNav(false);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-20 text-white ${isScrolled ? "bg-[#0246ad]" : "bg-transparent"}`}>
            <div className="container py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Image className='h-auto scale-105 ml-2' src={logo} alt="logo" />
                </div>
                <ul className={`transition-transform duration-300 ease-in-out transform md:flex space-x-2 h-full md:h-auto ${openNav ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:translate-y-0 md:space-x-2 md:static fixed w-full left-0 top-0 md:w-auto bg-white md:bg-transparent text-black md:text-white`}>
                    <div onClick={() => setOpenNav(!openNav)} className='flex md:hidden justify-between p-4'>
                        <Image className='h-auto scale-105 ml-2' src={logoDark} alt="logo" />
                        <button className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <li><a href="#" className="block px-4 py-2">Home</a></li>
                    <li><a href="#" className="block px-4 py-2">Features</a></li>
                    <li><a href="#" className="block px-4 py-2">Pricing</a></li>
                    <li><a href="#" className="block px-4 py-2">About Us</a></li>
                    <li><a href="#" className="block px-4 py-2">Contact Us</a></li>
                </ul>

                <div className='hidden lg:flex items-center gap-4'>
                    <button className={`py-2 px-6 border border-white rounded-full text-white font-medium bg-transparent`}>
                        Login
                    </button>
                    <button className={`py-2 px-6 bg-white text-blue-600 rounded-full hover:bg-transparent hover:text-white border`}>
                        Join the waiting list
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setOpenNav(!openNav)} className={`text-lg p-1 focus:outline-none`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
