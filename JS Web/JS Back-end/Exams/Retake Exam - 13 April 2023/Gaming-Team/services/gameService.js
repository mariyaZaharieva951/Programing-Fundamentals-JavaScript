const Game = require('../models/Game');


async function createGame(gameData) {
    const game = await Game.create(gameData);
    game.save();

    return game;
}

async function getGameByID(id) {
    const game = await Game.findById(id).lean();
    
    return game;
}

async function getAllGame() {
    const games = await Game.find({}).lean();

    return games;
}

async function editGame(id,gameData) {
    const game = await Game.findById(id).lean();

    game.name = gameData.name,
    game.image = gameData.image,
    game.price = gameData.price,
    game.description = gameData.description,
    game.genre = gameData.genre,
    game.platform = gameData.platform
    
    return game.save();
}

async function deleteGame(id) {
    return Game.findByIdAndDelete(id);
}

module.exports = {
    createGame,
    getGameByID,
    getAllGame,
    editGame,
    deleteGame
}