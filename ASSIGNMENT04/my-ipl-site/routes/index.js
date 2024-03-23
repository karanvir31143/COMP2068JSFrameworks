var express = require('express');
var router = express.Router();

// Home Page Route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IPL Teams' });
});

// Individual Team Routes
router.get('/mumbai', function(req, res, next) {
  res.render('mumbai', { title: 'Mumbai Indians' });
});

router.get('/chennai', function(req, res, next) {
  res.render('chennai', { title: 'Chennai Super Kings' });
});

router.get('/kolkata', function(req, res, next) {
  res.render('kolkata', { title: 'Kolkata Knight Riders' });
});

router.get('/bangalore', function(req, res, next) {
  res.render('bangalore', { title: 'Royal Challengers Bangalore' });
});

module.exports = router;