const express = require('express')
const multer = require('multer')
const Post = require('../models/Post')
const path = require('path')

const router = express.Router();

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }

})


const upload = multer({ storage })

router.post('/add', upload.single('image'), async (req, res) => {

    try{
        
        const newPost = new Post({
            title : req.body.title,
            content : req.body.content,
            image: req.file ? `/uploads/${req.file.filename}` : "",
            author: req.body.author,
        })

        const savedPost = await newPost.save()
        res.status(201).json( savedPost);
        
    }catch (err){
        console.log('Post Error !', err.message);
        res.status(500).json({ message: "Post eklenirken bir hata oluştu!", error: err.message })
    }

})

module.exports = router