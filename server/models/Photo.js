const { Schema, model, Types } = require('mongoose');

const photoSchema = new Schema({
    title: { type: String, required: true, minlength: [5, 'Title must be at least 5 characters long'] },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    price: { type: Number, required: true, min: [10, 'Price must be at least 5 GBP!'] },
    img: { type: String, required: [true, 'Image URL is required'] },
    _ownerId: { type: Types.ObjectId, ref: 'User', required: true },
    likes: { type: Array, default: [], required: false },

}, { timestamps: { createdAt: 'created_at' } });

const Photo = model('Photo', photoSchema);

module.exports = Photo;