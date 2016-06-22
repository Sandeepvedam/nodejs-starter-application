// Web server - As we know that it handles http requests sent by http client like browsers and returns response(web pages) to client side.

// Creating web server with node - node.js provides http module. which is used to create http client of server.

var http = require('http');
var fs = require('fs');
var url = require('url');

const port = 8081;

function handleRequest(request, response){
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");
    // Read the requested file content from file system
    fs.readFile('../files/input.txt', function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            //Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body
        response.end('It works!!! path hit:' + request.url);
    });

}

// create server
var server = http.createServer(handleRequest);

server.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port)
});

