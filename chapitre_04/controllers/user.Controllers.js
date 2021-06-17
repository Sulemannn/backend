const expressValidator = require("express-validator");
const User = require("../models/user");
const City = require('../models/city')

const addUser = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        const profilUser = req.body

        if (!errors.isEmpty()) {
            res.status(400).json({ message: "There was a problem with your form, please correct this" });
        } else {

            const cityFound = await City.findOne({ name: profilUser.city })
            profilUser.city = cityFound

            await User.create(profilUser)
            res.json({ message: 'User added' })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem !!!" })
    }
}