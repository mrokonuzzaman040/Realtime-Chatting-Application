"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="fixed w-full bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Social Media App</h1>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            ></path>
                        </svg>
                    </button>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-cyan-500">
                        Home
                    </Link>
                    <Link href="/faq" className="hover:text-cyan-500">
                        FAQ
                    </Link>
                    <Link href="/apps" className="hover:text-cyan-500">
                        Apps
                    </Link>
                    <Link href="/protocol" className="hover:text-cyan-500">
                        Protocol
                    </Link>
                    <Link href="/contact" className="hover:text-cyan-500">
                        Contact
                    </Link>
                </nav>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={menuRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 bottom-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg z-40 p-4 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-8 ">
                            <h2 className="text-2xl font-bold text-white">Menu</h2>
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <Link href="/" className="block text-white hover:text-cyan-500" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link href="/faq" className="block text-white hover:text-cyan-500" onClick={toggleMenu}>
                                FAQ
                            </Link>
                            <Link href="/apps" className="block text-white hover:text-cyan-500" onClick={toggleMenu}>
                                Apps
                            </Link>
                            <Link href="/protocol" className="block text-white hover:text-cyan-500" onClick={toggleMenu}>
                                Protocol
                            </Link>
                            <Link href="/contact" className="block text-white hover:text-cyan-500" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
