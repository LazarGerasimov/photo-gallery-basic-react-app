const { getPhotosByOwner } = require('../services/photoService');
const { register, login } = require('../services/userService');


const authController = require('express').Router();

// Register route
authController.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await register( email, password);
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
    res.end()
});

// Login route
authController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login(email, password)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    res.end()
});

// Logout route
authController.get('/logout', (req, res) => {
    // api.logout(req.user.token);
    res.status(204).end();
});

// get photos by owner

authController.get('/profile', async (req, res) => {
    const _id = req?.user?._id;
    const photos = await getPhotosByOwner(_id)
    res.status(200).json(photos)
    res.end()
});
module.exports = authController;