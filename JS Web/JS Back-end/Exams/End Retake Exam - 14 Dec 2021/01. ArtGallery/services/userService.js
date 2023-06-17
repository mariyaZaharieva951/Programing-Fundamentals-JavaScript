const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'brbr5184635brbr'



async function register(username, password, adress) {
        const existingUsername = await User.findOne({username})
    
        if(existingUsername) {
            throw new Error('Username is taken');
        }
        const hashedPassword = await bcrypt.hash(password,10)
    
        const user = await User.create({
            username,  
            hashedPassword,
            adress
        });
        await user.save()
        const token = createSession(user);
    
        return token;
    
}

async function login(username, password) {
    const user = await User.findOne({username})
    
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
    const {_id,username } = user;
    const payload = {
        _id,
        username
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

async function getUser(id) {
    let user = await User.findById(id).populate('myPublications').lean();
    return user;
}

async function addShare(productId, userId) {
    let user = await User.findById(userId);
    //console.log('USER', user)
    user.myPublications.push(productId);
    //console.log('AFTER',user)
    await user.save()
    return user;
}


module.exports = {
    register,
    login,
    verifyToken,
    getUserById,
    getUser,
    addShare
}