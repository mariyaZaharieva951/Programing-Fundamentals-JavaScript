const { Schema, model} = require('mongoose');


const schema = new Schema({
    name: {type: String, required: true,  minLength: [2, 'Name must be at least 2 characters long']},
    image: {type: String, required: true},
    age: {type: Number, required: true,  min: 1, max: 100},
    description: {type: String, required: true, minLength: [5, 'Description must be at least 5 characters long'], maxLength: [50, 'Description must be max 50 characters long']},
    location: {type: String, required: true,  minLength: [5, 'Description must be at least 5 characters long'], maxLength: [50, 'Description must be max 50 characters long']},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    commentList: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, comment: {type: String, required: true}}],
    
});

const Photo = model('Photo', schema)
module.exports = Photo;