//express
var express = require('express');
var cons = require('consolidate');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// passport
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy

//express middleware
var bodyParser = require('body-parser');

//include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-aadvark');

// var movieSchema = mongoose.Schema({
//         title: String,
//         year_of_release: Number,
//         rating: Number
//     });
//     //Compile model
// var Movie = mongoose.model('Movie', movieSchema);
app.set('port', (process.env.PORT || 8081));
app.engine('html', cons.liquid);
app.set('views', './views');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true}));
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
//app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

var movieRoutes = require('./routes/movies');
var usersRoutes = require('./routes/users');
app.use(movieRoutes);
app.use(usersRoutes);
//console.log(routes);

// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(app.get('port'), function() {
        console.log('server running on 127.0.0.1:%s',app.get('port'));
});
