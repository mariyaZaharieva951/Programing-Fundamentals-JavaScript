const {createUser,getUserByEmail,getUserById,createSession} = require('../services/userService')
const User = require('../models/User');
const bcrypt = require('bcrypt');


async function register(username, email, password) {
    
    const existingUser = await User.findOne({username});
    const existingEmail = await User.findOne({email});
    if(existingUser || existingEmail) {
        throw new Error('Username or email is already existing!')
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username,email,hashedPassword);
    const token = createSession(user);
    return token;

}

async function login(email,password) {

    const user = await getUserByEmail(email);

    if(!user) {
        throw new Error('This user is don`t exist!')
    }
    const isMatch = await bcrypt.compare(password,user.hashedPassword);
    if(!isMatch) {
        throw new Error('Incorrect username or password')
    }
    const token = createSession(user);
    return token;

}



module.exports = {
    register,
    login
}