const express = require("express");
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

const app = express();

app.use(express.json());

app.post('/signup',
    expressValidator.body("username").isEmail(),
    expressValidator.body("password").custom((value) => {
        var schema = new passwordValidator();
        schema
            .is().min(4) // Minimum length 4
            .has().digits(2) // Must have at least 2 digits
            .is().oneOf(["Paris", "Tokyo", "Los Angeles"]); // Choix entre l'un de ces 3 villes 
        return schema.validate(value);
    }),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errorMessage: "There is an error"  });

        } else {
            res.json({
                success: true,
                message: 'PW will be saved'
            });
        }
    }
);

const port = 7000;

app.listen(port, () => {
    console.log('Server started on localhost : ' + port);
});