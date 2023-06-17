const { isUser } = require('../middlewares/guards');
const { getAllTrips, createTrip, deleteTrip, getTripByID, buddiesJoin, editTrip } = require('../services/tripService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', isUser(), (req,res) => {
    res.render('create');
});

routes.post('/create', isUser(), async (req,res) => {
   try {
    const tripData = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        creator: req.user._id,
        buddies: []
    }
    //console.log(tripData)
    // const imageValidation = /https?:\/\//;
    //     if(!req.body.image.match(imageValidation)) {
    //         throw new Error('You have entered an invalid image address!');
    //     }
    
    const trip = await createTrip(tripData);
    

    //user.myAds.push(photo._id)
    
    res.redirect('/trip/catalog')

   } catch(error) {
    const errors = parseError(error);
    console.error(error.message);
    res.render('create', {
        title: 'Create page',
        errors,
        body: {
            username: req.body.username
        }
    })
   }
});

routes.get('/catalog', async(req,res) => {
    const trips = await getAllTrips();
    

    res.render('catalog', {
        title: 'Catalog page',
        trips
    });
});


routes.get('/details/:id', async (req,res) => {
    try {
    const trip = await getTripByID(req.params.id);
   
        
    trip.hasUser = Boolean(req.user);
    trip.isAuthor = req.user && req.user._id == trip.creator._id;
    trip.joined = req.user && trip.buddies.find(u => u._id == req.user._id);
    trip.freeSeats = trip.seats != 0;
    trip.AllBuddies = trip.buddies.map(b => b.email).join(', ');

    
    res.render('details', {trip})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }  
});

routes.get('/join/:id', isUser(), async (req,res) => {
    try {
        const trip = await getTripByID(req.params.id);
        const userID = req.user._id
        console.log(req.user)
        
        if(trip.creator._id == req.user._id) {
            throw new Error('Cannot join your own trip!')
        }

        await buddiesJoin(req.params.id,userID);
        res.redirect('/trip/details/' + req.params.id);
    } catch(err) {
        const errors = parseError(err);
        console.log(err.message);
        res.render('details', {
            title: 'Details page',
            errors,
            body: {
                username: req.body.username
            } 
        })
    }
}); 

routes.get('/delete/:id', isUser(), async (req,res) => {
    try {
        const trip = await getTripByID(req.params.id);
        
        if(trip.creator._id != req.user._id) {
            throw new Error('Cannot delete trip you haven\'t created!')
        }
        await deleteTrip(req.params.id);
        res.redirect('/trip/catalog');
    } catch(err) {
        console.log(err.message);
        res.render('details', {
            error: 'Can\`t delete trip!'
        })
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const trip = await getTripByID(req.params.id);
        
        if(trip.creator._id != req.user._id) {
            throw new Error('Cannot edit trip you haven\'t created!')
        }
        
        res.render('edit', {trip})
    } catch(err) {
        console.log(err.message);
        res.redirect('/trip/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const trip = await getTripByID(req.params.id);
        if(trip.creator._id != req.user._id) {
            throw new Error('Cannot edit trip you haven\'t created!')
        }
        
        await editTrip(req.params.id, req.body);
        res.redirect('/trip/catalog')
    } catch(error) {
       
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/trip/edit' + req.params.id, {
        title: 'Edit page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});

module.exports = routes;