const { Schema, model} = require('mongoose');


const schema = new Schema({
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true, minLength: [5, 'Password must be at least 5 characters long']},
    firstName: {type: String, required: true, minLength: [1, 'FirstName must be at least 1 characters long']},
    lastName: {type: String, required: true, minLength: [1, 'LastName must be at least 1 characters long']},


});

const User = model('User', schema)
module.exports = User;