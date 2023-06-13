const { Schema, model} = require('mongoose');


const schema = new Schema({
    username: {type: String, required: true, unique: true, minLength: [3, 'Username must be at least 3 characters long']},
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true}
});

const User = model('User', schema)
module.exports = User;