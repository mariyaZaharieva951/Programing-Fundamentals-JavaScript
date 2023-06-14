const { Schema, model} = require('mongoose');


const schema = new Schema({
    headline: {type: String, required: true,  minLength: [4, 'Heandline must be at least 4 characters long']},
    location: {type: String, required: true,  minLength: [8, 'Location must be at least 8 characters long']},
    companyName: {type: String, required: true,  minLength: [3, 'Company name must be at least 3 characters long']},
    companyDescription: {type: String, required: true,  maxLength: [40, 'Paasword must be max 40 characters long']},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    users: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
});

const Ad = model('Ad', schema)
module.exports = Ad;