
var events = require('events');
var eventEmitter = new events.EventEmitter();

// This is listner1 function
var listner1 = function(){
  console.log('This is listener1.')
};

// This is listner2 function
var listner2 = function(){
  console.log('This is listener2.');
};

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection',listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection',listner2);

// Find listner count
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to 'connection' event");

// Fire event. Whenever event fires listners will execute.
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");