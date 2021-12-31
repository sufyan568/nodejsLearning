const path=require('path');
const express = require('express');
const router=express.Router();
const productController=require('../controller/product');

router.get('/shop',productController.getShops);
router.get('/products',productController.getProducts);
router.get('/cart',productController.getCarts);
router.get('/checkout',productController.getCheckOut);

module.exports=router;