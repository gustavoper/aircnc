/**
 * Spot.js - The model that represents a Spot
 * 
 */

const mongoose = require("mongoose");
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    //For now we will just list techs separated by commas
    techs: [String], 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model(
    'Spot', 
    SpotSchema
);
