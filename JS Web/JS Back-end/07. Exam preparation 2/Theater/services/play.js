const Play = require('../models/Play');

async function getAllPlays() {
    return await Play.find({public: true}).sort({createdAt: -1}).lean();
}

async function getPlayById(id) {
    return Play.findById(id);
}

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i')
    const existing = await Play.find({title: {$regex: pattern}})
    if(existing) {
        throw new Error('A play with this name already exist');
    }
    const play = new Play(playData);

    await play.save();

    return play;
}

async function editPlay(id, playData) {
    
}

async function deletePlay(id) {
    
}


module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay
}