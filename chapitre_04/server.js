const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middlewares/debug")

mongoose.connect("mongodb://localhost:27017/Validation", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()

app.use(cors())

app.use(express.json())

app.use(debug)

app.use("/", users)

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})