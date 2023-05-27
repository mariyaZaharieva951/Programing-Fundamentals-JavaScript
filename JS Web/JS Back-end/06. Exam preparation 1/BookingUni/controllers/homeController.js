const router = require('express').Router();
//const getAllHotel = require('./services/hotel');

router.get('/',async (req,res) => {
    //console.log(req.storage)
    const hotels = await req.storage.getAllHotel
    
    res.render('homePages/home', {hotels})
})


module.exports = router;