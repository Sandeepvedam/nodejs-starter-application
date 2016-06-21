
// Importing modules
var express = require('express');            // ExpressJs. It is NodeJS framework
var path = require('path');

var app = express();                         // Defining express functionality to app

// we are sending template file to browser. This responds with "index.html" file on the homepage
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

// listening port
app.listen(8000);

console.log("See application at http://localhost:8000");