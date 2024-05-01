var http = require('http');
var Myfile = require('fs');
http.createServer(function (req, res) {
  Myfile.readFile('text.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8560);

//('file name', 'new fimle')