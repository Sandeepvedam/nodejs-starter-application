
// Buffer is global class. No need to import buffer module
var buffer1 = new Buffer(26);
console.log(buffer1);

var buffer2 = new Buffer("This is sample buffer");
console.log(buffer2);

var buffer3 = new Buffer([10, 20, 30, 40]);
console.log(buffer3);

// Writing into node buffer
var buffer4 = new Buffer(256);
var length = buffer4.write("Sample node buffer");
console.log('Octets written : '+ length);

// Reading buffers  - buffer.toString()
// Syntax : buffer.toString([encoding][,start][,end])
for (var i = 0 ; i < 26 ; i++) {
    buffer1[i] = i + 97;
}
console.log(buffer1);
console.log( buffer1.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buffer1.toString('ascii',0,5));   // outputs: abcde
console.log( buffer1.toString('utf8',0,5));    // outputs: abcde
console.log( buffer1.toString(undefined,0,5));

// Converting buffer to JSON
var res  = buffer2.toJSON(buffer2);
console.log(res);

// Concating buffers
var buffer5 = new Buffer("concated");
var concatResult = Buffer.concat([buffer2,buffer5]);
console.log(concatResult.toString());

// Compare buffers
var buffer6 = new Buffer('ABC');
var buffer7 = new Buffer('ABCD');
var result = buffer6.compare(buffer7);
if(result < 0) {
    console.log(buffer6 +" comes before " + buffer7);
}else if(result == 0){
    console.log(buffer6 +" is same as " + buffer7);
}else {
    console.log(buffer6 +" comes after " + buffer7);
}

// Buffer copy
var buffer8 = new Buffer('ABC');
//copy a buffer
var buffer9 = new Buffer(3);
buffer8.copy(buffer9);
console.log("buffer content: " + buffer9.toString());

// Slice buffer
var buffer10 = new Buffer('SandeepKumar');
//slicing a buffer
var buffer11 = buffer10.slice(0,7);
console.log("buffer11 content: " + buffer11.toString());