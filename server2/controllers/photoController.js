const User = require('../models/User');

const { addPhoto, getAllPhotos, getMostExpensivePhotos, getRecentPhotos , getPhotoById, updatePhoto, deletePhoto, likePhoto, unlikePhoto, updateUserPhotos, removeFromCurrentPhotos, getPhotosByOwner} = require('../services/photoService');


const photoController = require('express').Router();


//create Photo
// photoController.post('/create', async (req, res) => {
//     const data = req.body;
//     console.log(data);
//     try {
//         const userId = req?.user?._id;
//         const photo = await addPhoto(data, userId)
//         await updateUserPhotos(userId, photo._id)
//         res.status(201).json(photo)
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({error:error.message})
//     }
// })

photoController.post('/create', async (req, res) => {
    const data = req.body;
    try {
        const userId = req?.user?._id;
        const photo = await addPhoto(data, userId)
        await updateUserPhotos(userId, photo._id)
        res.status(201).json(photo)
        return photo;
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
        return error;
    }
})

//get All Photos
photoController.get('/', async (req, res) => {
    const photos = await getAllPhotos()
    res.status(200).json(photos)
});

//get most expensive photos
photoController.get('/most-expensive', async (req, res) => {
    const photos = await getMostExpensivePhotos()
    res.status(200).json(photos)
});

//get most recent photos
photoController.get('/most-recent', async (req, res) => {
    const photos = await getRecentPhotos()
    res.status(200).json(photos);
})

//get photo by ID
photoController.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const photo = await getPhotoById(id);
        if(photo){
            res.status(200).json(photo)
        }else {
            throw new Error('Invalid photo ID!')
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
});

//update photo by ID
photoController.put('/:id', async (req, res) => {
    try {
        const photo = await getPhotoById(req.params.id);
       
        if (req.user._id != photo._ownerId) {
            return res.status(403).json({ message: 'You cannot edit this photo' })
        }
        const result = await updatePhoto(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
        return;
    }
});

// delete photo
photoController.delete('/:id', async (req, res) => {
    try {
        const photo = await getPhotoById(req.params.id);
        // TODO check photo._ownerdId
        if (req.user._id != photo._ownerId._id) {
            return res.status(403).json({ err: err.message })
        }
        await removeFromCurrentPhotos(req.user._id, req.params.id);
        await deletePhoto(req.params.id);
        res.status(200).send({message: 'Item was deleted successfully'});
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
});

// like photo
photoController.get('/:id/like', async (req, res) => {
    try {
        const photo = await getPhotoById(req.params.id);
        return res.status(200).json(photo);
    } catch (error) {
        console.log(error.message);
    }
});

photoController.get('/profile', async (req, res) => {
    const _id = req?.user?._id;
    try {
        const photos = await getPhotosByOwner(_id);
        // const photos = await getAllPhotos();
        res.status(200).json(photos);
        res.end();
    } catch (error) {
        console.log(_id);
        return (error.message);
    }
});

// photoController.get('/profile', async (req, res) => {
//     const photos = await getAllPhotos()
//     res.status(200).json(photos);
// });


module.exports = photoController;
