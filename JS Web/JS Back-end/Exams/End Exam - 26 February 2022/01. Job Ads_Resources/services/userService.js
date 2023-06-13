const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'brbr5184635brbr'



async function register(email,password,description) {
        console.log('userService')
        //const existingUser = await User.findOne({username})
        const existingEmail = await User.findOne({email})
    
        if(existingEmail) {
            throw new Error('Username or email is taken');
        }
        const hashedPassword = await bcrypt.hash(password,10)
    
        const user = await User.create({
            email,
            hashedPassword,
            description
        });
        console.log('user', user)
        await user.save()
        const token = createSession(user);
    
        return token;
    
}

async function login(email, password) {
    const user = await User.findOne({email})
    
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

module.exports = {
    register,
    login,
    verifyToken
}