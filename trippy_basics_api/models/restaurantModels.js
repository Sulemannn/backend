const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: { type: Number, min: 1, max: 5 },
    cuisine: String,
    priceCategory: { type: Number, min: 1, max: 3 },
    tables: [ObjectId],
    created: { type: Date, default: Date.now }
})

const restaurantModel = mongoose.model("Restaurant", restaurantSchema)

module.exports = restaurantModel