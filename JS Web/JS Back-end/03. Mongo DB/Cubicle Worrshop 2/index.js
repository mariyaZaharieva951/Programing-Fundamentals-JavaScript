// instalize express app
// setup handlebars
// setup static files
// setup storage middleware
// set route handlers (controller actions)


const express = require('express');
const hbs = require('express-handlebars');

const { init: storage } = require('./models/storage');

const { catalog } = require('./controllers/catalog');
const { about } = require('./controllers/about');
const { create, post } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');

starts();

async function starts() {

const port = 3000;
const app = express();

app.engine('hbs', hbs({extname: '.hbs'})) //задаваме разширението на файловете и функцията, на която подаваме настройка за разширението(по подразбиране е handelbars)
app.set('view engine', 'hbs') //сетваме viewEngine да търси hbs разширение
app.use('/static', express.static('static')) //middlewere подаваме пътя на статичните файлове
app.use(express.urlencoded({extended: false}))
app.use(await storage());


app.get('/', catalog) //регистрираме пътя
app.get('/about', about);
app.get('/create', create);
app.get('/details/:id', details);
app.post('/create', post);

app.all('*', notFound); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


app.listen(port, () => console.log(`Server listening on port ${port}`))

}