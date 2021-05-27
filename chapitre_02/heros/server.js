const express = require("express")
const cors = require("cors")

const { heroes } = require("./dataHeroes")

const app = express()

app.use(express.json())
app.use(cors())

const port = 3499


// app.use(function (req, res, next) {
//     console.log('infos data', data);
//     next();
// });

app.get("/heroes", (req, res) => {

    res.json(heroes)
})

app.get("*", (req, res) => {

    res.json({
        alertMessage: "Error ! The page was not found !"
    })
})

app.listen(port, () => {
    console.log(`Server on localhost ${port}`);
})