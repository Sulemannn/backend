const express = require("express")
const router = express.Router()
const expressValidator = require("express-validator");
const { User } = require("../models/users")
const { City } = require("../models/city")


router.get("/add",
    expressValidator.body("username").exists().isLength({ min: 4 }),
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("age").exists().isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").exists().equals("Paris" || "Tokyo" || "Los Angeles"),


    (req, res) => {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({
                errors: errors.array(),
                message: 'there is a problem'
            });
            return;
        } else {
            const User = req.body
            const newUser = User.create(user)

            res.json({
                success: true,
                message: 'User will be saved'
            });
        }
    }
);

// router.get("/", sendHeroList)

// router.get("/:name", sendHero)

// router.get("/:name/powers", sendHeroPower)

// router.post("/", transformName, continueIfHeroDoesntExists, addNewHero)

