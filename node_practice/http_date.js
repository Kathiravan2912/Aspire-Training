var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var data = url.parse(req.url, true).query;    //http://localhost:8080/?year=2002&month=December
  var MYDetail ="I born in "+ data.year + " in the month of " + data.month;       //year and months
  res.end(MYDetail);
}).listen(8080);