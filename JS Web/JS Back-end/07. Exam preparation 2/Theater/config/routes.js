const authContoller = require('../controllers/authController');
const playContoller = require('../controllers/playController');
const homeContoller = require('../controllers/homeController');



module.exports = (app) => {
    app.use('/auth', authContoller);
    app.use('/play', playContoller);
    app.use('/', homeContoller)
}