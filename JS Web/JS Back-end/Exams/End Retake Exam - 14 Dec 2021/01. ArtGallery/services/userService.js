const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'brbr5184635brbr'



async function register(email, firstName, lastName, password) {
        const existingEmail = await User.findOne({email})
    
        if(existingEmail) {
            throw new Error('Email is taken');
        }
        const hashedPassword = await bcrypt.hash(password,10)
    
        const user = await User.create({
            email, 
            firstName, 
            lastName, 
            hashedPassword
        });
        await user.save()
        const token = createSession(user);
    
        return token;
    
}

async function login(email, password) {
    const user = await User.findOne({email})
    
    if(!user) {
        throw new Error('Incorrect email or password');
    }

    const isMatch = await bcrypt.compare(password,user.hashedPassword)
    if(!isMatch) {
        throw new Error('Incorrect username or password');
    }
    const token = createSession(user);
    
        return token;
}
    


function createSession(user) {
    const {_id,email } = user;
    const payload = {
        _id,
        email
    }
    const token = jwt.sign(payload,JWT_SECRET);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

async function getUserById(id) {
    let user = await User.findById(id).lean();
    return user;
}

module.exports = {
    register,
    login,
    verifyToken,
    getUserById
}