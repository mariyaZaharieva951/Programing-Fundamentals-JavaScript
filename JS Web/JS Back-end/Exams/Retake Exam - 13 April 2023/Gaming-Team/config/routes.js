const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const gameContoller = require('../controllers/gameController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/game', gameContoller);
}