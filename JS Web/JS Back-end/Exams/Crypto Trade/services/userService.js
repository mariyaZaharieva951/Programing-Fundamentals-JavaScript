const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'brbr5184635brbr';


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
    const pattern = new RegExp(`^${email}$`, 'i');
    
    const user = await User.findOne({email: {$regex: pattern}});
    
    return user;
    
}


async function register(username,email,password) {
        const existingUser = await User.findOne({username})
        const existingEmail = await User.findOne({email})
    
        if(existingUser || existingEmail) {
            throw new Error('Username or email is taken');
        }
        const hashedPassword = await bcrypt.hash(password,10)
    
        const user = createUser(username,email,hashedPassword);
        const token = createSession(user);
    
        return token;
    
}

async function login(email, password) {
    const user = await User.findOne({email}).collation({locale: 'en', strength: 2});
    if(!user) {
        throw new Error('Incorrect username or password');
    }
    
    const isMatch = await bcrypt.compare(password,user.hashedPassword)
    if(!isMatch) {
        throw new Error('Incorrect username or password');
    }
    const token = createSession(user);
    
        return token;
}
    


function createSession(user) {
    const {_id,username} = user;
    const payload = {
        _id,
        username
    }
    console.log('user',user)
    const token = jwt.sign(payload,JWT_SECRET);
    return token;
    
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    createUser,
    register,
    login,
    verifyToken,
    getUserByEmail
}