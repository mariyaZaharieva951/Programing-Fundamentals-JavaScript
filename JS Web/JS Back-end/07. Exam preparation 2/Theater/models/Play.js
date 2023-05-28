const { Schema, model } = require('mongoose');


const schema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true, maxLength: 50},
    imageUrl: {type: String, require: true},
    public: {type: Boolean, default: false},
    createAt: {type: Data, require: true},
    userLiked: {type: Schema.Types.ObjectId, ref: 'User', default: []}


});

module.exports = model('Play', schema)