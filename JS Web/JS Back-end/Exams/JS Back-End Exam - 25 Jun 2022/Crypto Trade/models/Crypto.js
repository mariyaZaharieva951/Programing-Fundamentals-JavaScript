const { Schema, model} = require('mongoose');


const schema = new Schema({
    name: {type: String, required: true, minLength: [5, 'Username must be at least 5 characters long']},
    image: {type: String, required: true},
    price: {type: Number, required: true, min:1},
    description: {type: String, required: true, minLength: [10, 'Username must be at least 10 characters long']},
    methodPay: {type: String, required: true},
    buyCripto: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
});

const Crypto = model('Crypto', schema)
module.exports = Crypto;