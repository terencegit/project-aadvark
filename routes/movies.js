var express = require('express');
var router = express.Router();

var Movie = require('../models/movie');

router.route('/movies')
    .get(function(req, res) {
        Movie.find()
            .select('title year_of_release rating')
            .exec(function(err, movies) {
                if (err) {
                    console.log(err);
                } else {
                    res.render('./movies/movies/index', {
                        "movies": movies
                    });
                    //res.json(movies);
                }
            });
    })
    .post(function(req, res) {
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


router.route('/movies/new')
    .get(function(req, res) {
        res.render('./movies/new');
    });


router.route('/movies/login')
    .post(function(req, res) {
        
       res.json("0k");
    });




router.route('/movies/:id')
    .get(function(req, res) {
        movieId = req.params.id;

        Movie.findById(movieId, function(err, movie) {

            if (err) return console.log(err);
            // res.json(movie);
            res.render('./movies/detail', {
                "movie": movie
            });
        });

    })
    .put(function(req, res) {
        updateMovie('PUT', req, res);
    })
    .delete(function(req, res) {
        deleteMovie('DELETE', req, res);
    });

function updateMovie(method, req, res) {
    movieId = req.params.id;
    userRating = req.body.rating;
    movieDetails = req.body.details;

    Movie.findById(movieId, function(err, movie) {

        if (err) return console.log(err);
        movie.rating = userRating;
        movie.details = movieDetails;
        movie.save(function(err, movie) {
            if (err) return console.log(err);
            if (method === 'PUT') {
                res.json(movie);
            } else {
                res.redirect('/movies/' + movie._id);
            };
        });
        res.redirect('/movies');
        //res.render('.detail', {"movie" : movie});
    });
}
router.route('/movies/:id/edit')
    .post(function(req, res) {
        updateMovie('POST');
    })
    .get(function(req, res) {
        movieId = req.params.id;

        Movie.findById(movieId, function(err, movie) {

            if (err) return console.log(err);
            //res.json(movie);
            res.render('./movies/edit', {
                "movie": movie
            });
        });
    });

function deleteMovie(method, req, res) {
    movieId = req.params.id;

    Movie.remove({
        _id: movieId
    }, function(err) {

        if (err) return console.log(err);

        if (method === 'GET') {
            res.redirect('/movies');
        } else {
            res.send('Movie was deleted');
        };
    });
}

router.route('/movies/:id/delete')
    .get(function(req, res) {
        deleteMovie('GET', req, res);
    });
module.exports = router;