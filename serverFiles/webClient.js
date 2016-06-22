// Web client can be created using http module

var http = require('http');

var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
};

var callback = function(response){
// Continuously update stream with data
    var body = '';
    response.on('data', function(data) {
        console.log("data"+data);
        body += data;
    });

    response.on('end', function() {
        // Data received completely.
        console.log(body);
    });
};

// Make a request to server
var req = http.request(options, callback);
req.end();
