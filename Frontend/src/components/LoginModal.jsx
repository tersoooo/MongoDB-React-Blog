import React, {useState} from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import {motion} from "framer-motion";
import {IoClose} from "react-icons/io5";

const LoginModal = ({ isOpen, onClose, onLogin }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsSubmitting(true)

        try{

            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            const { token, userId, username, profilePicture } = response.data;

            localStorage.setItem("userId", userId);
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            localStorage.setItem("profilePicture", profilePicture);

            onLogin(username, profilePicture);

            toast.success('Login Successfully')
            onClose();

        }catch (err){
            toast.error('Login has Error!', err)
        }finally {
            setIsSubmitting(false)
        }

    }

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
                variants={{
                    hidden: {rotate: -30, opacity: 0},
                    visible: {rotate: 0, opacity: 1},
                    exit: {rotate: 45, opacity: 0},
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="w-[500px] bg-primary-color h-[500px] flex flex-col rounded-xl border border-[#333]">
                    <div className="w-full flex justify-end px-4 mt-4">
                        <IoClose
                            size={30}
                            className="text-second-color cursor-pointer hover:scale-125 transition-all"
                            onClick={onClose}
                        />
                    </div>
                    <h3 className="text-2xl font-Poppins text-gray-200 font-semibold text-center w-full mt-20 pb-5">
                        Login
                    </h3>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded py-2 outline-none"
                            placeholder="E-Mail"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded py-2 outline-none"
                            placeholder="password"
                            required
                        />
                        <motion.button
                            type="submit"
                            className="bg-second-color w-[330px] text-black py-2 font-bold text-balance rounded"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 1}}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Login"}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginModal;