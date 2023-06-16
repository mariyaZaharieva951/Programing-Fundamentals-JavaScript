const { Schema, model} = require('mongoose');


const schema = new Schema({
    title: {type: String, required: true,  minLength: [4, 'Title must be at least 4 characters long']},
    description: {type: String, required: true, maxLength: [400, 'Title must be max 400 characters long']},
    category: {type: String, required: true,  enum: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other']},
    imageUrl: {type: String, required: true},
    price: {type: Number, required: true,  min: 1},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    bidder: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    
});

const Auction = model('Auction', schema)
module.exports = Auction;