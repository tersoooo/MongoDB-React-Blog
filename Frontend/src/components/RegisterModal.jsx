import { useState } from "react";
import {motion} from "framer-motion";
import axios from 'axios';
import {IoClose} from "react-icons/io5";
import { toast } from "react-toastify";

const RegisterModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        profilePicture: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);
        const data = new FormData();
        data.append("username", formData.username);
        data.append("email", formData.email);
        data.append("password", formData.password);
        if (formData.profilePicture) {
            data.append("profilePicture", formData.profilePicture);
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Register Successfully! 🎉");
            onClose();
        } catch (err) {
            toast.error("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
        }finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
                variants={{
                    hidden: { rotate: -30, opacity: 0 },
                    visible: { rotate: 0, opacity: 1 },
                    exit: { rotate: 45, opacity: 0 },
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
                    <h3 className="text-2xl font-Poppins text-gray-200 font-semibold text-center w-full mt-5">
                        Register
                    </h3>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mt-5">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] py-2 transition-colors w-2/3 rounded outline-none"
                            placeholder="@username"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded py-2 outline-none"
                            placeholder="E-Mail"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded py-2 outline-none"
                            placeholder="password"
                            required
                        />
                        <input
                            type="file"
                            name="profilePicture"
                            onChange={handleFileChange}
                            className="bg-transparent px-4 border border-border-color hover:border-[#aab0b6] transition-colors w-2/3 rounded py-4 outline-none"
                            accept="image/*"
                        />
                        <motion.button
                            type="submit"
                            className="bg-second-color w-[330px] text-black py-2 font-bold text-balance rounded"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Register"}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterModal