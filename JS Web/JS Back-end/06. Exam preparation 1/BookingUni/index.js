const express = require('express');
const { PORT }  = require('./config/index');
const database = require('./config/database');
const expressConfig = require('./config/express')

//const PORT = 3000;

start();

async function start() {

    const app = express();

    await database(app);
    expressConfig(app);

    app.get('/', (req,res) => 
    res.send('It works!'))

    app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));
}

