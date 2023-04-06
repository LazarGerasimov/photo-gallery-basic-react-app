const Photo = require("../models/Photo")
const User = require("../models/User");

require('dotenv').config()

const addPhoto = async (photo, id) => {
    try {
        photo.owner = id;
        return await Photo.create({ ...photo })
    } catch (error) {
        throw new Error(error)
    }
}
const getAllPhotos = async () => {
    return await Photo.find({}).sort({ created_at: -1 });
}

const getPhotoById = async (id) => {
    return await Photo.findById(id);
}

async function updatePhoto(id, photo) {
    const existing = await Photo.findById(id);

    existing.title = photo.title;
    // console.log(existing.title)
    existing.description = photo.description;
    existing.price = photo.price;

    return existing.save();
}

// const updateUserPhotos = async (_id, photoId) => {
//     try {
//         const user = await User.findById(_id);
//         let photoArray = user.photos
//         photoArray.push(photoId)
//         await User.findByIdAndUpdate(_id, {photos: photoArray})
//     } catch (error) {
//         throw new Error(error)
//     }
// }

const deletePhoto = async (photoId) => {
    await Photo.findByIdAndDelete(photoId);
    const photoCollection = User.collection("photos");
    console.log(photoCollection);
    
}
const getMostExpensivePhotos = async () => {
    const photos = await Photo.find({}).sort({ price: -1 }).limit(3);
    return photos
}

const getRecentPhotos = async () => {
    const photos = await Photo.find({}).sort({ created_at: -1 }).limit(3);
    return photos
}

const getPhotosByOwner = async (_id) => {
    return await Photo.find({ _ownerId: _id })
}

const likePhoto = async (photoId, userId) => {
    const photo = await Photo.findById(photoId);
    photo.likes.push(userId);
    return photo.save();
}

const unlikePhoto = async (photoId, userId) => {
    const photo = await Photo.findById(photoId);
    photo.likes.filter(p => p !== userId);
    return photo.save();
}




module.exports = {
    addPhoto,
    getAllPhotos,
    getPhotoById,
    updatePhoto,
    deletePhoto,
    getMostExpensivePhotos,
    getRecentPhotos,
    getAllPhotos,
    getPhotosByOwner,
    likePhoto,
    unlikePhoto
}
