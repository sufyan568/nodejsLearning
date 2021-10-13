const path=require('path');
const express = require('express');
const router=express.Router();

const rootDir=require('../util/path');
const adminData=require('./admin');

router.use('/shop',(req, res, next) => {
    const prod= adminData.products;
    res.render('shop',{
        pageTitle : 'Product List',
        products : prod,
        path : '/',
        hasProducts :prod.length > 0,
        
    }); // Allows the request to conitnue
    });

module.exports=router;