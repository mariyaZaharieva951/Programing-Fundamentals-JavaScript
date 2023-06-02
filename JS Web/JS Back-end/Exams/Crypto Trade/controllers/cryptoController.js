const Crypto = require('../models/Crypto');
const { getAllOffers, createOffer } = require('../services/cryptoService');
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



module.exports = routes;