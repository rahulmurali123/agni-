var fs = require('fs')
fs.readFile('demo', function (err, data) {
    if(err){
        return console.log(err);
    }
    console.log("Asynch : " + data.toString());
});