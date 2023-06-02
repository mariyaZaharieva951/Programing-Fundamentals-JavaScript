
const { getAllOffers, createOffer } = require('../services/cryptoService');
const { getOfferById } = require('../services/cryptoService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();



routes.get('/create', (req,res) => {
    res.render('create', {
        title: 'Create page'
    })
});

routes.post('/create', async (req,res) => {
    try {
        
        const cryptoData = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
            methodPay: req.body.payment,
            buyCripto: [],
            owner: req.user._id
        };
        const offer = await createOffer(cryptoData)
        
        res.redirect('/crypto/catalog') 
    } catch(err) {
        console.error(err);
        const errors = parseError(err);
        res.render('create', {
            title: 'Create page',
            errors,
            body: {
                username:req.body.username
            }
        })
    }
})

routes.get('/catalog', async (req,res) => {
    const offers = await getAllOffers();
    res.render('catalog', {
        title: 'Catalog page',
        offers
    });
});

routes.get('/details/:id', async(req,res) => {
    try { const offer = await getOfferById(req.params.id);

    if(req.user) {
        offer.hasUser = true;
    } else { offer.hasUser = false }
    
    if(req.user._id == offer.owner) {
        offer.isOwner = true;
    } else { offer.isOwner = false }

    if(offer.buyCripto.find(b => b._id == req.user._id)) {
        offer.isBuy = true;
    } else { offer.isBuy = false}
    console.log('req.user', offer.hasUser);
    console.log('req.isOwner', offer.isOwner);
    console.log('req.isBuy', offer.isBuy);

    
    res.render('details', { offer })
    } catch(err) {
        console.error(err)
    }
});





module.exports = routes;