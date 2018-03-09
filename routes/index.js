var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/ GET Bam page. /
router.get('/bam', function(req, res) {
    res.render('bam', { title: 'Bam!' });
});

module.exports = router;
