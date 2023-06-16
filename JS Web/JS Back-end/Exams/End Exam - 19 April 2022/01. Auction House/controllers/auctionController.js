const { isUser } = require('../middlewares/guards');
const { getAllAuctions, createAuction, getAuctionByID, bidderAuction, getAuction } = require('../services/auctionService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', isUser(), (req,res) => {
    res.render('create');
});

routes.post('/create', isUser(), async (req,res) => {
   try {
    const auctionData = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        // author: req.user._id,
        // bidder
        
    }
    const imageValidation = /https?:\/\//;
        if(!req.body.imageUrl.match(imageValidation)) {
            throw new Error('You have entered an invalid image address!');
        }
    
    const auction = await createAuction(auctionData);
    

    //user.myAds.push(photo._id)
    
    res.redirect('/auction/browse')

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

routes.get('/browse', async(req,res) => {
    const auctions = await getAllAuctions();
    

    res.render('browse', {
        title: 'Browse page',
        auctions
    });
});


routes.get('/details/:id', async (req,res) => {
    try {
    const auction = await getAuction(req.params.id);
   
        
    auction.hasUser = Boolean(req.user);
    auction.isAuthor = req.user && req.user._id == auction.author._id;

    //auction.bidd = req.user && auction.bidder.find(u => u._id == req.user._id);
    
    res.render('details', {auction})
    } catch(err) {
        console.log(err.message)
            res.redirect('/404')
        
    }  
});

routes.post('/bid/:id', isUser(), async (req,res) => {
    try {
        const auction = await getAuction(req.params.id);
        const user = req.user._id
        const {price} = req.body
        //console.log(auction)
        if(auction.author._id == req.user._id) {
            throw new Error('Cannot bidd your own auction!')
        }

        await bidderAuction(req.params.id,user, price);
        res.redirect('/auction/details/' + req.params.id);
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
        const photo = await getPhotoByID(req.params.id);
        
        if(photo.owner._id != req.user._id) {
            throw new Error('Cannot delete photo you haven\'t created!')
        }
        await deletePhoto(req.params.id);
        res.redirect('/photo/catalog');
    } catch(err) {
        console.log(err.message);
        res.render('details', {
            error: 'Can\`t delete photo!'
        })
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const photo = await getPhotoByID(req.params.id);
        
        if(photo.owner._id != req.user._id) {
            throw new Error('Cannot edit photo you haven\'t created!')
        }
        
        res.render('edit', {photo})
    } catch(err) {
        console.log(err.message);
        res.redirect('/photo/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const photo = await getPhotoByID(req.params.id);
        if(photo.owner._id != req.user._id) {
            throw new Error('Cannot edit ad you haven\'t created!')
        }
        await editPhoto(req.params.id, req.body);
        res.redirect('/photo/details/' + req.params.id)
    } catch(error) {
       // console.log(req.params.id)
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/photo/edit/' + req.params.id, {
        title: 'Edit page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});

module.exports = routes;