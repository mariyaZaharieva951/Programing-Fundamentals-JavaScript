const mongoose = require('mongoose');




module.exports = async (app) => {    //връща промис
    await mongoose.connect('mongodb://127.0.0.1:27017/cubicle'), {
        useNewUrlParser: true,
        useUnifieldTopology: true,
        useCreateIndex: true,
        autoIndex: false
    }
    console.log('Database condected!')
}