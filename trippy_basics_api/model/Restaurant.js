const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    adress: [String],
    city: String,
    country: String,
    stars: {type: Number, min: 1, max: 5},
    cuisine: String,
    prieceCategory: {type: Number, min: 1, max: 3}
})

const Restaurant = mongoose.model("Hotel", restaurantSchema)

module.exports = Restaurant