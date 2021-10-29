const express = require('express');
const path=require('path');
const router=express.Router();

const productController=require('../controller/product');


// Add Products Routes
router.get('/add-product',productController.getAddProducts);
router.get('/product-list',productController.getAddProducts);
router.post('/add-product',productController.postAddProducts);

module.exports=router;
// exports.routes=router;
// exports.products=products;
