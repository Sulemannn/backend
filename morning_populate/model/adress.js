const mongoose = require("mongoose")

const adressSchema = new mongoose.Schema({

    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String
})

const Adress = mongoose.model("Adress", adressSchema)

module.exports = Adress