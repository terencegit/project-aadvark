var express = require('express');
var router = express.Router();

var user = require('../models/user');

router.route('/signup')
		.get(function(req,res){
			res.render('users/signup');
		})

module.exports = router;