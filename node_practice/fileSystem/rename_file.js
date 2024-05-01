var file = require('fs');

file.rename('demo_text.html', 'Mypage.html', function(err){
    if(err)
    throw err;
    console.log("Successfully Renamed!");
})