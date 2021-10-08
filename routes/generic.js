const express = require('express');

const router=express.Router();


router.use('/general',(req, res, next) => {
    console.log("geenral routes middleware");
    res.send('<h1>Hello from express nodejs</h1>'); // Allows the request to conitnue
    });
module.exports=router;