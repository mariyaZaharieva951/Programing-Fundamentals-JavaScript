const {createUser,getUserByEmail,getUserById,createSession} = require('../services/userService')
const User = require('../models/User');
const bcrypt = require('bcrypt');


async function register(username, email, password) {
    
    const existingUser = await User.findOne({username});
    const existingEmail = await User.findOne({email});
    if(existingUser || existingEmail) {
        throw new Error('Username or email is already existing!')
    }
    const hashedPassowrd = await bcrypt.hash(password, 10);
    const user = await createUser(username,email,hashedPassowrd);

    const token = createSession(user);
    return token;

}

async function login(email,password) {

    const user = await getUserByEmail({
        email,
        password
    });
    if(!user) {
        throw new Error('This user is don`t exist!')
    }

}

async function logout() {

}

module.exports = {
    register,
    login,
    logout
}