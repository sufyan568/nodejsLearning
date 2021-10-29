const path=require('path');
const express = require('express');
const router=express.Router();
const productController=require('../controller/product');

router.get('/shop',productController.getProducts);
router.get('/products',productController.getProducts);
router.get('/cart',productController.getProducts);
router.get('/checkout',productController.getProducts);

module.exports=router;