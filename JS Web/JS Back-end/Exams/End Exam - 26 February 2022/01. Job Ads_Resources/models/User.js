const { Schema, model} = require('mongoose');


const schema = new Schema({
    //username: {type: String, required: true, unique: true, minLength: [3, 'Username must be at least 3 characters long']},
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    description: {type: String, required: true},
    myAds: {type: Schema.Types.ObjectId, ref: 'Ad', default: []}
});

const User = model('User', schema)
module.exports = User;