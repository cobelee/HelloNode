var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index.html', { title: 'Express/index' });
});

router.get('/default', function(req, res, next) {
  res.render('index', { title: 'Express/default' });
});

module.exports = router;
