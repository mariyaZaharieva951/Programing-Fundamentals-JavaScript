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



async function editBook(id, bookData) {
    const book = await Book.findById(id);

    book.title = bookData.title;
    book.author = bookData.author;
    book.image = bookData.image;
    book.bookReview = bookData.bookReview;
    book.genre = bookData.genre;
    book.stars = bookData.stars;
    
    return book.save();
}

async function deleteBook(id) {
    return Book.findByIdAndDelete(id)
}

async function wishBook(bookId,userId) {
    const book = await Book.findById(bookId);
    
    book.wishingList.push(userId);
    return book.save();
}

module.exports = {
    createBook,
    getBookByID,
    getAllBooks,
    wishBook,
    editBook,
    deleteBook
}