
const express = require("express")
const cors = require("cors")
const { movies } = require("./dataMoovies")

const app = express()

app.use(cors())

const port = 8088

app.get("/MovieName", (req, res) => {

    const movieName = req.params.movieName

    const dataMoovies = movieName.map(elem => {
        return {
            name: elem.name,
            Date: elem.Date
        }
    })

    res.json(dataMoovies)
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})