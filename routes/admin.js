const express = require('express');

const router=express.Router();



router.get('/add-product',(req, res, next) => {
        res.send('<form action="/admin/add-product" method="post" > <input type="text" name="product"><button type="submit">submit</button></form>')    
});

router.post('/add-product',(req, res, next) => {
console.log(req.body);
res.redirect('/admin/add-product');
});


module.exports=router;
