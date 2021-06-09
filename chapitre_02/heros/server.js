import express from "express"
import cors from "cors"
import { superHeros } from './dataHeroes.mjs'

const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.get("/heroes", (req, res) => {
    res.json(superHeros)
})

app.get("/heroes/:name", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    for (var i = 0; i < superHeros.length; i++) {

        if (superHeros[i].name.toLowerCase() === nameHero) {
            res.json(superHeros[i])
        }
    }

    res.json({
        message: "Hero not found"
    })
})

app.get("/heroes/:name/powers", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    const selectedHero = superHeros.find(elem => {
        return nameHero === elem.name.toLowerCase()
    })

    res.json(selectedHero.powers)
})

const transformName = (req, res, next) => {
    // console.log("transformName req.body ", req.body);
    // console.log("transformName req.body.name ", req.body.name);

    if (req.body.name === undefined) {
        res.json({
            erroMessage: "To add a hero send at least he's name"
        })
    } else {
        req.body.name = req.body.name.toLowerCase()

        next()
    }

}

app.post("/heroes", transformName, (req, res) => {
    // console.log(req.body);

    const hero = req.body

    superHeros.push(hero)

    res.json({
        message: "Ok, héro ajouté",
        hero
    })
    })

app.post("/heroes/:name/powers", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    const selectedHero = superHeros.find(elem => {
        return nameHero === elem.name.toLowerCase()
    })

    if (selectedHero) {


        const heroPower = req.body.power

        selectedHero.powers.push(heroPower)

        res.json({
            message: `Power added! The powers of ${nameHero} are ${selectedHero.powers}`
        })
    } else {
        res.json({
            errorMessage: "Hero not found"
        })
    }
})


app.get("*", (req, res) => {

    res.json({
        alertMessage: "Error ! The page was not found !"
    })
})


app.listen(port, () => {
    console.log("Server on localhost", port);
})





// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/superHeros", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("I'm connected to the database")
//     }
// })

// const heroSchema = new mongoose.Schema({
//     name: String,
//     powers: Array,
//     color: String,
//     isAlive: Boolean,
//     age: Number,
//     image: String
// })

// const Hero = mongoose.model("Hero", heroSchema)

// Hero.insertMany([
//     {
//         name: "Iron Man",
//         powers: ["money"],
//         color: "red",
//         isAlive: true,
//         age: 46,
//         image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
//     },
//     {
//         name: "Thor",
//         powers: ["electricity", "worthy"],
//         color: "blue",
//         isAlive: true,
//         age: 300,
//         image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
//     },
//     {
//         name: "Daredevil",
//         powers: ["blind"],
//         color: "red",
//         isAlive: false,
//         age: 30,
//         image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
//     }
// ]).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error("Error insertMany Card: ", err);
// })
