const mongoose = require('mongoose');
const { DB_CONNECTION_STRING } = require('./index')


module.exports = (app) => {
    return new Promise((resolve,reject) => {
        mongoose.connect(DB_CONNECTION_STRING), {
        useNewUrlParser: true,
        useUnifieldTopology: true
    }
        console.log('Database ready');
        resolve();
        //})
    })
    

    
}

