// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with javascript to all requests.
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/javascript"});
  response.write("prompt(1)");
  response.end();
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
