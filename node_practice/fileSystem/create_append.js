var fs = require('fs');

fs.appendFile('demoforAK2.html', '<h1>Hello Aspire systems!</h1>', function (err) {
  if (err) throw err;
  console.log('Saved Successfully!');
});