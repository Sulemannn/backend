const express = require("express")
const router = express.Router()
const expressValidator = require("express-validator");
const { User } = require("../models/users")
const { City } = require("../models/city")


router.get("/add",
    expressValidator.body("username").isLength({ min: 4 }),
    expressValidator.body("email").isEmail(),
    expressValidator.body("age").isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").equals("Paris" || "Tokyo" || "Los Angeles"),
)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

router.get("/", sendHeroList)

router.get("/:name", sendHero)

router.get("/:name/powers", sendHeroPower)

router.post("/", transformName, continueIfHeroDoesntExists, addNewHero)

