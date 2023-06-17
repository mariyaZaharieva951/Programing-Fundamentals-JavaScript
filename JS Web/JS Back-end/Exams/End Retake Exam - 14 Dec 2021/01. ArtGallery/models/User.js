const { Schema, model} = require('mongoose');


const schema = new Schema({
    username: {type: String, required: true, minLength: [4, 'Username must be at least 4 characters long']},
    hashedPassword: {type: String, required: true, minLength: [3, 'Password must be at least 3 characters long']},
    adress: {type: String, required: true, maxLength: [20, 'FirstName must be max 20 characters long']},
    myPublications: [{type: Schema.Types.ObjectId, ref: 'Product', default: []}]

});

const User = model('User', schema)
module.exports = User;