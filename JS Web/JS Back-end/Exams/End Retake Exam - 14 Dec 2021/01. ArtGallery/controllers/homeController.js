//const { lastThreeAds, getAllAds } = require('../services/adService');

const routes = require('express').Router();

routes.get('/', async (req,res) => {
    // const allAds = await getAllAds();
    // const ads = allAds.slice(0,3);
    
    res.render('home', {
        title: 'Home page',
        
    });
});

routes.get('/404', async (req,res) => {
    res.render('404', {
        title: 'Error page',
        
    });
});

module.exports = routes;