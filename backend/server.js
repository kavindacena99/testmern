const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
//const mongoose = require('mongoose');

// Load env variables
dotenv.config();

// Connect to MongoDB
const app = express();

// connect to mongodb

// Middleware
app.use(express.json());


app.use(cors());




// Test route
app.get("/",(req,res)=>{
    res.send("Welcome to the server");
});



// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});