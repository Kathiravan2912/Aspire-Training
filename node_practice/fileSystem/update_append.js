var fs = require('fs');

fs.appendFile('DemoPage.html', 'Hello This is Kathiravan...I am an IFET student! In Training', function (err) {
  if (err) throw err;
  console.log('Updated successfully!');
});