

const { post: commentPost } = require('../controllers/comments');
const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryControllers');
const homeController = require('../controllers/homeControllers')
const authController = require('../controllers/authController')

module.exports = (app) => {
    //регистрираме пътя
    app.use('/products', productController);
    app.use('/accessory', accessoryController);
    app.use('/auth', authController);
    
    app.post('/comments/:cubeId/create', commentPost);
    
    app.use('/', homeController); //ако заявкта не засече някой от по-горе подадеите пътища, то приложението ще върне '404'


}