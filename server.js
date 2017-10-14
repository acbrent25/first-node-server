// Importing http package
var http = require("http");

// Use port 8080 for the request
var PORT1 = 7000;
var PORT2 = 7500;

/************************
 * PORT 1
 **********************/
function handleRequest(request, response) {
  response.end("Hello " + request.url);
  console.log("hello");
}

var server = http.createServer(handleRequest);


server.listen(PORT1, function() {

  console.log("Server listening on: http://localhost:" + PORT1);
});

/************************
 * PORT 2
 **********************/

function handleRequest2(request, response) {
    response.end("goodbye " + request.url);
    
  }
  
  var server2 = http.createServer(handleRequest2);
  
  
  server2.listen(PORT2, function() {
  
    console.log("Server listening on: http://localhost:" + PORT2);
  });