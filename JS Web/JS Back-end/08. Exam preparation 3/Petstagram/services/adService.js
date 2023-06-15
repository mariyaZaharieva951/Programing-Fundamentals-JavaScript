const Photo = require('../models/Photo');


async function createPhoto(photoData) {
    const photo = await Photo.create(photoData);
    photo.save();

    return photo;
}

async function getPhotoByID(id) {
    const photo = await Photo.findById(id).lean();
    
    return photo;
}

async function getAllPhotos() {
    const photos = await Photo.find({}).populate('owner').lean();
    
    return photos;
}



async function editPhoto(id, photoData) {
    const photo = await Photo.findById(id);

    photo.headline = photoData.headline;
    photo.location = photoData.location;
    photo.companyName = photoData.companyName;
    photo.companyDescription = photoData.companyDescription;
    
    return photo.save();
}

async function deletePhoto(id) {
    return Photo.findByIdAndDelete(id)
}

// async function applyAd(adId,userId) {
//     const ad = await Photo.findById(adId);
    
//     ad.users.push(userId);
//     return ad.save();
// }

module.exports = {
    createPhoto,
    getPhotoByID,
    getAllPhotos,
    //applyAd,
    editPhoto,
    deletePhoto
}