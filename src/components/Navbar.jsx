import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {IoSearch} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {IoClose} from "react-icons/io5";
import {motion} from "framer-motion";

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

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div
                            className="w-[500px] bg-primary-color  h-[400px] flex flex-col rounded-xl border border-[#333]">
                            <div className="w-full flex justify-end px-4 mt-4">
                                <IoClose size={30}
                                         className="text-second-color cursor-pointer hover:scale-125 transition-all"
                                         onClick={() => setIsModalOpen(!isModalOpen)}
                                />
                            </div>
                            <h3 className="text-2xl font-Poppins text-gray-200 font-semibold text-center w-full mt-5">Register</h3>
                            <div className="flex justify-center mt-5">
                                <input type="text"
                                       className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded h-9 outline-none mt-4"
                                       placeholder="@username"
                                />
                            </div>
                            <div className="flex justify-center">
                                <input type="text"
                                       className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded h-9 outline-none mt-4"
                                       placeholder="E-Mail"
                                />
                            </div>
                            <div className="flex justify-center">
                                <input type="password"
                                       className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded h-9 outline-none mt-4"
                                       placeholder="password"
                                />
                            </div>
                            <div className="flex mt-14 w-full justify-center">
                                <motion.button
                                    className="bg-second-color w-[330px]  h-full text-black py-2 font-bold text-balance rounded"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale:1 }}
                                >
                                    Register
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Navbar;
