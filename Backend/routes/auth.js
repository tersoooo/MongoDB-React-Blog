const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const fs = require("fs");
const path = require("path");
const User = require("../models/User");


const router = express.Router();

const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " - " + file.originalname);
    },
});

const upload = multer({storage});

const registerValidation = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

router.post("/register", upload.single("profilePicture"), async (req, res) => {
    try {
        const {error} = registerValidation.validate(req.body);
        if (error) return res.status(400).json({message: error.details[0].message});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            profilePicture: req.file ? `/uploads/${req.file.filename}` : "",
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Kayıt sırasında hata:", err);
        res.status(500).json({message: "Kayıt sırasında bir hata oluştu!", error: err.message});
    }
});

module.exports = router;
