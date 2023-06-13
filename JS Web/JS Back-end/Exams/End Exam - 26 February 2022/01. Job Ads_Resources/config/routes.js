const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);


}