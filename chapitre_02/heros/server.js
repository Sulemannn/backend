const express = require("express")
const cors = require("cors")

const { superHeros } = require("./dataHeros")

const app = express()

app.use(express.json())
app.use(cors())
// app.use(debug)

const port = 8000;


// app.use(function (req, res, next) {
//     console.log('infos data', data);
//     next();
// });

// const debug = (req, res, next) => {
//     console.log("Server requested")

//     next()
// }


app.post("/heroes", (req, res) => {
    
    const superHerosPostman = req.params.body
    
    superHeros.push(superHerosPostman)
    
    res.json({
        test: "Testing all paths"
    })
})


app.get("/heroes", (req, res) => {

    res.json(superHeros)
})

app.get("/heroes/:name", (req, res) => {

    const heroName = req.params.name.toLowerCase()
    // console.log("heroName", req.params.name);

    const oneHero = superHeros.filter( filteredHero => {
        // console.log("oneHero filtered", elem);

        return filteredHero.name.toLowerCase() === heroName

    })

    if (oneHero) {

        res.json(oneHero)
    } else {

        res.json({
            message: "Not found any hero with this name !"
        })
    }
})





app.get("*", (req, res) => {

    res.json({
        alertMessage: "Error ! The page was not found !"
    })
})


app.listen(port, () => {
    console.log(`Server on localhost ${port}`);
})