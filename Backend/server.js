const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connect successfully!");
    } catch (err) {
        console.error("MongoDB Error!", err.message);
        throw err;
    }
};

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.get('/', (req, res) => {
    res.send('Backend working!');
});

const postRoute = require('./routes/Post')

app.use('/api/post', postRoute)


const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server ${PORT} working!`));
    } catch (err) {
        console.error("Failed to start server:", err.message);
    }
};

startServer();
