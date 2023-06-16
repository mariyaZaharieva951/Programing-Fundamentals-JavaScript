const Trip = require('../models/Trip');


async function createTrip(tripData) {
    const trip = await Trip.create(tripData);
    trip.save();

    return trip;
}

async function getTripByID(id) {
    const trip = await Trip.findById(id).populate('creator').populate('buddies').lean();
    
    return trip;
}

// async function getPhoto(id) {
//     const photo = await Photo.findById(id).populate('owner').populate('commentList.user').lean();
    
//     return photo;
// }

async function getAllTrips() {
    const trips = await Trip.find({}).lean();
    
    return trips;
}



async function editTrip(id, tripData) {
    const trip = await Trip.findById(id);

    trip.startPoint = tripData.startPoint;
    trip.endPoint = tripData.endPoint;
    trip.date = tripData.date;
    trip.time = tripData.time;
    trip.carImage = tripData.carImage;
    trip.carBrand = tripData.carBrand;
    trip.seats = tripData.seats;
    trip.price = tripData.price;
    trip.description = tripData.description;
    
    
    return trip.save();
}

async function deleteTrip(id) {
    return Trip.findByIdAndDelete(id)
}

async function buddiesJoin(tripId,userId) {
    const trip = await Trip.findById(tripId);
    
    trip.buddies.push(userId);
    trip.creator.tripHistory.push(userId)
    trip.seats--;

    return trip.save();
}

// async function getJoinedUser(tripId,userId) {
//     const trip = await Trip.findById(tripId).lean();
    
//     if(trip && trip.buddies.length > 0) {
//        return trip.buddies.find(b => b._id.toString() == req.user._id.toString())
//     }

//     return undefined;
// }

module.exports = {
    createTrip,
    getTripByID,
    getAllTrips,
    buddiesJoin,
    editTrip,
    deleteTrip
}