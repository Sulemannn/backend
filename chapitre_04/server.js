const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/validation", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const port = 8000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {

    res.json({
        message: "Sent all users !"
    })
})

app.get("/users/add", (req, res) => {

    res.json({
        message: "all users !"
    })
})


app.listen(port, () => {
    console.log(`Server on localhost : ${port}`);
})