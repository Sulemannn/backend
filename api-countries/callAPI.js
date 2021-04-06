var request = require("request");

request.get("http://localhost:3499/countries", function (err, res, body) {

    console.log(typeof body); // body is a string 
    console.log(typeof JSON.parse(body)); // now body is a object => (array)

    var reverseCountry = JSON.parse(body);

    console.log(reverseCountry.reverse());

})