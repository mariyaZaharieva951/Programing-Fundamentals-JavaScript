const { Schema, model} = require('mongoose');


const schema = new Schema({
    username: {type: String, required: true, minLength: [2, 'Username must be at least 2 characters long']},
    email: {type: String, required: true, minLength: [10, 'Email must be at least 10 characters long']},
    hashedPassword: {type: String, required: true, minLength: [4, 'Password must be at least 4 characters long']}
});

const User = model('User', schema)
module.exports = User;