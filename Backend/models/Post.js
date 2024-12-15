const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content : { type: String, required: true },
        image: { type: String, default: "" },
        author: { type: String, required: true },
    },
    { timestamps : true }
);

module.exports = mongoose.model("Post", PostSchema)