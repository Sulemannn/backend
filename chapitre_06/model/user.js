const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/login");

const userSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String
})

const user = mongoose.model("User", userSchema)

module.exports = { User }