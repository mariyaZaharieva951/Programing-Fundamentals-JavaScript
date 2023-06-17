const { Schema, model} = require('mongoose');


const schema = new Schema({
    title: {type: String, required: true,  minLength: [6, 'Title must be at least 6 characters long']},
    technique: {type: String, required: true, maxLength: [15, 'Technology must be max 16 characters long']},
    picture: {type: String, required: true, match: [/https?:\/\//, 'You have entered an invalid image address!']},
    certificate: {type: String, required: true, enum: ['yes', 'no']},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    users: [{type: Schema.Types.ObjectId, ref: 'User', default: []}]
    
});

const Product = model('Product', schema)
module.exports = Product;