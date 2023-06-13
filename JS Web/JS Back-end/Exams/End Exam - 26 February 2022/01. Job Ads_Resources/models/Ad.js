const { Schema, model} = require('mongoose');


const schema = new Schema({
    headline: {type: String, required: true},
    location: {type: String, required: true},
    companyName: {type: String, required: true},
    companyDescription: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    users: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
});

const Ad = model('Ad', schema)
module.exports = Ad;