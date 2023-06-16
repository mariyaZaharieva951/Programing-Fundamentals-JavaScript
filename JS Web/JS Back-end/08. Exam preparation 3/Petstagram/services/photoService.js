const Photo = require('../models/Photo');


async function createPhoto(photoData) {
    const photo = await Photo.create(photoData);
    photo.save();

    return photo;
}

async function getPhotoByID(id) {
    const photo = await Photo.findById(id).populate('owner').lean();
    
    return photo;
}

async function getPhoto(id) {
    const photo = await Photo.findById(id).populate('owner').populate('commentList.user').lean();
    
    return photo;
}

async function getAllPhotos() {
    const photos = await Photo.find({}).populate('owner').lean();
    
    return photos;
}



async function editPhoto(id, photoData) {
    const photo = await Photo.findById(id);

    photo.name = photoData.name;
    photo.image = photoData.image;
    photo.age = photoData.age;
    photo.description = photoData.description;
    photo.location = photoData.location;
    
    
    return photo.save();
}

async function deletePhoto(id) {
    return Photo.findByIdAndDelete(id)
}

async function commentPhoto(photoId,dataComment) {
    const photo = await Photo.findById(photoId);
    
    photo.commentList.push(dataComment);

    return photo.save();
}

module.exports = {
    createPhoto,
    getPhotoByID,
    getPhoto,
    getAllPhotos,
    commentPhoto,
    editPhoto,
    deletePhoto
}