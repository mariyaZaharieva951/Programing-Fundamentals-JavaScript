const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
// const photoController = require('../controllers/photoController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    // app.use('/photo', photoController);


}