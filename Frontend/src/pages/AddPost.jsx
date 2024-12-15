import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append("title", formData.title);
        data.append("content", formData.content);
        data.append("image", formData.image);
        data.append("author", localStorage.getItem("userId"));

        console.log("Gönderilen FormData:", {
            title: formData.title,
            content: formData.content,
            image: formData.image?.name,
            author: localStorage.getItem("userId"),
        });

        try {
            const response = await axios.post("http://localhost:5000/api/post/add", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Post başarıyla eklendi!");
            navigate("/"); // Başarılı olursa anasayfaya yönlendir
        } catch (err) {
            console.error("Axios Error:", err.response?.data || err.message);
            toast.error("Post eklenirken bir sorun oluştu!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="pt-32">
                <h1 className="text-2xl font-bold font-Poppins mb-6">Add New Post</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Başlık"
                        required
                        className="border p-2 rounded bg-transparent border-border-color outline-none"
                    />
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="İçerik"
                        rows="14"
                        required
                        className="border p-2 rounded bg-transparent border-border-color outline-none"
                    />
                    <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-second-color text-black font-Poppins p-2 rounded disabled:opacity-50"
                    >
                        {isSubmitting ? "Gönderiliyor..." : "Post Ekle"}
                    </button>
                </form>
            </div>
        </div>
    );
}
