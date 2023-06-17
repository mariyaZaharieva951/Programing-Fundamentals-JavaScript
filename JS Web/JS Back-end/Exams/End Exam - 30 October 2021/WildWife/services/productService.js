const Product = require('../models/Product');


async function createProduct(productData) {

    const product = await Product.create(productData);
    product.save();
    return product;
}

async function getProductByID(id) {
    const product = await Product.findById(id).populate('votes').lean();
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

async function upVote(productId, userId) {
    const product = await Product.findById(productId);
    
    product.votes.push(userId);
    product.rating++;
    return product.save();
}

async function downVote(productId, userId) {
    const product = await Product.findById(productId);
    
    product.votes.push(userId);
    product.rating--;
    return product.save();
}




module.exports = {
    createProduct,
    getProductByID,
    getAllProducts,
    upVote,
    downVote,
    editProduct,
    deleteProduct
}