const Ad = require('../models/Ad');


async function createAd(adData) {
    const ad = await Ad.create(adData);
    ad.save();

    return ad;
}

async function getAdByID(id) {
    const ad = await Ad.findById(id).lean();
    
    return ad;
}

async function getAllAds() {
    const ads = await Ad.find({}).lean();
    
    return ads;
}



async function editAd(id, adData) {
    const ad = await Ad.findById(id);

    ad.headline = adData.headline;
    ad.location = adData.location;
    ad.companyName = adData.companyName;
    ad.companyDescription = adData.companyDescription;
    
    return ad.save();
}

async function deleteAd(id) {
    return Ad.findByIdAndDelete(id)
}

async function applyAd(adId,userId) {
    const ad = await Ad.findById(adId);
    
    ad.users.push(userId);
    return ad.save();
}

module.exports = {
    createAd,
    getAdByID,
    getAllAds,
    //lastThreeAds,
    applyAd,
    editAd,
    deleteAd
}