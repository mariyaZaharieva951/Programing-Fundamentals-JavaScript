const { Schema, model} = require('mongoose');

const schemaCub = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    imageUrl: { type: String, required: true, match: /^https?:\/\// },
    difficulty: { type: String, required: true, min: 1, max: 6 }
});


module.exports = model('Cube', schemaCub )