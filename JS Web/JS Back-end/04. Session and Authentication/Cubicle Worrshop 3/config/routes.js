
const { about } = require('../controllers/about');
const { notFound } = require('../controllers/notFound');
const { post: commentPost } = require('../controllers/comments');
const productController = require('../controllers/productController');
const accessoryControllers = require('../controllers/accessoryControllers');



module.exports = (app) => {
    app.get('/', (req,res) => res.redirect('/products')) //регистрираме пътя
    app.get('/about', about);

    app.use('/products', productController);
    app.use('/accessory', accessoryControllers);

    app.post('/comments/:cubeId/create', commentPost);
    
    app.all('*', notFound); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


}