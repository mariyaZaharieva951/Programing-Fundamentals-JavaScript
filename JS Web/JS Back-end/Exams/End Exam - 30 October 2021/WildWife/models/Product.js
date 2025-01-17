const { Schema, model} = require('mongoose');


const schema = new Schema({
    title: {type: String, required: true, minLength: [6, 'Title must be at least 6 characters long']},
    keyword: {type: String, required: true, minLength: [6, 'Keyword must be at least 6 characters long']},
    location: {type: String, required: true, maxLength: [15, 'Location must be max 15 characters long']},
    date: {type: String, required: true, minLength: 10, maxLength: 10},
    image: {type: String, required: true, match: [/https?:\/\//, 'You have entered an invalid image address!']},
    description: {type: String, required: true, minLength: [6, 'Description must be at least 6 characters long']},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    votes: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    rating: {type: Number, default: 0},
});

const Product = model('Product', schema)
module.exports = Product;