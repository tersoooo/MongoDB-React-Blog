import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {IoSearch} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import RegisterModal from './RegisterModal.jsx'
import {IoClose} from "react-icons/io5";
import {motion} from "framer-motion";
import axios from 'axios';

const Navbar = () => {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isModalOpen, setIsModalOpen] = useState(false);
    
    const modalVariants = {
        hidden: { rotate: -30, opacity: 0 },
        visible: { rotate: 0, opacity: 1 },
        exit: { rotate: 45, opacity: 0 },
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <Headroom>
                <div
                    className={`fixed w-full z-50 transition-all duration-500 ${
                        isScrolled ? "bg-opacity-90 bg-[#252525] h-[60px]" : "h-[80px]"
                    }`}
                >
                    <div className="container mx-auto flex justify-between items-center h-full">
                        <div>
                            <h1 className="text-white text-xl font-bold">
                                <NavLink to="/">
                                    My Blog
                                </NavLink>
                            </h1>
                        </div>
                        <div className="flex flex-1 justify-center gap-6 relative group ml-32">
                            <input
                                type="text"
                                placeholder="Search.."
                                className="w-1/2 bg-transparent border border-border-color outline-none rounded-full h-[40px] px-10 group-hover:border-[#aab0b6] duration-300"
                            />
                            <IoSearch
                                className="absolute left-[240px] top-3 text-border-color group-hover:text-white transition-all"/>
                        </div>
                        <div className="flex gap-x-5">
                            <a
                                href="#about"
                                className="text-balance font-medium text-white w-[70px] h-[37px] flex items-center justify-center px-2 py-1 rounded hover:bg-[#333] transition-all"
                            >
                                About
                            </a>
                            <a
                                onClick={() => setIsModalOpen(!isModalOpen)}
                                className="text-balance cursor-pointer font-medium bg-second-color w-[90px] h-[37px] flex items-center justify-center rounded text-black hover:bg-opacity-70 transition-all"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </Headroom>
            {isModalOpen && (

                <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            )}
        </>
    );
};

export default Navbar;
