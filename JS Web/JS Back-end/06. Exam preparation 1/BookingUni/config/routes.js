const authContoller = require('../controllers/authController')
const homeContoller = require('../controllers/homeController')

module.exports = (app) => {
    app.use('/', homeContoller)
    app.use('/auth', authContoller)
    

}