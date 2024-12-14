const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connect successfully!");
    } catch (err) {
        console.error("MongoDB Error!", err.message);
        throw err;
    }
};

app.get('/', (req, res) => {
    res.send('Backend working!');
});


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
