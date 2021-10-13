const express = require('express');
const path=require('path');
const router=express.Router();

const rootDir=require('../util/path');

const products = [];
router.get('/add-product',(req, res, next) => {
    res.render('addProduct',{
        pageTitle:"Add New Products"
    });    
    // res.send('<form action="/admin/add-product" method="post" > <input type="text" name="product"><button type="submit">submit</button></form>')    
});

router.post('/add-product',(req, res, next) => {
console.log(req.body.product);
products.push({ Title : req.body.product});
res.redirect('/general/shop');
});


// module.exports=router;

exports.routes=router;
exports.products=products;
