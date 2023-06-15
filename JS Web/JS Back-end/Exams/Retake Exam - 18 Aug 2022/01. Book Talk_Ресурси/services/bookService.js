const Book = require('../models/Book');


async function createBook(bookData) {
    const book = await Book.create(bookData);
    book.save();

    return book;
}

async function getBookByID(id) {
    const book = await Book.findById(id).lean();
    
    return book;
}

async function getAllBooks() {
    const books = await Book.find({}).lean();
    
    return books;
}



// async function editAd(id, adData) {
//     const ad = await Ad.findById(id);

//     ad.headline = adData.headline;
//     ad.location = adData.location;
//     ad.companyName = adData.companyName;
//     ad.companyDescription = adData.companyDescription;
    
//     return ad.save();
// }

// async function deleteAd(id) {
//     return Ad.findByIdAndDelete(id)
// }

// async function applyAd(adId,userId) {
//     const ad = await Ad.findById(adId);
    
//     ad.users.push(userId);
//     return ad.save();
// }

module.exports = {
    createBook,
    getBookByID,
    getAllBooks,
    // applyAd,
    // editAd,
    // deleteAd
}