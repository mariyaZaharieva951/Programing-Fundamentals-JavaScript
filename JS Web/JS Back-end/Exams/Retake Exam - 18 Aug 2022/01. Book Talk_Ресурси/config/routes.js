const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
//const adController = require('../controllers/adController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    //app.use('/book', adController);


}