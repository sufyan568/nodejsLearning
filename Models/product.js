// const products = [];
const path = require('path');
const fs = require('fs');
const p = path.join(path.dirname(process.mainModule.filename), 'public', 'products.json');
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
}
module.exports = class Product {
    constructor(t) {
        this.Title = t;
    }
    save() {
        // products.push(this);
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}