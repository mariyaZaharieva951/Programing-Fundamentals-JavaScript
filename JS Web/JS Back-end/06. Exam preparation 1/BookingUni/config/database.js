const mongoose = require('mongoose');
const { DB_CONNECTION_STRING } = require('./index')

console.log(DB_CONNECTION_STRING)
module.exports = (app) => {
    return new Promise((resolve,reject) => {
        mongoose.connect(DB_CONNECTION_STRING);
        // const db = mongoose.connection;
        // db.on('error', (err) => {console.error('connection error:', err)
        // reject(err);
        // })
        //db.once('open', function() {
        console.log('Database ready');
        resolve();
        //})
    })
    

    
}

