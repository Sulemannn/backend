const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")

mongoose.connect("mongodb://localhost:27017/trippy", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There is a problem !! Connection to the database failed !")
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 3499

const app = express()

app.use(express.json())


app.use("/", userRoutes)

app.listen(port, () => {
    console.log("Server on localhost :", port);
})