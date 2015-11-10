#Introduction to Node.js

What is Node?
------------

It is an event driven non-blocking i/o *Server* that is asychronous in nature.

It is written using Javascript.

##How it works in a nutshell

1.	Node recieves events
2.	It stashes them in an event qeu.
3.	The events are then pushed to a thread pool
	for processing.
4.	Once a thread is done, it communicates it's result 		back to Node.

## Concepts

-	Event driven
'''
// jquery
$('div').on('click' function(){
	...
})

//Node syntax
var http = require('http');

http.createServer(8081, function(request, response, next){
	
});

'''
-	None blocking
	-	In a procedural language, ny heavy and time consuming operations would
		be ran in a separate thread from the main one.

	-	Node provides us withe ability to write our code using asychronous and event driven style where callbacks are ran after events are recieved.
	-	This gives us the abilty to have multiple i/o operations within a single thread and not have them 'block'(wait for the previous process 
		to run before executing the main process).

-	Asychronous
 	-	Node uses a non-procedural style of computation
 	-	It allows request to be executed in no 	particular order
 		where the previous operation does not have to finish before
 		the next one can begin.

-	Thread
	-	when a program is running on a compiler. Te compiler creates a main
		process within which it will execute your code. this process is known as Thread.

## Common Syntax used in Node.
1.	Running a file using Node.
//In the folder where thw js file is defined, run node <filename>

2.	Importing packages and files into your main file.
//This imports a natively defined node.js package

		require('http');

//	This imports a node.js package defined in the node_modules
//	folder within your apps directory.
		
		require('./express');
//	This imports a module from a folder wihin your app

We use the require function to export modules defined in other files into oue main file.
//	This refers
'''