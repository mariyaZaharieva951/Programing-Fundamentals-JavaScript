const User = require('../models/User')

async function createUser(username,hashedPassword) {
    const user = new User({
        username,
        hashedPassword,
        likedPlays: []
    });
    
    user.save();
    
    return user;

}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    
    const user = await User.findOne({username: {$regex: pattern}});
    
    return user
    
}
module.exports = {
    createUser,
    getUserByUsername
}
//няма да има валидация в сървиса, приемаме че данните са валидни