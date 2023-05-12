const { Schema, model} = require('mongoose');

const schemaCub = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficulty: Number
});


module.exports = model('Cube', schemaCub )