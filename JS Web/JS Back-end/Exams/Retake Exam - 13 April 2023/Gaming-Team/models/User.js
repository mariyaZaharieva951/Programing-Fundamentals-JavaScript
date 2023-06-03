const { Schema, model } = mongoose;

const schema = new Schema ({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}

});

const User = model('User', schema);
module.exports = User;