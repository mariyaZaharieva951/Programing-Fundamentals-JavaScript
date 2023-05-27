const authContoller = require('../controllers/authController');
const homeContoller = require('../controllers/homeController');
const hotelController = require('../controllers/hotelController');

module.exports = (app) => {
    app.use('/', homeContoller);
    app.use('/auth', authContoller);
    app.use('/bookingPages', hotelController)
    

}