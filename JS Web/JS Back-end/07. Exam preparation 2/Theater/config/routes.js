const authContoller = require('../controllers/authController')


module.exports = (app) => {
    app.use('/auth', authContoller)
}