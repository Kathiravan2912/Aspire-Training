var fs = require('fs');

fs.writeFile('demo_text.html', 'Hello This is Kathiravan...From IFET , Villupuram!', function (err) {
  if (err) throw err;
  console.log('Updated successfully!');
});