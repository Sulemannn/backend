const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const port = 8000;
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/login", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const signUp = async (req, res) => {
    try {
        const username = req.body.username
        const pw = req.body.pw

        const signing = await signup.findOne({ username, pw })


        res.json("I am logged in !")
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "Probleeeem !!" })
    }
}

app.post("/signup", (req, res) => {

    
})




app.listen(port, () => {
    console.log(`Server on localhost : ${port}`);
})