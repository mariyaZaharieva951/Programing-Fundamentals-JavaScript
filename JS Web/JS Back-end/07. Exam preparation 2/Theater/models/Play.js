const { Schema, model } = require('mongoose');


const schema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true, maxLength: 50},
    imageUrl: {type: String, require: true},
    isPublic: {type: Boolean, default: false},
    createAt: {type: String, require: true},
    liked: {type: String, require: true}


});

module.exports = model('Play', schema)