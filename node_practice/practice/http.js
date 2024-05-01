var locate = require('http');
locate.createServer(function (req, kathir) {
    kathir.write('Hello World!'); 
    kathir.end(); 
  }).listen(8900);