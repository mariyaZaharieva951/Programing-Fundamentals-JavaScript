const { getAllAds } = require('../services/adService');

const routes = require('express').Router();

routes.get('/', async (req,res) => {
    const ads = await getAllAds();
    ads.slice(0,3)
    res.render('home', {
        title: 'Home page',
        ads
    });
});

module.exports = routes;