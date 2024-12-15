import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {IoSearch} from "react-icons/io5";
import {Link, NavLink} from "react-router-dom";
import RegisterModal from './RegisterModal.jsx'
import LoginModal from "./LoginModal.jsx";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState(localStorage.getItem("profilePicture") || "");
    const [settings, setSettings] = useState(false)


    const [username, setUsername] = useState(localStorage.getItem("username") || "");

    const handleLogin = (username, profilePicture) => {
        setUsername(username);
        setProfilePicture(profilePicture);

        localStorage.setItem("username", username);
        localStorage.setItem("profilePicture", profilePicture);
    };

    const handleLogout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('username')
        setUsername('');

    }

    const modalVariants = {
        hidden: {rotate: -30, opacity: 0},
        visible: {rotate: 0, opacity: 1},
        exit: {rotate: 45, opacity: 0},
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
                        <div className="flex gap-x-[30px] items-center w-[200px] justify-center">

                            {username ? (
                                <>
                                    <img
                                        onClick={() => setSettings(!settings)}
                                        src={profilePicture}
                                        alt={username}
                                        className="w-8 h-8 rounded-full relative object-cover cursor-pointer"
                                    />
                                    {settings && (
                                        <div
                                            className="absolute top-20 h-[300px] text-black right-52 w-[200px] shadow-5xl bg-[#171c1e] rounded-lg">
                                            <div className="flex flex-col gap-y-5">
                                                <div
                                                    className="flex items-center gap-x-4 border-b border-b-border-color py-2 pb-3 px-2">
                                                    <img src={profilePicture} alt={username}
                                                         className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <span
                                                        className="text-white text-balance font-semibold">{username}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center pt-4 gap-x-1 group">
                                                <IoIosSettings size={18}
                                                               className="text-white group-hover:text-second-color transition-colors"/>

                                                <Link to="/add-post" className="text-white text-lg">
                                                    Add Posts
                                                </Link>
                                            </div>
                                            <div className="flex items-center justify-center pt-4 gap-x-1 group">
                                                <IoIosSettings size={18}
                                                               className="text-white group-hover:text-second-color transition-colors"/>
                                                <a href="#" className="text-white text-lg">Settings</a>
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        onClick={handleLogout}
                                        className="text-balance cursor-pointer font-medium bg-red-500 text-white w-[90px] h-[37px] flex items-center justify-center rounded  hover:bg-opacity-70 transition-all"
                                    >
                                        <BiLogOut size={22}/>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setIsLoginOpen(true)}
                                        className="text-balance font-medium text-white w-[90px] h-[37px] flex items-center justify-center px-2 py-1 rounded hover:bg-[#333] transition-all"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(!isModalOpen)}
                                        className="text-balance cursor-pointer font-medium bg-second-color w-[90px] h-[37px] flex items-center justify-center rounded text-black hover:bg-opacity-70 transition-all"
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Headroom>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLogin={handleLogin}/>

            {isModalOpen && (

                <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

            )}
        </>
    );
};

export default Navbar;
