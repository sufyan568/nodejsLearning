const Product = require('../Models/product');
const ProductModel = require('../Models/product');

exports.getShops = (req, res, next) => {
    res.render('./admin/addProduct', {
        pageTitle: "Add New Products"
    });
}


exports.postAddProducts = (req, res, next) => {
    // console.log(req.body.product);
    const product = new ProductModel(req.body.Title);
    product.save();
    // products.push({ Title: req.body.product });
    res.redirect('/general/shop');
}

exports.getProducts = (req, res, next) => {
    // console.log(products);
    ProductModel.fetchAll(products => {
        res.render('./shops/productList', {
            pageTitle: 'Product List',
            products: products,
            path: '/getProducts',
            hasProducts: products.length > 0,

        });
    }); // Allows the request to conitnue
}

exports.getCarts = (req, res, next) => {
    // console.log(products);
    ProductModel.fetchAll(products => {
        res.render('./shops/carts', {
            pageTitle: 'Cart List',
            products: products,
            path: '/carts',
            hasProducts: products.length > 0,

        });
    }); // Allows the request to conitnue
}