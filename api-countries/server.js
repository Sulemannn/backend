var express = require("express");

var app = express();

var port = 3499;

app.get("/countries", function (req, res) {

    var myCountries = ["France","England", "Belgium", "Brazil", "Japan"]

    res.send(myCountries);

})








app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


