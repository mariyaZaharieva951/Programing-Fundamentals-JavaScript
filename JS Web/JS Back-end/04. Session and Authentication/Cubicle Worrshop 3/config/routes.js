

const { post: commentPost } = require('../controllers/comments');
const productController = require('../controllers/productController');
const accessoryControllers = require('../controllers/accessoryControllers');
const homeControllers = require('../controllers/homeControllers')


module.exports = (app) => {
    //регистрираме пътя
    app.use('/products', productController);
    app.use('/accessory', accessoryControllers);

    app.post('/comments/:cubeId/create', commentPost);
    
    app.use('/', homeControllers); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


}