const Auction = require('../models/Auction');


async function createAuction(auctionData) {
    const auction = await Auction.create(auctionData);
    auction.save();

    return auction;
}

async function getAuctionByID(id) {
    const auction = await Auction.findById(id).lean();
    
    return auction;
}

// async function getPhoto(id) {
//     const auction = await Photo.findById(id).populate('owner').populate('commentList.user').lean();
    
//     return auction;
// }

async function getAllAuctions() {
    const auctions = await Auction.find({}).lean();
    
    return auctions;
}



async function editAuction(id, auctionData) {
    const auction = await Auction.findById(id);

    auction.title = auctionData.title;
    auction.description = auctionData.description;
    auction.category = auctionData.category;
    auction.imageUrl = auctionData.imageUrl;
    auction.price = auctionData.price;
    
    
    return auction.save();
}

async function deleteAuction(id) {
    return Auction.findByIdAndDelete(id)
}

// async function commentPhoto(photoId,dataComment) {
//     const photo = await Photo.findById(photoId);
    
//     photo.commentList.push(dataComment);

//     return photo.save();
// }

module.exports = {
    createAuction,
    getAuctionByID,
    getAllAuctions,
    //commentPhoto,
    editAuction,
    deleteAuction
}