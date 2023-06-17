const { isUser } = require('../middlewares/guards');
const { createProduct, getAllProducts } = require('../services/productService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', isUser(), (req,res) => {
    res.render('create');
});

routes.post('/create', isUser(), async (req,res) => {
   try {
    const productData = {
        title: req.body.title,
        technique: req.body.technique,
        picture: req.body.picture,
        certificate: req.body.certificate,
        author: req.user._id,
        users: []
        
    }
    // const imageValidation = /https?:\/\//;
    //     if(!req.body.imageUrl.match(imageValidation)) {
    //         throw new Error('You have entered an invalid image address!');
    //     }
    
    const product = await createProduct (productData);
    

    //user.myAds.push(photo._id)
    
    res.redirect('/product/catalog')

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
    const products = await getAllProducts();
    

    res.render('catalog', {
        title: 'Catalog page',
        products
    });
});


routes.get('/details/:id', async (req,res) => {
    try {
    const auction = await getAuction(req.params.id);
        console.log(auction)
        
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
        const auction = await getAuctionByID(req.params.id);
        
        if(auction.author._id != req.user._id) {
            throw new Error('Cannot delete photo you haven\'t created!')
        }
        await deleteAuction(req.params.id);
        res.redirect('/auction/browse');
    } catch(err) {
        console.log(err.message);
        res.render('details', {
            error: 'Can\`t delete auction!'
        })
    }
});


routes.get('/edit/:id', isUser(), async (req,res) => {
    try {
        const auction = await getAuctionByID(req.params.id);
        
        if(auction.author._id != req.user._id) {
            throw new Error('Cannot edit auction you haven\'t created!')
        }
        
        res.render('edit', {auction})
    } catch(err) {
        console.log(err.message);
        res.redirect('/auction/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const auction = await getAuctionByID(req.params.id);
        if(auction.author._id != req.user._id) {
            throw new Error('Cannot edit auction you haven\'t created!')
        }
        await editAuction(req.params.id, req.body);
        res.redirect('/auction/details/' + req.params.id)
    } catch(error) {
       // console.log(req.params.id)
        const errors = parseError(error);
        console.error(error.message);
        res.redirect('/auction/edit/' + req.params.id, {
        title: 'Edit page',
        errors,
        body: {
            username: req.body.username
        }
    })
    };
});

module.exports = routes;