const { Schema, model} = require('mongoose');


const schema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    methodPay: {type: String, required: true},
    buyCripto: [{type: Schema.Types.ObjectId, required: true}],
    owner: {type: String, required: true},
});

const Crypto = model('Crypto', schema)
module.exports = Crypto;