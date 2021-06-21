const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema({
    seat: Number,
    isVIP: Boolean,
    created: { type: Date, default: Date.now }
})

const tableModel = mongoose.model("Table", tableSchema)

module.exports = tableModel 
