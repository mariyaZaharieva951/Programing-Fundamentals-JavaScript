const express = require('express');
const hbs = require('express-handlebars');


module.exports = (app) => {
    app.engine('hbs', hbs({extname: '.hbs'})) //задаваме разширението на файловете и функцията, на която подаваме настройка за разширението(по подразбиране е handelbars)
app.set('view engine', 'hbs') //сетваме viewEngine да търси hbs разширение
app.use('/static', express.static('static')) //middlewere подаваме пътя на статичните файлове
app.use(express.urlencoded({extended: false}))
}