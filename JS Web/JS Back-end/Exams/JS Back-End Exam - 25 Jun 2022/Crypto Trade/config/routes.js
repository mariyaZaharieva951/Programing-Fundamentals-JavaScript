const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
const cryptoContoller = require('../controllers/cryptoController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    app.use('/crypto', cryptoContoller);


}