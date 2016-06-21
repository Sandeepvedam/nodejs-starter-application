// Streams - streams are objects that lets you write data to destination or read data from sourcein continuous fashion.

// Stream types - Readable, Writable, Duplex, Transform
// Readable(Streams which is used for read operation),
// Writable(Streams which is used for write operation),
// Duplex(Both for read and write),
// Transform(It is a type of duplex stream where the output is computed based on input)

// Stream events - data, end, error, finish
// data(event is fired when availability of data to read)
// end(event is fired when no data available)
// error(This event is fired when there is any error receiving or writing data)
// finish(This event is fired when all data has been flushed to underlying system)

// Piping streams - Piping is a mechanism where we provide output of one stream as the input to another stream.
// It is normally used to get data from one stream and to pass output of that stream to another stream.
// There is no limit on piping operations. Now we'll show a piping example for reading from one file and writing it to another file.

/** Reading data from streams **/
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('../files/input.txt');           // Create readable stream
readerStream.setEncoding('UTF8');                                       // Set encoding type(UTF8)
readerStream.on('data',function(chunk){
    console.log("chunk : "+chunk);
    data +=chunk;                                                       // Handle stream events --> data, end, and error
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("Reading data from streams program ended");


/** Writing data to stream **/
var Writedata = 'Simply Easy Learning';
var writerStream = fs.createWriteStream('../files/output.txt');         // Create a writable stream
writerStream.write(Writedata,'UTF8');                                   // Write the data to stream with encoding to be utf8
writerStream.end();                                                     // Mark the end of file
writerStream.on('finish', function() {
    console.log("Write completed.");
});
writerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("Writing data to streams program Ended");

/** Piping streams **/
readerStream.pipe(writerStream);
