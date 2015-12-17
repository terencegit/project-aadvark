var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
//mongoose.connect('mongodb://localhost/project-aadvark');

// define a Schema
var userSchema = mongoose.Schema({
        username: String,
        password: String,
        email: String
    })
// set plugin
userSchema.plugin(passportLocalMongoose)

    //Compile model
module.exports = mongoose.model('User', userSchema);