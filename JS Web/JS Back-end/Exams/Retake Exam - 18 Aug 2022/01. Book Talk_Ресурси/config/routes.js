const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
const bookController = require('../controllers/bookController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    app.use('/book', bookController);


}