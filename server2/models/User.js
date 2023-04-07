// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
// const userSchema = new mongoose.Schema({
//     email: {
//         required: true,
//         type: String,
//     },
//     password: {
//         required: true,
//         type: String,
//         minlength: [6, 'Password should have at least 5 characters!'],
//         maxlength: [12, 'Password cannot have more than 12 characters!'],
//     },
//     photos: [
//         {
//             type: mongoose.Types.ObjectId,
//             ref: 'Photo',
//         }
//     ]
// })
// userSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10)
//         .then((hash) => {
//             this.password = hash
//             return next()
//         })
// })
// const user = new mongoose.model('User', userSchema);
// module.exports = user;



const { Schema, model, Types } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
        minlength: [6, 'Password should have at least 5 characters!'],
        maxlength: [12, 'Password cannot have more than 12 characters!'],
    },
    photos: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Photo',
        }
    ],
    currentPhotos: []
        
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then((hash) => {
            this.password = hash
            return next()
        })
})

const User = model('User', userSchema);

module.exports = User;