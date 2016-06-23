# nodejs-starter-application
This application contains basic usage of different modules. 

## Why Node.js?
Node.js is server-side run-time environment built on Google chrome's v8 javascript engine.V8 compiles and executes JavaScript at lightning speeds mainly due to the fact that V8 compiles JavaScript into native machine code.
In addition to lightning fast JavaScript execution, the real magic behind Node.js is the event loop. The event loop is a single thread that performs all I/O operations asynchronously.
In contrast, when a Node application needs to perform an I/O operation, it sends an asynchronous task to the event loop, along with a callback function, and then continues to execute the rest of its program. When the async operation completes, the event loop returns to the task to execute its callback.


## Node Framework
**ExpressJS** <br/>
I am using express as a node framework.

## Node.js bullet points
- Node.js offers event-driven. It uses event-looping instead of threads.
- Asynchronous callbacks. 
- Node server automatically enter event-loop at the end of callback defination. It will exit the event loop when there are no callbacks.
- Node.js is pretty fast by events. It is one of the reason. Listener function start executing when event fired.

## When to use?
- single page applications
- chatting applications
- I/O bound applications
- data streaming applications
- json APIs based applications

## Key Feautures :
- Single threaded and highly scalable.
- Non-blocking operation.
- No buffering.
- Event looping and Event-Driven.

## NPM
Hope we know about **npm** node package manager
- update npm package
```
npm install npm -g
```
- syntax
```
npm install <module name>
```
## Install dependencies
- Nodemon
  It automatically watch file changes and runs the server.
```
npm install nodemon
```
- Express
``` 
npm install express
```
- Http
```
npm install http
```
Note : Download other modules that you want.

## Run Node files :
- We can show node files on **serverFiles** directory.
- Navigate to **serverFiles** directory.
- I installed **nodemon**. Use **nodemon** instead of **node** for server run.

**For example:**
- It runs the stream file by below command. you can run other files by similar fashion.
```
nodemon streams.js
```



Happy Coding !!!
