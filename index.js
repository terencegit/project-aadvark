var http = require('http');
var dispatch = require('dispatch');
var querystring = require('querystring');
//include mongoose
var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/project-aadvark');

var movieSchema = mongoose.Schema({
	name: String,
	category: Number
})
//Compile model
var Movie = mongoose.model('Movie', movieSchema);

var server = http.createServer(
	dispatch({
		'/movies'	: {
			'GET /' : function(request, response, next){
						movies = [
							{
							title: 'Gone with wind',
							category: ['Romance'],
							main_actors: ['Mwangi','Nelson']
							},

							{
							title: 'Sarafina',
							category: ['Soap'],
							main_actors: ['Safari','Jones']
							},

							{
							title: 'The Gods must be crazy',
							category: ['Comedy'],
							main_actors: ['Mwangi','Njoroge']
							},

							{
							title: 'Rapture',
							category: ['Action'],
							main_actors: ['Pastor','Kanyari']
							}
						]

						response.end(JSON.stringify(movies));
					   },

					   'POST /':function (request, response){
						   	//get parameters from the form
							//create an instance of a movie
							formData = '';
							request.on('data', function(chunk){
								formData = querystring.parse(chunk.toString())
							});
							
							request.on('end', function(){
								console.log(formData)
								var movie = new Movie({
									title: formData.title, 
									category: formData.category, 
									main_actors: formData.main_actors
								});
							//save the movie instance
							//if successful save with the same movie instance
				
						});
							
			}
		})
	);

server.listen(8081, function(){
	console.log('server running on 127.0.0.1:8081');

});

