const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
// const petController = require('../controllers/petController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    // app.use('/pet', petController);


}