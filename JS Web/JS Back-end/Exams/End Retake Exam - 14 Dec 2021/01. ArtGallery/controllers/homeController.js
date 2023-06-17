
const { getAllProducts } = require('../services/productService');

const routes = require('express').Router();

routes.get('/', async (req,res) => {
    const products = await getAllProducts();
    //const ads = allAds.slice(0,3);
    
    res.render('home', {
        title: 'Home page',
        products
    });
});

routes.get('/404', async (req,res) => {
    res.render('404', {
        title: 'Error page',
        
    });
});

module.exports = routes;