const mongoose = require("mongoose")
const Student = require("./model/student")
const Adress = require("./model/adress")

mongoose.connect("mongodb://localhost:27017/mongoose_populate", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected")
    }
})


const adressID = async () => {

    try {

        const adressID = await mongoose_populate.insertMany([
            {
                name: "money",
                force: 0
            }

        console.log("adressID en db", adressID)