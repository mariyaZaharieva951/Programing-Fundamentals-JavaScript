const { Schema, model} = require('mongoose');


const schema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    methodPay: {type: Number, required: true},
    buyCripto: {type: Object.Types, required: true},
    owner: {type: Number, required: true},
});

const Crypto = model('User', schema)
module.exports = User;