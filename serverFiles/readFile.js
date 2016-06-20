// Load fs module
var fs = require('fs');

fs.readFile('../files/input.txt',function(error, data){
    if (error){
        console.log(error.stack);
        return;
    }
    console.log(data.toString());
});

console.log("Program Ended");