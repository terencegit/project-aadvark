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
3.	Starting a node project.
//	run this in the terminal within your app directory
		npm init

4.	Adding a module to your project using npm.
//	Run thid in the terminal within your app directory
		npm install --save <module_name>

'''
Restful Routes

WHAT IS REST?

-	Rest is an acronymn that stands for representational state transfer
-	It was developed to provide a standard through which the client could communicate 		with the server over the web.


WHY REST?
-	REST provides a standard method for resource manipulation on the server.

COMPONETS of REST

-	A url that represents the resource
-	A http verb/method that maps to a controller on the server.

'GET /photo/19'

REST in nodejs

Using REST in a web application
1.	Client sends a request: 'GET /movie/198'
2.	The sever's router maps that request and the verb to a controller's action:
```
The request /movie/198 would be mapped to a controller called Movie which would have
an action called show to handle that request.

```
3.	The show action will communicate with the Movie Model and query it for a movie with the id 198.

Common patterns of restful verbs and actions
assuming you have a resource called photo, the RESTFUL routes that would apply to that resource would be as follows:

GET /photos/

-	Maps out to a controller called PhotosController which has a method calld index.
Method => GET

checkout the section titled 2.2 CRUD, verbs and actions for a clear example of a resource  using RESTFUL routing [Rails Routing]

CORS

-	This is an acronym for Cross origin resource sharing.
-	It refers to the ability of one to domain to use/ask for resources
	from another domain.
		example:

		The html with this image tag is being served from http://domain-a.com <img src="http://domain -b.com/mouse.jpg" 

-	it is requesting an image from http://domain -b.com which is a different domain form 	 where its been hosted.
-	The only way that a string can access a different resource from another domain is if 
	the server on that domain allows it to.
-	This is done by adding that domain to the request header known as 
	>>>Access-Control-Allow-Origin

	Access-Control-Allow-Origin: <allowed domains or # to allow any domain>



Nosql Databases

-	These are data bases that define ways of assesing and storing data in ways other
	than using relations

	Why Nosql?

-	Nosgl was dveloped as a aresponse to the rising demand of:
		* on demand
		* scalable
		* easily replicable
		* 
Types of NoSql

-	Document databases
-	Graph stores
-	Key value stores
-	Wide column stores

Looking for Help
-	Documentation
-	Foums
-	Tutorials
-	Search engine e.g. Google, Bing etc


Checkout this link <http://nosql-database.org/)> for a list of other data bases...


