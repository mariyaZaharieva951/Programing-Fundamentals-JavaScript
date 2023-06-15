const { Schema, model} = require('mongoose');


const schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    image: {type: String, required: true},
    bookReview: {type: String, required: true},
    genre: {type: String, required: true},
    stars: {type: Number, required: true, min: 1, max: 5},
    wishingList: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
});

const Ad = model('Ad', schema)
module.exports = Ad;