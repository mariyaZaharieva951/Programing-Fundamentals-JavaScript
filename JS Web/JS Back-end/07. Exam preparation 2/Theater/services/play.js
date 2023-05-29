const Play = require('../models/Play');

async function getAllPlays() {
    
    return await Play.find({public: true}).sort({createdAt: -1}).lean();
}

async function getPlayById(id) {
 
    return Play.findById(id).populate('userLiked').lean();
}

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i');
    const existing = await Play.find({title: {$regex: pattern}})
    
    if(existing.length > 0) {
        throw new Error('A play with this name already exist');
    }
    const play = new Play(playData);

    await play.save();
    //console.log(play)
    return play;
}

async function editPlay(id, playData) {
    const play = await Play.findById(id);

    play.title = playData.title;
    play.description = playData.description;
    play.imageUrl = playData.imageUrl;
    play.public = Boolean(playData.public);
    
    return play.save();
}

async function deletePlay(id) {
    return Play.findByIdAndDelete(id)
}

async function likePlay(playId,userId) {
    const play = await Play.findById(playId);
    play.userLiked.push(userId);
    return play.save();
}


module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
    likePlay
}