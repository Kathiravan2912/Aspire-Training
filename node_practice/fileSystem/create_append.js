var fs = require('fs');

fs.appendFile('demoforAK.html', 'Hello Aspire systems!', function (err) {
  if (err) throw err;
  console.log('Saved Successfully!');
});