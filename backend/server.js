const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const testRoute = require('./routes/testRoute');
//const mongoose = require('mongoose');

// Load env variables
dotenv.config();

// Connect to MongoDB
const app = express();

// connect to mongodb

// Middleware
app.use(express.json());


app.use(cors());

app.use('/api',testRoute);




// Test route
app.get("/",(req,res)=>{
    res.send("d");
});

/*
router.get("/food",protect,async (req,res)=>{
    try{
        const foods = await Food.find();
        res.status(200).json(foods);
    }catch(err){
        res.status(500).json({ message:'Error getting food items'});
    }
});
*/



// start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});