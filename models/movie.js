var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/project-aadvark');

var movieSchema = mongoose.Schema({
        title: String,
        year_of_release: Number,
        rating: Number
    })
    //Compile model
module.exports = mongoose.model('Movie', movieSchema);