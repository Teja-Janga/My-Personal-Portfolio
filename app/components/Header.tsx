
'use client';
import Link from "next/link";
import { HiMenu, HiX } from 'react-icons/hi';
import { DiCssdeck } from 'react-icons/di';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="container mx-auto px-4 pt-4 flex justify-between
        items-center text-white relative z-50">
            {/* Logo Section */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center text-white
                hover:text-opacity-80 transition-all">
                    <DiCssdeck size="3rem" />
                        <span className="text-3xl font-bold ml-2">Portfolio</span>
                </Link>
            </div>

            {/* Navigation Link */}
            <div className="hidden md:flex gap-8 text-xl text-gray-400">
                <Link href="#projects" className="hover:text-white font-semibold
                transition-colors">
                    Projects
                </Link>
                <Link href="#tech" className="hover:text-white font-semibold transition-colors">
                    Technologies
                </Link>
                <Link href="#about" className="hover:text-white font-semibold transition-colors">
                    About
                </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden text-3xl cursor-pointer hover:text-cyan-400
            transition-colors" onClick={toggleMenu}>
                {isMenuOpen ? <HiX /> : <HiMenu />}
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-neutral-900 border-b
                    border-neutral-800 p-6 flex flex-col items-center gap-6 md:hidden
                    shadow-2xl animate-in slide-in-from-top-5 fade-in duration-300"
                >
                    <Link href="#projects" className="text-white text-xl font-semibold
                        hover:text-cyan-400" onClick={toggleMenu}>
                        Projects
                    </Link>
                    <Link href="#technologies" className="text-white text-xl font-semibold
                        hover:text-cyan-400" onClick={toggleMenu}>
                        Technologies
                    </Link>
                    <Link href="#about" className="text-white text-xl font-semibold
                        hover:text-cyan-400" onClick={toggleMenu}>
                        About
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;