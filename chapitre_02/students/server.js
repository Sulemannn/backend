const express = require("express")
const app = express()
app.use(express.json())


const cors = require("cors")
app.use(cors())

const port = 3499

const students = [{ name: "Osman" }]

app.get("/students", (req, res) => {


    // console.log("test de students");
    res.json(students)
})

app.post("/students", (req, res) => {

    const addStudent = req.body

    students.push(addStudent)

    res.json({
        message: "added a new student !"
    })
})

app.get("*", (req, res) =

    res.json({
        message: "The page was not found :'( "
    })
})

app.listen(port, () => {
    console.log(`Server on localhost ${port}`);
})
