const express = require('express');
const { PORT }  = require('./config/index');
const database = require('./config/database');
const expressConfig = require('./config/express')

const userService = require('./services/user');
//const PORT = 3000;

start();

async function start() {

    const app = express();

    await database(app);
    expressConfig(app);

    app.get('/', (req,res) => 
    res.send('It works!'))

    app.listen(PORT, () => {
        testAuth(),
        console.log(`Application started at http://localhost:${PORT}`)});
}

async function testAuth() {
    try{
        // const result = await userService.createUser('Peter', '123')
        // console.log('result',result);

        const user = await userService.getUserByUsername('peter');
        console.log('2',user);
    } catch(err) {
        console.log('Error:', err.message)
    }
}