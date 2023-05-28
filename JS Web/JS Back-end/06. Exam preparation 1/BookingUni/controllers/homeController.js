const router = require('express').Router();


router.get('/',async (req,res) => {
    
    const hotels = await req.storage.getAllHotel();
    
    
    res.render('homePages/home', {hotels})
})


module.exports = router;