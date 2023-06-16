const { Schema, model} = require('mongoose');


const schema = new Schema({
    startPoint: {type: String, required: true, minLength: [4, 'StartPoint must be at least 2 characters long']},
    endPoint: {type: String, required: true, minLength: [4, 'StartPoint must be at least 2 characters long']},
    date: {type: String, required: true},
    time: {type: String, required: true},
    carImage: {type: String, required: true, match: [/https?:\/\//, 'You have entered an invalid image address!']},
    carBrand: {type: String, required: true,  minLength: [4, 'CarBrand must be at least 4 characters long']},
    seats: {type: Number, required: true, min: 0, max: 4},
    price: {type: Number, required: true, min: 1, max: 50},
    description: {type: String, required: true, maxLength: [10, 'Description must be max 10 characters long']},
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    buddies: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    
});

const Trip = model('Trip', schema)
module.exports = Trip;