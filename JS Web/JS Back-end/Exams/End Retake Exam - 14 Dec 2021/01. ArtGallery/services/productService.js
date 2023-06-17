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

// async function getAuction(id) {
//     const auction = await Product.findById(id).populate('bidder').lean();
    
//     return auction;
// }

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

// async function bidderAuction(auctionId, userId, price) {
//     const auction = await Product.findById(auctionId);
//     if(auction.price < Number(price)) {
//         auction.bidder = userId;
//         auction.price = price
//     } else {
//         throw new Error('Your bid should no higher then the price!')
//     }

//     return auction.save();
// }

module.exports = {
    createProduct,
    getProductByID,
    getAllProducts,
    //bidderAuction,
    editProduct,
    deleteProduct
}