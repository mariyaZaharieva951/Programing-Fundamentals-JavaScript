const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
//const productController = require('../controllers/productController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    //app.use('/product', productController);


}