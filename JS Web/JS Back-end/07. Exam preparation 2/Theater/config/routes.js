const authContoller = require('../controllers/authController')
const playContoller = require('../controllers/playController')


module.exports = (app) => {
    app.use('/auth', authContoller)
    app.use('/play', playContoller)
}