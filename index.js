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
	year_of_release: Number,
	rating: Number,
	director: String
})
//Compile model
var Movie = mongoose.model('Movie', movieSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/movies', function (req, res) {
	Movie.find()
	.select('title year_of_release rating')
	.exec(function(err, movies){
		if (err){		
		console.log(err);
		} else {
		res.json(movies);
		}
	});
   
});
app.get('/movies/new', function (req, res) {
	res.render('new');
   
});
app.get('/movies/:id/edit', function(req, res){
movieId = req.params.id;

Movie.findById(movieId, function (err,movie){

	if (err) return console.log(err);
	   res.json(movie);
	//res.render('detail', {"movie" : movie});
   });

});

app.post('/movies', function(req, res){
	console.log(req.body);
	formData = req.body;
	var movie = new Movie(formData);
	movie.save(function(err, movie) {
			if (err) {
					console.log(err);
			} else {
				//console.log(formData);
				console.log('Successfully saved the movie');
				res.redirect('/movies');
			}
		});

	});
app.get('/movies/:id', function(req, res){
movieId = req.params.id;

Movie.findById(movieId, function (err,movie){

	if (err) return console.log(err);
	   res.json(movie);
	//res.render('detail', {"movie" : movie});
   });

});

app.put('/movies/:id', function(req, res){
movieId = req.params.id;
userRating = req.body.rating;
movieDetails = req.body.details;

Movie.findById(movieId, function (err,movie){

	if (err) return console.log(err);
		movie.rating = userRating;
		movie.details = movieDetails;
		movie.save(function(err, movie){
			if(err) return console.log(err);
		})


	   res.redirect('/movies');
	//res.render('detail', {"movie" : movie});
   });

});
app.delete('/movies/:id', function(req, res){
movieId = req.params.id;

Movie.remove({_id: movieId}, function (err){

	if (err) return console.log(err);
	   res.json("Movie was deleted");
	//res.render('detail', {"movie" : movie});
   });

});


app.listen(8081, function(){
	console.log('server running on 127.0.0.1:8081');

}

);
