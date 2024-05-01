var fs = require('fs');

fs.open('admin.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved Successfully!');
});