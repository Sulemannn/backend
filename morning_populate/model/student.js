const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

    firstName: { type: String, unique: true },
    surname: String,
    adress: [{
        type: mongoose.Types.ObjectId,
        ref: "Adress"
    }],
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student