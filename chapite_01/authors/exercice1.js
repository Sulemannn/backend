var express = require('express')
var app = express()

const port = 3000;

app.listen(port, () => {
  console.log("Serveur à l'écoute")
})

app.get('/', (req, res) => {
  res.send("Authors API");
});