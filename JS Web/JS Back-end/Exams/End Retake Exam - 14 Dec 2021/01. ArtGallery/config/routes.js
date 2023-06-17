const homeController = require('../controllers/homeController');
const authContoller = require('../controllers/authController');
// const auctionController = require('../controllers/auctionController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authContoller);
    // app.use('/auction', auctionController);


}