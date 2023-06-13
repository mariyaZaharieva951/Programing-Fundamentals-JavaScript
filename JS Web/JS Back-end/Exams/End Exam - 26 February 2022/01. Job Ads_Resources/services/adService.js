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
    console.log('ads', ads)
    return ads;
}

// async function editGame(id,gameData) {
//     const game = await Game.findById(id).lean();

//     game.name = gameData.name,
//     game.image = gameData.image,
//     game.price = gameData.price,
//     game.description = gameData.description,
//     game.genre = gameData.genre,
//     game.platform = gameData.platform
    
//     return game.save();
// }

// async function deleteGame(id) {
//     return Game.findByIdAndDelete(id);
// }

module.exports = {
    createAd,
    getAdByID,
    getAllAds
    // editGame,
    // deleteGame
}