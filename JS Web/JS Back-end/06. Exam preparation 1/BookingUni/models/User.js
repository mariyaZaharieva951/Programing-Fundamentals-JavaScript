const { Schema, model } = require('mongoose');


const schemaUser = new Schema({
    username: {type: String, require: true},
    hashedPassword: {type: String, require: true}


});

module.exports = model('User', schemaUser)