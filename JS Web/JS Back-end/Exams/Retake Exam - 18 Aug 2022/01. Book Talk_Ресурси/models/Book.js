const { Schema, model} = require('mongoose');


const schema = new Schema({
    title: {type: String, required: true, minLength: [2, 'Title must be at least 2 characters long']},
    author: {type: String, required: true, minLength: [5, 'Author must be at least 5 characters long']},
    image: {type: String, required: true},
    bookReview: {type: String, required: true, minLength: [10, 'Review must be at least 10 characters long']},
    genre: {type: String, required: true, minLength: [3, 'Genre must be at least 3 characters long']},
    stars: {type: Number, required: true, min: 1, max: 5},
    wishingList: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
});

const Book = model('Book', schema)
module.exports = Book;