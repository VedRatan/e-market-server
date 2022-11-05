const mongoose  = require('mongoose');

const ratingSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        },
    rating:{
        type: Number,
        required: true,
    }
});

module.exports = ratingSchema; // we'll not make it a model as we don't require _id and __v