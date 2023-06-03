
const { isUser } = require('../middlewares/guards');
const { getOfferById, getAllOffers, createOffer, deleteOffer, editOffer, buyCoins } = require('../services/cryptoService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();



routes.get('/create', isUser(), (req,res) => {
    res.render('create', {
        title: 'Create page'
    })
});

routes.post('/create', isUser(), async (req,res) => {
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
    
    res.render('details', { offer })
    } catch(err) {
        console.error(err)
    }
});

routes.get('/delete/:id', isUser(), async (req,res) => {
    try {
        const offer = await getOfferById(req.params.id);
        if(offer.owner != req.user._id) {
            throw new Error('Cannot delete offer you haven\'t created!')
        }
        await deleteOffer(req.params.id);
        res.redirect('/crypto/catalog');
    } catch(err) {
        console.error(err);
        res.redirect('/crypto/details/' + req.params.id)

    }
});

routes.get('/edit/:id', isUser(), async (req,res) => {
    try{
    const offer = await getOfferById(req.params.id);
        if(offer.owner != req.user._id) {
            throw new Error('Cannot edit offer you haven\'t created!')
        }
        res.render('edit', {offer})
    } catch(err) {
        console.error(err);
        res.redirect('/crypto/details/' + req.params.id)
    }
});

routes.post('/edit/:id', isUser(), async (req,res) => {
    try {
        const offer = await getOfferById(req.params.id);
        if(offer.owner != req.user._id) {
            throw new Error('Cannot edit offer you haven\'t created!')
        }
        await editOffer(req.params.id, req.body);
        res.redirect('/crypto/details/' + req.params.id);
    } catch(err) {
        console.error(err);
        const errors = parseError(err);
        res.render('edit', {
            errors
        })

    }
});

routes.get('/buy/:id', isUser(), async (req,res) => {
    try {
        const offer = await getOfferById(req.params.id);
        if(offer.owner == req.user._id) {
            throw new Error('Cannot buy you own offer!')
        }
        await buyCoins(req.params.id,req.user._id);
        res.redirect('/crypto/details/' + req.params.id);
    } catch(err) {
        console.error(err);
        //const errors = parseError(err);
        res.render('/crypto/details/' + req.params.id);
    }
});



module.exports = routes;