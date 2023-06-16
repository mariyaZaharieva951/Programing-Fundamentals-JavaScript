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

async function getAuction(id) {
    const auction = await Auction.findById(id).populate('bidder').lean();
    
    return auction;
}

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

async function bidderAuction(auctionId, userId, price) {
    const auction = await Auction.findById(auctionId);
    if(auction.price < Number(price)) {
        auction.bidder = userId;
        auction.price = price
    } else {
        throw new Error('Your bid should no higher then the price!')
    }

    return auction.save();
}

module.exports = {
    createAuction,
    getAuctionByID,
    getAllAuctions,
    getAuction,
    bidderAuction,
    editAuction,
    deleteAuction
}