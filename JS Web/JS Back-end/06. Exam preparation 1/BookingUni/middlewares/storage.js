const hotel = require('../services/hotel')


module.exports = () => (req,res,next) => {
    req.storage = {
        ...hotel //деструктурираме, за да използваме директно свойствата
    };
    next();
}