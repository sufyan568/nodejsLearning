const Product = require('../Models/product');
const ProductModel = require('../Models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('./admin/addProduct', {
        pageTitle: "Add New Products",
        path: 'getProducts',
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
            path: 'getProducts',
            hasProducts: products.length > 0,

        });
    }); // Allows the request to conitnue
}

exports.getCarts = (req, res, next) => {
    // console.log(products);
    ProductModel.fetchAll(products => {
        res.render('./shops/productList', {
            pageTitle: 'Product List',
            products: products,
            path: '/Carts',
            hasProducts: products.length > 0,

        });
    }); // Allows the request to conitnue
}

exports.getCheckOut = (req, res, next) => {
    // console.log(products);
    ProductModel.fetchAll(products => {
        res.render('./shops/productList', {
            pageTitle: 'Product List',
            products: products,
            path: '/getCheckOut',
            hasProducts: products.length > 0,

        });
    }); // Allows the request to conitnue
}

exports.getShops = (req, res, next) => {
    // console.log(products);
    ProductModel.fetchAll(products => {
        res.render('./shops/productList', {
            pageTitle: 'Shop List',
            products: products,
            path: 'shopList',
            hasProducts: products.length > 0,

        });
    }); // Allows the request to conitnue
}