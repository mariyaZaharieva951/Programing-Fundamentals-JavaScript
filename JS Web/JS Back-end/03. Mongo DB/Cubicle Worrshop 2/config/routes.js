const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { create, post } = require('../controllers/create');
const { details } = require('../controllers/details');
const { notFound } = require('../controllers/notFound');


module.exports = (app) => {
    app.get('/', catalog) //регистрираме пътя
    app.get('/about', about);
    app.get('/create', create);
    app.get('/details/:id', details);
    app.post('/create', post);

    app.all('*', notFound); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


}