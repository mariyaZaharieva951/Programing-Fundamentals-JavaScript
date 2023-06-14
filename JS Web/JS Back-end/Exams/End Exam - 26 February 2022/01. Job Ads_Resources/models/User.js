const { Schema, model} = require('mongoose');


const schema = new Schema({
    //username: {type: String, required: true, unique: true, minLength: [3, 'Username must be at least 3 characters long']},
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true, minLength: [5, 'Paasword must be at least 5 characters long']},
    description: {type: String, required: true, maxLength: [40, 'Description must be max 40 characters long']},
    myAds: [{type: Schema.Types.ObjectId, ref: 'Ad', default: []}]
});

const User = model('User', schema)
module.exports = User;