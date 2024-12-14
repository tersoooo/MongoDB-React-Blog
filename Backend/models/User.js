const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique : true,
        trim: true,
        minLength: 3,
    },
    email : {
        type: String,
        required : true,
        unique: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please use a valid email address",
        ],
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    createdAt : {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", UserSchema)