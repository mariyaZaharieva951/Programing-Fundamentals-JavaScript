const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { create, post: createPost } = require('../controllers/create');
const { details } = require('../controllers/details');
const { notFound } = require('../controllers/notFound');
const { edit, post: editPost } = require('../controllers/edit');


module.exports = (app) => {
    app.get('/', catalog) //регистрираме пътя
    app.get('/about', about);
    app.get('/create', create);
    app.get('/details/:id', details);
    app.post('/create', createPost);
    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.all('*', notFound); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


}