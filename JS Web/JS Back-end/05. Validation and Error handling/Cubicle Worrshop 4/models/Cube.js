const { Schema, model} = require('mongoose');



const schemaCub = new Schema({
    name: { type: String, 
            required: [true, 'Cube name is required'], 
            minLength: [5, 'Cube name must be at least 5 characters long'], 
            match:[ /^[a-zA-Z0-9 ]+$/, 'Cube name may contain only latin alphanumeric characters']},
    description: { type: String, 
                   required:[true, 'Cube name is required'], 
                   minLength: [20, 'Cube name must be at least 20 characters long'], 
                   maxLength: [500, 'Cube name must be a max 500 characters long'], 
                   match: [/^[a-zA-Z0-9 ]+$/, 'Cube name may contain only latin alphanumeric characters'] },
    imageUrl: { type: String, 
                required: true, 
                match: /^https?:\/\// },
    difficulty: { type: Number, min: 1, max: 6 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }],
    author: { type: Schema.Types.ObjectId, ref: 'User'  }
});


module.exports = model('Cube', schemaCub )