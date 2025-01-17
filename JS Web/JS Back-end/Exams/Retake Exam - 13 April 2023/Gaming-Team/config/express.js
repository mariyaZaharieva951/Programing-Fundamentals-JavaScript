const cookieParser = require('cookie-parser');
const express = require('express');
const {engine} = require('express-handlebars');
const session = require('../middlewares/session');


module.exports = (app) => {
    app.engine('hbs', engine({
        extname: '.hbs'
    }));
    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(session());
}