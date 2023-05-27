const { isUser } = require('../middlewares/guards');
const Hotel = require('../models/Hotel');

const router = require('express').Router();


router.get('/create', isUser(), (req,res) => {
    //console.log(req.storage)
    //const hotels = await req.storage.getAllHotel
    
    res.render('bookingPages/create')
});

router.post('/create', isUser(), async (req,res) => {
    console.log('yes')
    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
        bookedBy: [],
        owner: req.body._id,
    };
    //console.log(hotelData)
    try {
        await req.storage.createHotel(hotelData);
        
        res.redirect('/');
    } catch(err) {
        let errors;
        console.log(err.message)
        if(err.errors) {
        errors = Object.values(err.errors).map(e => e.properties.message);
        } else {
            errors = [err.message]
        }
        //console.log(err);

        const ctx = {
            errors,
            hotelData: {
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms,  
            }
        }

        res.render('bookingPage/create', ctx)
    }
})


module.exports = router;