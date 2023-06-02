const Crypto = require('../models/Crypto');

async function createOffer(cryptoData) {
    const offer = new Crypto(cryptoData);
    await offer.save();

    return offer;
}

async function getAllOffers() {
    const offers = await Crypto.find({}).lean();

    return offers;
}

async function getOfferById(id) {
    const offer = await Crypto.findById(id).lean();;

    return offer;
}

module.exports = {
    createOffer,
    getAllOffers,
    getOfferById
}