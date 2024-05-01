var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! This is Kathiravan.');
  res.end();
}).listen(8080);