const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const Post = require("../models/Post");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), async (req, res) => {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.body.author)) {
            return res.status(400).json({ message: "Geçersiz Author ID!" });
        }

        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            image: req.file ? `/uploads/${req.file.filename}` : "",
            author: req.body.author,
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        console.error("Post Ekleme Hatası:", err.message);
        res.status(500).json({ message: "Post eklenirken bir hata oluştu!", error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("author", "username profilePicture")
            .sort({ createdAt: -1 });

        const formattedPosts = posts.map((post) => ({
            ...post._doc,
            image: post.image ? `${req.protocol}://${req.get("host")}${post.image}` : null,
            author: {
                ...post.author._doc,
                profilePicture: post.author.profilePicture
                    ? `${req.protocol}://${req.get("host")}${post.author.profilePicture}`
                    : "/default-avatar.png",
            },
        }));

        res.status(200).json(formattedPosts);
    } catch (err) {
        console.error("Postları getirirken hata:", err.message);
        res.status(500).json({ message: "Postları getirirken bir hata oluştu!", error: err.message });
    }
});

module.exports = router;
