var http = require('http');
var dt = require('./MyModule.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Now..!: " + dt.myValue());
  res.end();
}).listen(8080);