const { isUser } = require('../middlewares/guards');
const Hotel = require('../models/Hotel');

const router = require('express').Router();


router.get('/create', isUser(), (req,res) => {
    res.render('bookingPages/create')
});

router.post('/create', isUser(), async (req,res) => {
    //console.log('yes', req.body)
    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
        bookedBy: [],
        owner: req.user._id,
    };
    
    try {
        await req.storage.createHotel(hotelData);
       
        res.redirect('/');
    } catch(err) {
        let errors;
        
        if(err.errors) {
        errors = Object.values(err.errors).map(e => e.properties.message);
        } else {
            errors = [err.message]
        }
        

        const ctx = {
            errors,
            hotelData: {
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms,  
            }
        }

        res.render('bookingPages/create', ctx)
    }
})


module.exports = router;