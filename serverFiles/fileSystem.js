// File system - It is used to file I/O operations.

/** Synchronous and Asynchronous
 * Every method in fs module is synchronous and as well as asynchronous.
 * Asynchronous method takes last parameter as a completion function callback and first parameter is error function callback
 **/
var fs = require("fs");

// Asynchronous read
fs.readFile('../files/input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('../files/input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

/** Open a file
 * syntax : fs.open(path flags[, mode], callback)
 * Flag : It tells the behaviour of file to be opened.
 * mode - This sets the file mode (permission and sticky bits),
 * but only if the file was created. It defaults to 0666, readable and writeable.
 **/
// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('../files/input.txt', 'r+', function(err, fd) {          // r+ flag - Open file for reading and writing. An exception occurs if the file does not exist.
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});

/** Information about file
 * stat - fs.stat(path,callback) - we can know the info about file
 **/
console.log("Going to get file info!");
fs.stat('../files/input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");
    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});