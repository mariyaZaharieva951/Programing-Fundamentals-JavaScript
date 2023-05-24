const { Schema, model } = require('mongoose');

const schemaComment = new Schema({
    author: { type: Schema.Types.ObjectId, required: 'User' },
    content: { type: String, required: true, maxLength: 250 }
});

module.exports = model('Comment', schemaComment)