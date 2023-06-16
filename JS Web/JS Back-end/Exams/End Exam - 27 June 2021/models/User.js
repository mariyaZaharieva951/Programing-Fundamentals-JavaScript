const { Schema, model} = require('mongoose');


const schema = new Schema({
    email: {type: String, required: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'You have entered an invalid email address!']},
    hashedPassword: {type: String, required: true, minLength: [4, 'Password must be at least 4 characters long']},
    gender: {type: String, required: true, enum:{ values: ['male', 'female'], message: '{VALUE} is invalid!'}},
    tripsHistory: [{type: Schema.Types.ObjectId, ref: 'Trip'}]
});

const User = model('User', schema)
module.exports = User;