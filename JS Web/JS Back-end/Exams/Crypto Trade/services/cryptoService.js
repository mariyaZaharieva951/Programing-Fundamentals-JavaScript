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

async function deleteOffer(id) {
    return Crypto.findByIdAndDelete(id)
}

async function editOffer(id, offerData) {
    const crypto = await Crypto.findById(id);

    crypto.name = offerData.name;
    crypto.image = offerData.image;
    crypto.price = offerData.price;
    crypto.description = offerData.description;
    crypto.payment = offerData.payment;

    return crypto.save();

}

module.exports = {
    createOffer,
    getAllOffers,
    getOfferById,
    deleteOffer,
    editOffer
}