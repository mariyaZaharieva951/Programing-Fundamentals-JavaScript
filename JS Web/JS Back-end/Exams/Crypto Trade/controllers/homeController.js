const { getAllOffers } = require('../services/cryptoService');

const routes = require('express').Router();

routes.get('/', async (req,res) => {
    const offers = await getAllOffers();
    res.render('home', {offers})
});

module.exports = routes;