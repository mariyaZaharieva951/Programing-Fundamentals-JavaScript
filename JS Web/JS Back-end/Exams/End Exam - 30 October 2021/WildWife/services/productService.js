const Product = require('../models/Product');


async function createProduct(productData) {

    const product = await Product.create(productData);
    product.save();
    return product;
}

async function getProductByID(id) {
    const product = await Product.findById(id).lean();
    return product;
}


async function getAllProducts() {
    const products = await Product.find({}).lean();
    
    return products;
}


async function editProduct(id, productData) {
    const product = await Product.findById(id);

    product.title = productData.title;
    product.technique = productData.technique;
    product.picture = productData.picture;
    product.certificate = productData.certificate;
    
    
    return product.save();
}

async function deleteProduct(id) {
    return Product.findByIdAndDelete(id)
}

async function productShare(productId, userId) {
    const product = await Product.findById(productId);
    //if(product.price < Number(price)) {
        product.users.push(userId);
        //console.log(product.users)
        //product.price = price
   // } else {
    //     throw new Error('Your bid should no higher then the price!')
    // }

    return product.save();
}




module.exports = {
    createProduct,
    getProductByID,
    getAllProducts,
    productShare,
    editProduct,
    deleteProduct
}