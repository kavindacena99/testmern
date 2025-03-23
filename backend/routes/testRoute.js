const express = require('express');

const router = express.Router();

let name = "Kavinda";
let age = 21;

router.get("/food", async (req,res)=>{
    try{
        const foods = {
            "myname":name,
            "age":age
        };
        res.status(200).json(foods);
    }catch(err){
        res.status(500).json({ message:'Error '});
    }
});

module.exports = router;