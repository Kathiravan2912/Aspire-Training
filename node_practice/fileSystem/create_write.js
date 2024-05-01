var fs = require('fs');

fs.writeFile('DemoPage.html', 'Hello This is Kathiravan...!', function (err) {
  if (err) throw err;
  console.log('Saved successfully!');
});