const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jb3dfl8xgn7bgkb'


async function createUser(username,email,hashedPassword) {
    const user = await User.create({
        username,
        email,
        hashedPassword
    });

    await user.save();
    return user;
}

async function getUserByEmail(email) {

    const user = await User.findOne({email})
    return user;
}

async function getUserById(userId) {
    
}

function createSession(user) {
    const payload = {
        username: user.username,
        _id: user._id
    };
    
    const token = jwt.sign(payload, JWT_SECRET);
    return token;

}

function verifyToken() {

}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    createSession
}

