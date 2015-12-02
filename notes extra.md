//var http = require('http');
//var dispatch = require('dispatch');
//var querystring = require('querystring');

// var server = http.createServer(
// 	dispatch({
// 		'/movies'	: {
// 			'GET /' : function(request, response){
// 						movies = [
							

// 						response.end(JSON.stringify(movies));
// 					   },

// 					   'POST /':function (request, response){
// 						   	//get parameters from the form
// 							//create an instance of a movie
// 							formData = '';
// 							request.on('data', function(chunk){
// 								formData = querystring.parse(chunk.toString());
							
// 							});
							
// 							request.on('end', function(){
// 								console.log(formData);
// 							//create an instance of a movie	
								// var movie = new Movie(
								// {
								// 	title: formData.title, 
								// 	category: formData.category, 
								// 	main_actors: formData.main_actors
								// }
								// );
								// response.end();
// 							//save the movie instance
// 							//if successful save with the same movie instance
				 
// 						});
							
// 			}
// 		}
// 	})
// 	);