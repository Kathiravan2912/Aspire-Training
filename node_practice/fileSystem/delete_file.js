var fs = require('fs');

fs.unlink('form.html', function (err){
    if(err) throw err;
    console.log("Deleted Successfully");
});