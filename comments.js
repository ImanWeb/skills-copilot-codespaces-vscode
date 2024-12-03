// Create web server
// Run: node comments.js
// Test: http://localhost:3000/comments

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Hello World" }));
});

// Listen on port 3000, IP defaults to
