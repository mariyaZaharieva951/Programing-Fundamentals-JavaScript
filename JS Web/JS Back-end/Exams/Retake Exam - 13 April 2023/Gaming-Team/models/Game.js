const { Schema, model } = mongoose;

const schema = new Schema ({
    name: {type: String, require: true},
    image: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    genre: {type: String, require: true},
    platform: {type: String, require: true, enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"]},
    boughtBy: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
    owner: {type: Schema.Types.ObjectId, ref: 'User'}


});

const Game = model('Game', schema);
module.exports = Game;