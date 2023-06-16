const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
const tripController = require('../controllers/tripController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    app.use('/trip', tripController);


}