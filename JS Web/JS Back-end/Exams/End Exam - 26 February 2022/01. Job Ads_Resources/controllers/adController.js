const { createAd } = require('../services/adService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();


routes.get('/create', (req,res) => {
    res.render('create');
});

routes.post('/create', async (req,res) => {
   try {
    const adData = {
        headline: req.body.headline,
        location: req.body.location,
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
        author: req.user._id,
        users: []
    }
    const ad = await createAd(adData);

    res.redirect('/ad/catalog')

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
   
   
    res.render('create');
});

routes.get('/catalog', (req,res) => {
    res.render('catalog');
});


module.exports = routes;