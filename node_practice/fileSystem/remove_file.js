var fs = require('fs');

fs.unlink('ak.html', function (err) {
  if (err) throw err;
  console.log('Deleted successfully!');
});