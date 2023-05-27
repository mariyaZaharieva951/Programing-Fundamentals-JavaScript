const express = require('express');
const { PORT }  = require('./config/index');
const database = require('./config/database');
const expressConfig = require('./config/express')
const routesConfig = require('./config/routes');

// const userService = require('./services/user'); //test
// const authMiddleware = require('./middlewares/auth'); //test

start();

async function start() {

    const app = express();

    await database(app);
    expressConfig(app);
    routesConfig(app);

    // app.get('/', (req,res) => //demo
    // res.send('It works!'))

    app.listen(PORT, () => {
        //testAuth(),
        console.log(`Application started at http://localhost:${PORT}`)});
}

// async function testAuth() { //test

//         const reqMock = {};
//         const resMock = {
//             cookie() {
//                 //console.log('Set cookie',arguments);
//             }
//         }
//         const nextMock = () => {}

//     try{
//         const auth = authMiddleware();
//         auth(reqMock,resMock,nextMock);
//         await reqMock.auth.login('Peter', '123')
//         // const result = await userService.createUser('Peter', '123')
//         // console.log('result',result);

//         const user = await userService.getUserByUsername('Peter');
//         //console.log('2',user);
//     } catch(err) {
//         console.log('Error:', err.message)
//     }
// }