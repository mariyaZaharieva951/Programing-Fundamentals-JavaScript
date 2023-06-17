const { Schema, model} = require('mongoose');


const schema = new Schema({
    firstName: {type: String, required: true, minLength: [3, 'FirstName must be at least 3 characters long']},
    lastName: {type: String, required: true, minLength: [5, 'LastName must be at least 5 characters long']},
    email: {type: String, required: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'You have entered an invalid email address!']},
    hashedPassword: {type: String, required: true, minLength: [4, 'Password must be at least 4 characters long']},
    myPosts: [{type: Schema.Types.ObjectId, ref: 'Product', default: []}]

});

const User = model('User', schema)
module.exports = User;