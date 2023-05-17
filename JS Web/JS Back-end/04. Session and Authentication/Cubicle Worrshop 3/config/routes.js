
const { about } = require('../controllers/about');
const { attach, attachPost } = require('../controllers/details');
const { notFound } = require('../controllers/notFound');
const { post: commentPost } = require('../controllers/comments');
const { createAccessory, postAccessory } = require('../controllers/accessory');
const productController = require('../controllers/productController')



module.exports = (app) => {
    app.get('/', (req,res) => res.redirect('/products')) //регистрираме пътя
    app.get('/about', about);

    app.use('/products', productController)
    // app.get('/create', create);
    // app.get('/details/:id', details);
    // app.post('/create', createPost);
    // app.get('/edit/:id', edit);
    // app.post('/edit/:id', editPost);
    app.post('/comments/:cubeId/create', commentPost);
    app.get('/accessory/create', createAccessory);
    app.post('/accessory/create', postAccessory);
    app.get('/details/:id/attach', attach);
    app.post('/details/:cubeId/attach', attachPost);

    app.all('*', notFound); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


}