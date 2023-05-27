const { Schema, model } = require('mongoose');


const schema = new Schema({
    name: {type: String, require: true, minLength: 4},
    city: {type: String, require: true, minLength: 3},
    imageUrl: {type: String, require: true, match: [/^https?/, 'Image must be valid URL']},
    rooms: {type: Number, require: true, min: 1, max: 100},
    bookedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    owner: {type: Schema.Types.ObjectId, ref: 'User'}


});

module.exports = model('Hotel', schema)