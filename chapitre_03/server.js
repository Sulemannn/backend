const express = require('express');
const multer = require('multer');
const cors = require("cors")
const fs = require("fs");
const path = require("path");

const upload = multer({ dest: 'public/uploads/' }); // not pre installed

const port = 8000

const app = express();

app.use(cors())

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);

    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));

    res.send("done");
});

app.listen(port, () => {
    console.log("Server on localhost: ", port)
})