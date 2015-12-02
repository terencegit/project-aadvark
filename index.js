//express
var express =require ('express');
var app = express();
//express middleware
var bodyParser = require('body-parser');

//include mongoose
var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/project-aadvark');

var movieSchema = mongoose.Schema({
	title: String,
	year_of_release: Number
})
//Compile model
var Movie = mongoose.model('Movie', movieSchema);

app.use(bodyParser.urlencoded({extended: true}));

app.get('/movies', function (req, res) {
	Movie.find(function(err, movies){
   if (err){		
		console.log(err);
		} else {
		res.json(movies);
		}
	});

});

app.post('/movies/new', function(req, res){
	console.log(req.body);
	formData = req.body;
	var movie = new Movie(formData);
	movie.save(function(err, movie) {
			if (err){
					console.log(err);
			} else {
				//console.log(formData);
				console.log('Successfully saved the movie');
				res.redirect('/movies');
			}
		});

	});

app.listen(8081, function(){
	console.log('server running on 127.0.0.1:8081');

}

);
