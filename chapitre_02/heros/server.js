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

    // console.log("one hero name", req.params.name);

    const oneHero = req.params.oneHero
    res.json(oneHero)
})





app.get("*", (req, res) => {

    res.json({
        alertMessage: "Error ! The page was not found !"
    })
})


app.listen(port, () => {
    console.log(`Server on localhost ${port}`);
})